/**
 * Funcionalidades Extras - Manipulação do DOM
 * Recursos adicionais para melhorar a experiência do usuário
 */

class DOMEnhancer {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupScrollEffects();
            this.setupAnimations();
            this.setupInteractiveElements();
            this.setupAccessibility();
        });
    }

    setupScrollEffects() {
        // Efeito de paralaxe suave no hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero) {
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            }
        });

        // Animação de elementos ao aparecer na tela
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observa elementos para animação
        document.querySelectorAll('.info-card, .section-title, .hero-content').forEach(el => {
            observer.observe(el);
        });
    }

    setupAnimations() {
        // Adiciona estilos de animação
        const animationStyles = document.createElement('style');
        animationStyles.textContent = `
            .info-card, .section-title, .hero-content {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .card-hover {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .card-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
            
            .btn-animate {
                position: relative;
                overflow: hidden;
            }
            
            .btn-animate::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }
            
            .btn-animate:hover::before {
                left: 100%;
            }
            
            .pulse {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(animationStyles);

        // Aplica classes de animação
        setTimeout(() => {
            document.querySelectorAll('.info-card').forEach(card => {
                card.classList.add('card-hover');
            });

            document.querySelectorAll('.btn').forEach(btn => {
                btn.classList.add('btn-animate');
            });

            document.querySelectorAll('.badge').forEach(badge => {
                badge.classList.add('pulse');
            });
        }, 1000);
    }

    setupInteractiveElements() {
        // Contador animado para estatísticas
        this.setupCounters();

        // Tooltip dinâmico
        this.setupTooltips();

        // Loading states para botões
        this.setupButtonLoading();

        // Auto-complete para campos de endereço
        this.setupAddressAutocomplete();
    }

    setupCounters() {
        const counters = [
            { selector: '.animals-rescued', target: 150, suffix: '+' },
            { selector: '.volunteers', target: 45, suffix: '' },
            { selector: '.adoptions', target: 120, suffix: '+' }
        ];

        counters.forEach(counter => {
            const element = document.querySelector(counter.selector);
            if (element) {
                this.animateCounter(element, counter.target, counter.suffix);
            }
        });
    }

    animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 20);
    }

    setupTooltips() {
        // Cria tooltip dinâmico
        const tooltip = document.createElement('div');
        tooltip.className = 'dynamic-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            pointer-events: none;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(tooltip);

        // Adiciona tooltip a elementos com data-tooltip
        document.addEventListener('mouseover', (e) => {
            const element = e.target.closest('[data-tooltip]');
            if (element) {
                const text = element.getAttribute('data-tooltip');
                tooltip.textContent = text;
                tooltip.style.opacity = '1';
                this.positionTooltip(tooltip, e);
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (tooltip.style.opacity === '1') {
                this.positionTooltip(tooltip, e);
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (!e.target.closest('[data-tooltip]')) {
                tooltip.style.opacity = '0';
            }
        });
    }

    positionTooltip(tooltip, event) {
        const x = event.clientX + 10;
        const y = event.clientY - 10;
        
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }

    setupButtonLoading() {
        document.addEventListener('click', (e) => {
            const button = e.target.closest('.btn[type="submit"]');
            if (button) {
                this.showButtonLoading(button);
            }
        });
    }

    showButtonLoading(button) {
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
            Enviando...
        `;
        button.disabled = true;

        // Adiciona animação de spin
        const spinStyle = document.createElement('style');
        spinStyle.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            .animate-spin {
                animation: spin 1s linear infinite;
            }
        `;
        document.head.appendChild(spinStyle);

        // Restaura após 3 segundos (ou quando o formulário for processado)
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 3000);
    }

    setupAddressAutocomplete() {
        const cepField = document.querySelector('#cep');
        if (cepField) {
            cepField.addEventListener('blur', (e) => {
                const cep = e.target.value.replace(/\D/g, '');
                if (cep.length === 8) {
                    this.fetchAddressByCEP(cep);
                }
            });
        }
    }

    async fetchAddressByCEP(cep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            
            if (!data.erro) {
                // Preenche campos automaticamente
                const cidadeField = document.querySelector('#cidade');
                const enderecoField = document.querySelector('#endereco');
                
                if (cidadeField) {
                    cidadeField.value = `${data.localidade} - ${data.uf}`;
                }
                
                if (enderecoField && data.logradouro) {
                    enderecoField.value = `${data.logradouro}, ${data.bairro}`;
                }

                // Mostra notificação de sucesso
                this.showAddressNotification('Endereço preenchido automaticamente!', 'success');
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            this.showAddressNotification('Erro ao buscar CEP. Verifique se está correto.', 'error');
        }
    }

    showAddressNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideDown 0.3s ease-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    setupAccessibility() {
        // Navegação por teclado melhorada
        document.addEventListener('keydown', (e) => {
            // ESC fecha dropdown se aberto
            if (e.key === 'Escape') {
                const openDropdown = document.querySelector('.dropdown:hover');
                if (openDropdown) {
                    openDropdown.blur();
                }
            }

            // Enter em links SPA
            if (e.key === 'Enter' && e.target.classList.contains('spa-link')) {
                e.target.click();
            }
        });

        // Foco visível melhorado
        const focusStyle = document.createElement('style');
        focusStyle.textContent = `
            .spa-link:focus,
            .btn:focus,
            .form-input:focus {
                outline: 2px solid #3b82f6 !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(focusStyle);

        // Anuncia mudanças de página para leitores de tela
        this.setupAriaLiveRegion();
    }

    setupAriaLiveRegion() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(liveRegion);

        // Atualiza quando a página muda (integração com SPA)
        window.addEventListener('popstate', () => {
            setTimeout(() => {
                const title = document.querySelector('h2')?.textContent || 'Página carregada';
                liveRegion.textContent = `Navegou para: ${title}`;
            }, 500);
        });
    }
}

// Adiciona estilos de animação inicial
const initialStyles = document.createElement('style');
initialStyles.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(initialStyles);

// Inicializa as melhorias do DOM
new DOMEnhancer();