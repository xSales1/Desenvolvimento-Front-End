/**
 * ACESSIBILIDADE - Funcionalidades WCAG 2.1 AA
 * Implementa recursos de acessibilidade avançados
 */

class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSkipNavigation();
        this.setupKeyboardNavigation();
        this.setupAriaAnnouncements();
        this.setupFocusManagement();
        this.setupColorSchemeToggle();
        this.setupReducedMotion();
        this.setupScreenReaderAnnouncements();
    }

    /**
     * Configurar navegação via skip links
     */
    setupSkipNavigation() {
        const skipLinks = document.querySelectorAll('.skip-link');
        
        skipLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Anunciar para leitores de tela
                    this.announceToScreenReader(`Navegou para ${target.textContent || target.getAttribute('aria-label') || 'seção principal'}`);
                }
            });
        });
    }

    /**
     * Configurar navegação por teclado
     */
    setupKeyboardNavigation() {
        // Navegação com setas no menu
        const navItems = document.querySelectorAll('.nav-link');
        
        navItems.forEach((item, index) => {
            item.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        const nextIndex = (index + 1) % navItems.length;
                        navItems[nextIndex].focus();
                        break;
                        
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        const prevIndex = (index - 1 + navItems.length) % navItems.length;
                        navItems[prevIndex].focus();
                        break;
                        
                    case 'Home':
                        e.preventDefault();
                        navItems[0].focus();
                        break;
                        
                    case 'End':
                        e.preventDefault();
                        navItems[navItems.length - 1].focus();
                        break;
                }
            });
        });

        // Navegação em dropdowns
        this.setupDropdownKeyboard();
        
        // Navegação em formulários
        this.setupFormKeyboard();
    }

    /**
     * Configurar navegação por teclado em dropdowns
     */
    setupDropdownKeyboard() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            const items = dropdown.querySelectorAll('.dropdown-item');
            
            if (!toggle || !menu) return;

            toggle.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'Enter':
                    case ' ':
                    case 'ArrowDown':
                        e.preventDefault();
                        this.openDropdown(dropdown);
                        if (items.length > 0) {
                            items[0].focus();
                        }
                        break;
                }
            });

            items.forEach((item, index) => {
                item.addEventListener('keydown', (e) => {
                    switch(e.key) {
                        case 'ArrowDown':
                            e.preventDefault();
                            const nextIndex = (index + 1) % items.length;
                            items[nextIndex].focus();
                            break;
                            
                        case 'ArrowUp':
                            e.preventDefault();
                            const prevIndex = (index - 1 + items.length) % items.length;
                            items[prevIndex].focus();
                            break;
                            
                        case 'Escape':
                            e.preventDefault();
                            this.closeDropdown(dropdown);
                            toggle.focus();
                            break;
                            
                        case 'Home':
                            e.preventDefault();
                            items[0].focus();
                            break;
                            
                        case 'End':
                            e.preventDefault();
                            items[items.length - 1].focus();
                            break;
                    }
                });
            });
        });
    }

    /**
     * Configurar navegação por teclado em formulários
     */
    setupFormKeyboard() {
        const checkboxCards = document.querySelectorAll('.checkbox-card');
        
        checkboxCards.forEach(card => {
            const input = card.querySelector('input[type="checkbox"]');
            
            if (input) {
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        input.checked = !input.checked;
                        input.dispatchEvent(new Event('change'));
                        
                        // Anunciar mudança de estado
                        const label = card.querySelector('.checkbox-title')?.textContent || 'Opção';
                        const state = input.checked ? 'selecionado' : 'desmarcado';
                        this.announceToScreenReader(`${label} ${state}`);
                    }
                });
            }
        });
    }

    /**
     * Configurar anúncios ARIA
     */
    setupAriaAnnouncements() {
        // Criar região de anúncios
        if (!document.getElementById('aria-announcements')) {
            const announcer = document.createElement('div');
            announcer.id = 'aria-announcements';
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'sr-only';
            document.body.appendChild(announcer);
        }

        // Criar região de anúncios assertivos
        if (!document.getElementById('aria-announcements-assertive')) {
            const announcer = document.createElement('div');
            announcer.id = 'aria-announcements-assertive';
            announcer.setAttribute('aria-live', 'assertive');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'sr-only';
            document.body.appendChild(announcer);
        }
    }

    /**
     * Gerenciar foco
     */
    setupFocusManagement() {
        // Capturar foco em modais
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const modal = document.querySelector('.modal[aria-hidden="false"]');
                if (modal) {
                    this.trapFocusInModal(e, modal);
                }
            }
        });

        // Restaurar foco após fechar modais
        this.setupModalFocusRestore();
    }

    /**
     * Capturar foco em modal
     */
    trapFocusInModal(e, modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    /**
     * Configurar restauração de foco em modais
     */
    setupModalFocusRestore() {
        let lastFocusedElement = null;

        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-modal-trigger]')) {
                lastFocusedElement = e.target;
            }
        });

        // Observar mudanças em modais
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden') {
                    const modal = mutation.target;
                    if (modal.classList.contains('modal')) {
                        if (modal.getAttribute('aria-hidden') === 'false') {
                            // Modal abriu - focar no primeiro elemento
                            const firstFocusable = modal.querySelector('button, [href], input, select, textarea');
                            if (firstFocusable) {
                                firstFocusable.focus();
                            }
                        } else if (lastFocusedElement) {
                            // Modal fechou - restaurar foco
                            lastFocusedElement.focus();
                            lastFocusedElement = null;
                        }
                    }
                }
            });
        });

        document.querySelectorAll('.modal').forEach(modal => {
            observer.observe(modal, { attributes: true });
        });
    }

    /**
     * Configurar toggle de esquema de cores
     */
    setupColorSchemeToggle() {
        // Criar botão de toggle se não existir
        if (!document.getElementById('color-scheme-toggle')) {
            const toggle = document.createElement('button');
            toggle.id = 'color-scheme-toggle';
            toggle.className = 'btn btn-secondary';
            toggle.setAttribute('aria-label', 'Alternar tema escuro');
            toggle.innerHTML = '🌙';
            toggle.style.position = 'fixed';
            toggle.style.top = '20px';
            toggle.style.right = '20px';
            toggle.style.zIndex = '1000';
            
            document.body.appendChild(toggle);

            toggle.addEventListener('click', () => {
                this.toggleColorScheme();
            });

            toggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleColorScheme();
                }
            });
        }
    }

    /**
     * Alternar esquema de cores
     */
    toggleColorScheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('preferred-theme', newTheme);
        
        // Atualizar label do botão
        const toggle = document.getElementById('color-scheme-toggle');
        if (toggle) {
            toggle.innerHTML = isDark ? '🌙' : '☀️';
            toggle.setAttribute('aria-label', `Alternar para tema ${isDark ? 'escuro' : 'claro'}`);
        }

        // Anunciar mudança
        this.announceToScreenReader(`Tema alterado para ${isDark ? 'claro' : 'escuro'}`);
    }

    /**
     * Configurar redução de movimento
     */
    setupReducedMotion() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const handleMotionChange = (e) => {
            if (e.matches) {
                document.documentElement.classList.add('reduce-motion');
                this.announceToScreenReader('Animações reduzidas ativadas');
            } else {
                document.documentElement.classList.remove('reduce-motion');
            }
        };

        mediaQuery.addListener(handleMotionChange);
        handleMotionChange(mediaQuery);
    }

    /**
     * Configurar anúncios para leitores de tela
     */
    setupScreenReaderAnnouncements() {
        // Anunciar mudanças na página
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Anunciar novos alertas
                            if (node.classList?.contains('alert') || node.classList?.contains('toast')) {
                                const message = node.textContent?.trim();
                                if (message) {
                                    this.announceToScreenReader(message, true);
                                }
                            }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Anunciar mensagem para leitores de tela
     */
    announceToScreenReader(message, assertive = false) {
        const announcerId = assertive ? 'aria-announcements-assertive' : 'aria-announcements';
        const announcer = document.getElementById(announcerId);
        
        if (announcer) {
            announcer.textContent = '';
            setTimeout(() => {
                announcer.textContent = message;
            }, 100);
        }
    }

    /**
     * Abrir dropdown
     */
    openDropdown(dropdown) {
        const menu = dropdown.querySelector('.dropdown-menu');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (menu && toggle) {
            menu.style.display = 'block';
            toggle.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-hidden', 'false');
        }
    }

    /**
     * Fechar dropdown
     */
    closeDropdown(dropdown) {
        const menu = dropdown.querySelector('.dropdown-menu');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (menu && toggle) {
            menu.style.display = 'none';
            toggle.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
        }
    }

    /**
     * Validar contraste de cores
     */
    validateColorContrast() {
        // Função para calcular contraste entre duas cores
        const getContrast = (color1, color2) => {
            const getLuminance = (color) => {
                const rgb = color.match(/\d+/g);
                if (!rgb) return 0;
                
                const [r, g, b] = rgb.map(c => {
                    c = parseInt(c) / 255;
                    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
                });
                
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
            };
            
            const lum1 = getLuminance(color1);
            const lum2 = getLuminance(color2);
            const brightest = Math.max(lum1, lum2);
            const darkest = Math.min(lum1, lum2);
            
            return (brightest + 0.05) / (darkest + 0.05);
        };

        // Log de elementos com baixo contraste (apenas em desenvolvimento)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('🔍 Validação de contraste iniciada...');
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new AccessibilityManager();
    
    // Aplicar tema salvo
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// Exportar para uso em outros módulos
window.AccessibilityManager = AccessibilityManager;