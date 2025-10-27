/**
 * Sistema de Validação de Formulários - ProPet
 * Verificação de consistência de dados com aviso ao usuário
 */

class FormValidator {
    constructor() {
        this.form = null;
        this.errors = new Map();
        this.rules = {};
        this.init();
    }

    init() {
        // Aguarda um pouco para garantir que o DOM foi atualizado
        setTimeout(() => {
            this.form = document.querySelector('form');
            if (this.form) {
                this.setupValidationRules();
                this.setupEventListeners();
                this.createErrorContainer();
            }
        }, 100);
    }

    setupValidationRules() {
        this.rules = {
            nome: {
                required: true,
                minLength: 3,
                pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                message: 'Nome deve conter apenas letras e ter pelo menos 3 caracteres'
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Por favor, insira um email válido'
            },
            telefone: {
                required: true,
                pattern: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                message: 'Telefone deve estar no formato (00) 00000-0000'
            },
            cpf: {
                required: true,
                pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                validator: this.validateCPF.bind(this),
                message: 'CPF deve estar no formato 000.000.000-00 e ser válido'
            },
            idade: {
                required: true,
                min: 18,
                max: 100,
                message: 'Idade deve ser entre 18 e 100 anos'
            },
            cep: {
                required: true,
                pattern: /^\d{5}-\d{3}$/,
                message: 'CEP deve estar no formato 00000-000'
            },
            cidade: {
                required: true,
                minLength: 2,
                message: 'Cidade é obrigatória'
            },
            endereco: {
                required: true,
                minLength: 10,
                message: 'Endereço deve ter pelo menos 10 caracteres'
            },
            disponibilidade: {
                required: true,
                min: 4,
                max: 40,
                message: 'Disponibilidade deve ser entre 4 e 40 horas por semana'
            }
        };
    }

    setupEventListeners() {
        if (!this.form) return;

        // Validação em tempo real
        this.form.addEventListener('input', (e) => {
            const field = e.target;
            if (field.name && this.rules[field.name]) {
                this.validateField(field);
            }
        });

        // Formatação automática
        this.form.addEventListener('input', (e) => {
            const field = e.target;
            this.formatField(field);
        });

        // Validação no envio
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });

        // Validação de checkboxes (áreas de interesse)
        const checkboxes = this.form.querySelectorAll('input[name="interesses"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.validateCheckboxes();
            });
        });
    }

    createErrorContainer() {
        // Remove container existente
        const existing = document.querySelector('.validation-errors');
        if (existing) existing.remove();

        // Cria novo container
        const errorContainer = document.createElement('div');
        errorContainer.className = 'validation-errors';
        errorContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            z-index: 9999;
            display: none;
        `;

        document.body.appendChild(errorContainer);
    }

    validateField(field) {
        const fieldName = field.name;
        const rule = this.rules[fieldName];
        const value = field.value.trim();

        // Remove erro anterior
        this.clearFieldError(field);
        this.errors.delete(fieldName);

        // Validação obrigatória
        if (rule.required && !value) {
            this.addFieldError(field, `${this.getFieldLabel(field)} é obrigatório`);
            return false;
        }

        if (!value) return true; // Campo opcional vazio

        // Validação de comprimento mínimo
        if (rule.minLength && value.length < rule.minLength) {
            this.addFieldError(field, rule.message);
            return false;
        }

        // Validação de padrão
        if (rule.pattern && !rule.pattern.test(value)) {
            this.addFieldError(field, rule.message);
            return false;
        }

        // Validação numérica
        if (rule.min !== undefined || rule.max !== undefined) {
            const numValue = parseFloat(value);
            if (isNaN(numValue)) {
                this.addFieldError(field, 'Valor deve ser numérico');
                return false;
            }
            if (rule.min !== undefined && numValue < rule.min) {
                this.addFieldError(field, rule.message);
                return false;
            }
            if (rule.max !== undefined && numValue > rule.max) {
                this.addFieldError(field, rule.message);
                return false;
            }
        }

        // Validação customizada
        if (rule.validator && !rule.validator(value)) {
            this.addFieldError(field, rule.message);
            return false;
        }

        // Campo válido
        this.addFieldSuccess(field);
        return true;
    }

    validateCheckboxes() {
        const checkboxes = this.form.querySelectorAll('input[name="interesses"]:checked');
        const container = this.form.querySelector('.checkbox-grid');
        
        if (checkboxes.length === 0) {
            this.addContainerError(container, 'Selecione pelo menos uma área de interesse');
            this.errors.set('interesses', 'Área de interesse obrigatória');
            return false;
        } else {
            this.clearContainerError(container);
            this.errors.delete('interesses');
            return true;
        }
    }

    validateCPF(cpf) {
        // Remove pontos e hífen
        const cleanCPF = cpf.replace(/[^\d]/g, '');
        
        if (cleanCPF.length !== 11) return false;
        
        // Verifica se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(cleanCPF)) return false;
        
        // Valida primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
        }
        let remainder = 11 - (sum % 11);
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleanCPF.charAt(9))) return false;
        
        // Valida segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
        }
        remainder = 11 - (sum % 11);
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleanCPF.charAt(10))) return false;
        
        return true;
    }

    formatField(field) {
        const value = field.value;
        
        switch (field.name) {
            case 'telefone':
                field.value = this.formatPhone(value);
                break;
            case 'cpf':
                field.value = this.formatCPF(value);
                break;
            case 'cep':
                field.value = this.formatCEP(value);
                break;
        }
    }

    formatPhone(value) {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return value;
    }

    formatCPF(value) {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        if (match) {
            return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
        }
        return value;
    }

    formatCEP(value) {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{5})(\d{3})$/);
        if (match) {
            return `${match[1]}-${match[2]}`;
        }
        return value;
    }

    addFieldError(field, message) {
        // Remove classes de sucesso
        field.classList.remove('form-input-success');
        
        // Adiciona classe de erro
        field.classList.add('form-input-error');
        
        // Adiciona mensagem de erro
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            `;
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        
        // Adiciona ao mapa de erros
        this.errors.set(field.name, message);
    }

    addFieldSuccess(field) {
        // Remove classes de erro
        field.classList.remove('form-input-error');
        
        // Adiciona classe de sucesso
        field.classList.add('form-input-success');
        
        // Remove mensagem de erro
        this.clearFieldError(field);
    }

    clearFieldError(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('form-input-error');
    }

    addContainerError(container, message) {
        let errorElement = container.parentNode.querySelector('.container-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'container-error alert alert-error';
            errorElement.style.cssText = `
                margin-top: 1rem;
                padding: 0.75rem;
                background-color: #fef2f2;
                border: 1px solid #fecaca;
                border-radius: 0.5rem;
                color: #dc2626;
            `;
            container.parentNode.appendChild(errorElement);
        }
        errorElement.innerHTML = `
            <div class="alert-content">
                <p class="alert-title">Erro</p>
                <p>${message}</p>
            </div>
        `;
    }

    clearContainerError(container) {
        const errorElement = container.parentNode.querySelector('.container-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    getFieldLabel(field) {
        const label = this.form.querySelector(`label[for="${field.id}"]`);
        return label ? label.textContent.replace('*', '').trim() : field.name;
    }

    validateForm() {
        let isValid = true;
        
        // Valida todos os campos
        Object.keys(this.rules).forEach(fieldName => {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (field && !this.validateField(field)) {
                isValid = false;
            }
        });

        // Valida checkboxes
        if (!this.validateCheckboxes()) {
            isValid = false;
        }

        if (isValid) {
            this.showSuccessMessage();
            // Aqui você pode enviar os dados do formulário
            this.submitForm();
        } else {
            this.showErrorSummary();
            // Scroll para o primeiro erro
            this.scrollToFirstError();
        }
    }

    showSuccessMessage() {
        this.showNotification('Cadastro enviado com sucesso! Entraremos em contato em breve.', 'success');
    }

    showErrorSummary() {
        const errorCount = this.errors.size;
        const message = `Foram encontrados ${errorCount} erro${errorCount > 1 ? 's' : ''} no formulário. Por favor, corrija-os antes de enviar.`;
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        const container = document.querySelector('.validation-errors');
        const notification = document.createElement('div');
        
        const bgColor = type === 'success' ? '#10b981' : '#ef4444';
        const textColor = 'white';
        
        notification.style.cssText = `
            background-color: ${bgColor};
            color: ${textColor};
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            animation: slideIn 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span>${type === 'success' ? '✓' : '⚠'}</span>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="margin-left: auto; background: none; border: none; color: inherit; cursor: pointer; font-size: 1.2rem;">&times;</button>
            </div>
        `;
        
        container.appendChild(notification);
        container.style.display = 'block';
        
        // Remove automaticamente após 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
                if (container.children.length === 0) {
                    container.style.display = 'none';
                }
            }
        }, 5000);
    }

    scrollToFirstError() {
        const firstErrorField = this.form.querySelector('.form-input-error');
        if (firstErrorField) {
            firstErrorField.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            firstErrorField.focus();
        }
    }

    submitForm() {
        // Simula envio do formulário
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Coleta checkboxes marcados
        const checkboxes = this.form.querySelectorAll('input[name="interesses"]:checked');
        data.interesses = Array.from(checkboxes).map(cb => cb.value);
        
        console.log('Dados do formulário:', data);
        
        // Aqui você enviaria os dados para o servidor
        // fetch('/api/cadastro', { method: 'POST', body: JSON.stringify(data) })
        
        // Reset do formulário após sucesso
        setTimeout(() => {
            this.form.reset();
            this.clearAllErrors();
        }, 2000);
    }

    clearAllErrors() {
        // Remove todas as classes de erro
        this.form.querySelectorAll('.form-input-error, .form-input-success').forEach(field => {
            field.classList.remove('form-input-error', 'form-input-success');
        });
        
        // Remove todas as mensagens de erro
        this.form.querySelectorAll('.field-error, .container-error').forEach(error => {
            error.remove();
        });
        
        // Limpa mapa de erros
        this.errors.clear();
    }
}

// Adiciona estilos CSS para validação
const validationStyles = document.createElement('style');
validationStyles.textContent = `
    .form-input-error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    
    .form-input-success {
        border-color: #10b981 !important;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(validationStyles);

// Exporta para uso global
window.FormValidator = FormValidator;