/**
 * Sistema SPA Final - ProPet
 * Versão definitiva com máxima compatibilidade
 */

// Estado global do SPA
window.SPAState = {
    currentPage: 'home',
    mainContent: null,
    isNavigating: false
};

// Templates das páginas
const PAGE_TEMPLATES = {
    home: function() {
        return `
            <!-- Hero Section -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <span class="badge badge-primary">🐾 Desde 2020</span>
                        <h2 class="hero-title" style="color: white;">Transformando Vidas com Amor e Dedicação</h2>
                        <p class="hero-subtitle" style="color: white;">
                            Na ProPet, resgatamos animais em situação de vulnerabilidade e os preparamos para encontrar famílias amorosas. 
                            Sua colaboração é essencial: com doações, garantimos alimentação de qualidade, cuidados veterinários completos e um lar temporário seguro até a adoção.
                        </p>
                        <div class="hero-cta">
                            <a href="javascript:void(0)" onclick="navigateTo('cadastro')" class="btn btn-primary btn-lg">
                                <svg class="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 5V15M5 10H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Quero Ajudar
                            </a>
                            <a href="javascript:void(0)" onclick="navigateTo('projetos')" class="btn btn-outline btn-lg" style="background-color: white; color: var(--color-primary-600); border-color: white;">Nossos Projetos</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- História -->
            <section class="section">
                <div class="container">
                    <h2 class="section-title">Nossa História</h2>
                    <p class="section-subtitle">Uma jornada de amor e dedicação aos animais</p>
                    
                    <div class="content-grid">
                        <div class="content-text">
                            <h3>Como Tudo Começou</h3>
                            <p>
                                A ProPet nasceu em 2020, quando um grupo de amantes de animais decidiu fazer a diferença na vida dos pets abandonados.
                                Localizada em uma área tranquila da cidade, nossa ONG começou com um pequeno abrigo que acolhia apenas 10 animais.
                                Hoje, nos orgulhamos de ter expandido para um espaço que pode abrigar mais de 100 pets entre cães e gatos.
                            </p>
                            
                            <p>
                                Ao longo dos anos, nossa equipe dedicada de voluntários e profissionais tem trabalhado incansavelmente para resgatar,
                                cuidar e encontrar novos lares para esses animais. Com o apoio da comunidade, conseguimos realizar campanhas de adoção, 
                                eventos de arrecadação de fundos e parcerias com clínicas veterinárias para garantir que todos os nossos pets recebam 
                                o melhor cuidado possível.
                            </p>
                            
                            <div class="alert alert-info">
                                <div class="alert-content">
                                    <p class="alert-title">💙 Nossa Conquista</p>
                                    <p>Cada história de adoção é uma vitória para nós, e cada sorriso de gratidão dos novos tutores nos motiva a continuar 
                                    nossa missão. Junte-se a nós nessa jornada de amor e transformação!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="content-image">
                            <img src="images/prop.jpg" alt="ONG ProPet em ação">
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Cards: Missão, Visão e Valores -->
            <section class="section section-alt">
                <div class="container">
                    <div class="card-grid">
                        <article class="info-card">
                            <span class="info-card-icon">🎯</span>
                            <h3 class="info-card-title">Nossa Missão</h3>
                            <p class="info-card-text">
                                Resgatar, cuidar e encontrar lares amorosos para animais abandonados, 
                                promovendo o bem-estar animal e a conscientização sobre a importância da adoção responsável.
                            </p>
                        </article>
                        
                        <article class="info-card">
                            <span class="info-card-icon">👁️</span>
                            <h3 class="info-card-title">Visão</h3>
                            <p class="info-card-text">
                                Ser referência em resgate e adoção de animais, inspirando a comunidade a valorizar e proteger a vida animal.
                            </p>
                        </article>
                        
                        <article class="info-card">
                            <span class="info-card-icon">⭐</span>
                            <h3 class="info-card-title">Valores</h3>
                            <ul class="info-card-text">
                                <li>✓ Compromisso com o bem-estar animal</li>
                                <li>✓ Transparência e ética</li>
                                <li>✓ Respeito e amor pelos animais</li>
                                <li>✓ Engajamento comunitário</li>
                                <li>✓ Trabalho em equipe</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
            
            <!-- Contato -->
            <section class="cta-section">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Entre em Contato</h2>
                        <p class="cta-text">Estamos aqui para ajudar você a fazer a diferença</p>
                        
                        <div class="card-grid" style="margin-top: 3rem;">
                            <div class="info-card" style="background: rgba(255, 255, 255, 0.95);">
                                <span class="info-card-icon">📞</span>
                                <h3 class="info-card-title">Telefone</h3>
                                <p class="info-card-text">(12) 1234-5678</p>
                            </div>
                            
                            <div class="info-card" style="background: rgba(255, 255, 255, 0.95);">
                                <span class="info-card-icon">✉️</span>
                                <h3 class="info-card-title">Email</h3>
                                <p class="info-card-text">propet@doacao.com.br</p>
                            </div>
                            
                            <div class="info-card" style="background: rgba(255, 255, 255, 0.95);">
                                <span class="info-card-icon">📍</span>
                                <h3 class="info-card-title">Endereço</h3>
                                <p class="info-card-text">Rua dos Animais, 123<br>Cidade Pet Land, Estado C/G</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    projetos: function() {
        return `
            <!-- Hero Section -->
            <section class="hero" style="
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                position: relative;
                overflow: hidden;
                padding: 8rem 0 6rem;
                margin-top: 0;
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><defs><radialGradient id=\"a\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"%23ffffff\" stop-opacity=\"0.1\"/><stop offset=\"100%\" stop-color=\"%23ffffff\" stop-opacity=\"0\"/></radialGradient></defs><circle cx=\"200\" cy=\"200\" r=\"100\" fill=\"url(%23a)\"/><circle cx=\"800\" cy=\"300\" r=\"150\" fill=\"url(%23a)\"/><circle cx=\"400\" cy=\"700\" r=\"120\" fill=\"url(%23a)\"/></svg>');
                    background-size: cover;
                    opacity: 0.3;
                "></div>
                <div class="container" style="position: relative; z-index: 2;">
                    <div class="hero-content" style="text-align: center; max-width: 800px; margin: 0 auto;">
                        <div style="
                            display: inline-flex;
                            align-items: center;
                            gap: 0.5rem;
                            background: rgba(255, 255, 255, 0.15);
                            backdrop-filter: blur(10px);
                            padding: 0.75rem 1.5rem;
                            border-radius: 50px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            margin-bottom: 2rem;
                            font-weight: 600;
                            color: white;
                            animation: fadeInUp 0.8s ease-out;
                        ">
                            <span style="font-size: 1.2rem;">🤝</span>
                            <span>Faça Parte da Mudança</span>
                        </div>
                        <h1 style="
                            color: white;
                            font-size: clamp(2.5rem, 5vw, 4rem);
                            font-weight: 800;
                            margin-bottom: 1.5rem;
                            line-height: 1.1;
                            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
                            animation: fadeInUp 0.8s ease-out 0.2s both;
                        ">
                            Nossos Projetos de<br>
                            <span style="
                                background: linear-gradient(45deg, #f59e0b, #fde047);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            ">Amor e Cuidado</span>
                        </h1>
                        <p style="
                            color: rgba(255, 255, 255, 0.9);
                            font-size: 1.25rem;
                            margin-bottom: 3rem;
                            max-width: 600px;
                            margin-left: auto;
                            margin-right: auto;
                            line-height: 1.6;
                            animation: fadeInUp 0.8s ease-out 0.4s both;
                        ">
                            Conheça nossas iniciativas que salvam vidas todos os dias. Desde voluntariado até doações, 
                            cada projeto é uma oportunidade de transformar o mundo animal com muito amor.
                        </p>
                        <div style="
                            display: flex;
                            gap: 1rem;
                            justify-content: center;
                            flex-wrap: wrap;
                            animation: fadeInUp 0.8s ease-out 0.6s both;
                        ">
                            <a href="javascript:void(0)" onclick="scrollToSection('voluntariado')" style="
                                display: inline-flex;
                                align-items: center;
                                gap: 0.5rem;
                                background: rgba(255, 255, 255, 0.95);
                                color: #667eea;
                                padding: 1rem 2rem;
                                border-radius: 50px;
                                text-decoration: none;
                                font-weight: 600;
                                transition: all 0.3s ease;
                                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                                border: none;
                            " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 35px rgba(0,0,0,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.2)'">
                                <span style="font-size: 1.2rem;">�</span>
                                <span>Ver Nossos Projetos</span>
                            </a>
                            <a href="javascript:void(0)" onclick="navigateTo('cadastro')" style="
                                display: inline-flex;
                                align-items: center;
                                gap: 0.5rem;
                                background: transparent;
                                color: white;
                                padding: 1rem 2rem;
                                border-radius: 50px;
                                text-decoration: none;
                                font-weight: 600;
                                transition: all 0.3s ease;
                                border: 2px solid rgba(255, 255, 255, 0.3);
                                backdrop-filter: blur(10px);
                            " onmouseover="this.style.background='rgba(255,255,255,0.1)'; this.style.borderColor='rgba(255,255,255,0.6)'" onmouseout="this.style.background='transparent'; this.style.borderColor='rgba(255,255,255,0.3)'">
                                <span style="font-size: 1.2rem;">�‍♀️</span>
                                <span>Quero Participar</span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Scroll Indicator -->
                <div style="
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    animation: bounce 2s infinite;
                ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2">
                        <path d="M7 13l3 3 7-7"/>
                        <path d="m7 13 3 3 7-7"/>
                    </svg>
                </div>
            </section>
            
            <!-- Voluntariado -->
            <section id="voluntariado" class="section">
                <div class="container">
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <div style="
                            display: inline-block;
                            background: linear-gradient(135deg, #2563eb, #1d4ed8);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            font-size: 3.5rem;
                            font-weight: 800;
                            margin-bottom: 1rem;
                            line-height: 1.1;
                        ">Seja um Voluntário</div>
                        <p style="
                            font-size: 1.25rem;
                            color: #64748b;
                            max-width: 600px;
                            margin: 0 auto;
                            line-height: 1.6;
                        ">Transforme vidas enquanto encontra propósito. Cada gesto de carinho faz a diferença.</p>
                    </div>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                        align-items: center;
                        margin-bottom: 4rem;
                    ">
                        <div>
                            <h3 style="
                                font-size: 1.75rem;
                                font-weight: 700;
                                color: #1e293b;
                                margin-bottom: 2rem;
                                position: relative;
                            ">
                                Como Você Pode Ajudar
                                <div style="
                                    position: absolute;
                                    bottom: -8px;
                                    left: 0;
                                    width: 60px;
                                    height: 3px;
                                    background: linear-gradient(90deg, #667eea, #764ba2);
                                    border-radius: 3px;
                                "></div>
                            </h3>
                            <div style="display: grid; gap: 1rem;">
                                <div style="
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;
                                    padding: 1.25rem;
                                    background: white;
                                    border-radius: 16px;
                                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                                    border: 1px solid #f1f5f9;
                                    transition: all 0.3s ease;
                                " onmouseover="this.style.transform='translateX(8px)'; this.style.boxShadow='0 8px 25px rgba(102,126,234,0.15)'" onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'">
                                    <div style="
                                        width: 48px;
                                        height: 48px;
                                        background: linear-gradient(135deg, #2563eb, #1d4ed8);
                                        border-radius: 12px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 1.5rem;
                                        flex-shrink: 0;
                                    ">🐾</div>
                                    <div>
                                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 0.25rem;">Cuidados Diários</div>
                                        <div style="font-size: 0.9rem; color: #64748b;">Alimentação, limpeza e carinho para os pets</div>
                                    </div>
                                </div>
                                
                                <div style="
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;
                                    padding: 1.25rem;
                                    background: white;
                                    border-radius: 16px;
                                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                                    border: 1px solid #f1f5f9;
                                    transition: all 0.3s ease;
                                " onmouseover="this.style.transform='translateX(8px)'; this.style.boxShadow='0 8px 25px rgba(102,126,234,0.15)'" onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'">
                                    <div style="
                                        width: 48px;
                                        height: 48px;
                                        background: linear-gradient(135deg, #f59e0b, #d97706);
                                        border-radius: 12px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 1.5rem;
                                        flex-shrink: 0;
                                    ">🎉</div>
                                    <div>
                                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 0.25rem;">Eventos de Adoção</div>
                                        <div style="font-size: 0.9rem; color: #64748b;">Organizando feiras e encontrando lares</div>
                                    </div>
                                </div>
                                
                                <div style="
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;
                                    padding: 1.25rem;
                                    background: white;
                                    border-radius: 16px;
                                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                                    border: 1px solid #f1f5f9;
                                    transition: all 0.3s ease;
                                " onmouseover="this.style.transform='translateX(8px)'; this.style.boxShadow='0 8px 25px rgba(102,126,234,0.15)'" onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'">
                                    <div style="
                                        width: 48px;
                                        height: 48px;
                                        background: linear-gradient(135deg, #10b981, #059669);
                                        border-radius: 12px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 1.5rem;
                                        flex-shrink: 0;
                                    ">📱</div>
                                    <div>
                                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 0.25rem;">Marketing Digital</div>
                                        <div style="font-size: 0.9rem; color: #64748b;">Divulgação nas redes sociais</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div style="
                                position: relative;
                                border-radius: 24px;
                                overflow: hidden;
                                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                                background: linear-gradient(135deg, #2563eb, #1d4ed8);
                                padding: 2rem;
                            ">
                                <img src="images/prop2.jpg" alt="Voluntários da ProPet" style="
                                    width: 100%;
                                    height: 300px;
                                    object-fit: cover;
                                    border-radius: 16px;
                                    margin-bottom: 2rem;
                                ">
                                
                                <div style="
                                    background: rgba(255,255,255,0.95);
                                    backdrop-filter: blur(10px);
                                    border-radius: 16px;
                                    padding: 2rem;
                                ">
                                    <h4 style="
                                        font-size: 1.25rem;
                                        font-weight: 700;
                                        color: #1e293b;
                                        margin-bottom: 1.5rem;
                                        display: flex;
                                        align-items: center;
                                        gap: 0.5rem;
                                    ">
                                        <span style="font-size: 1.5rem;">📋</span>
                                        Requisitos
                                    </h4>
                                    <div style="display: grid; gap: 0.75rem; margin-bottom: 2rem;">
                                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                                            <div style="
                                                width: 20px;
                                                height: 20px;
                                                background: linear-gradient(135deg, #10b981, #059669);
                                                border-radius: 50%;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                color: white;
                                                font-size: 0.75rem;
                                                font-weight: bold;
                                            ">✓</div>
                                            <span style="color: #374151;">Ter mais de 18 anos</span>
                                        </div>
                                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                                            <div style="
                                                width: 20px;
                                                height: 20px;
                                                background: linear-gradient(135deg, #10b981, #059669);
                                                border-radius: 50%;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                color: white;
                                                font-size: 0.75rem;
                                                font-weight: bold;
                                            ">✓</div>
                                            <span style="color: #374151;">4+ horas semanais</span>
                                        </div>
                                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                                            <div style="
                                                width: 20px;
                                                height: 20px;
                                                background: linear-gradient(135deg, #10b981, #059669);
                                                border-radius: 50%;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                color: white;
                                                font-size: 0.75rem;
                                                font-weight: bold;
                                            ">✓</div>
                                            <span style="color: #374151;">Amor pelos animais</span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0)" onclick="navigateTo('cadastro')" style="
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        gap: 0.5rem;
                                        width: 100%;
                                        padding: 1rem;
                                        background: linear-gradient(135deg, #2563eb, #1d4ed8);
                                        color: white;
                                        text-decoration: none;
                                        border-radius: 12px;
                                        font-weight: 600;
                                        transition: all 0.3s ease;
                                        box-shadow: 0 4px 15px rgba(37,99,235,0.4);
                                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(37,99,235,0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(37,99,235,0.4)'">
                                        <span style="font-size: 1.2rem;">🙋‍♀️</span>
                                        <span>Quero ser Voluntário</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Doações -->
            <section id="doacoes" class="section section-alt">
                <div class="container">
                    <h2 class="section-title">Como Doar</h2>
                    <p class="section-subtitle">Sua doação faz a diferença na vida dos nossos animais!</p>
                    
                    <div class="card-grid">
                        <!-- Doação Financeira -->
                        <article class="info-card">
                            <span class="info-card-icon">💰</span>
                            <h3 class="info-card-title">Doação Financeira</h3>
                            <p class="info-card-text" style="margin-bottom: 1rem;">Faça sua contribuição via:</p>
                            
                            <div class="alert alert-success">
                                <div class="alert-content">
                                    <p class="alert-title">Dados Bancários:</p>
                                    <ul style="list-style: none; padding: 0; font-size: 0.875rem;">
                                        <li><strong>Banco:</strong> Dog Bank</li>
                                        <li><strong>Agência:</strong> 1000</li>
                                        <li><strong>Conta:</strong> 02000-0</li>
                                        <li><strong>PIX:</strong> 12.345.678/0001-00</li>
                                        <li><strong>Titular:</strong> ONG ProPet</li>
                                    </ul>
                                </div>
                            </div>
                            <span class="badge badge-success" style="margin-top: 1rem;">Mais Rápido</span>
                        </article>
                        
                        <!-- Doação de Itens -->
                        <article class="info-card">
                            <span class="info-card-icon">📦</span>
                            <h3 class="info-card-title">Doação de Itens</h3>
                            <p class="info-card-text" style="margin-bottom: 1rem;">Aceitamos:</p>
                            <ul class="info-card-text">
                                <li>✓ Ração para cães e gatos</li>
                                <li>✓ Medicamentos veterinários</li>
                                <li>✓ Produtos de limpeza</li>
                                <li>✓ Cobertores e mantas</li>
                                <li>✓ Caminhas e casinhas</li>
                                <li>✓ Brinquedos para pets</li>
                            </ul>
                        </article>
                        
                        <!-- Ponto de Coleta -->
                        <article class="info-card">
                            <span class="info-card-icon">�</span>
                            <h3 class="info-card-title">Ponto de Coleta</h3>
                            
                            <div class="alert alert-info">
                                <div class="alert-content">
                                    <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">
                                        <strong>Endereço:</strong><br>
                                        Rua dos Animais, 123<br>
                                        Cidade Pet Land, Estado C/G
                                    </p>
                                    <p style="font-size: 0.875rem; margin: 0;">
                                        <strong>Horário:</strong><br>
                                        Segunda a Sexta<br>
                                        9h às 17h
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    <!-- CTA Doador Mensal -->
                    <div class="cta-section" style="margin-top: 4rem; padding: 3rem; border-radius: 1rem;">
                        <div class="cta-content">
                            <h3 class="cta-title">💙 Seja um Doador Mensal</h3>
                            <p class="cta-text">
                                Contribua mensalmente com qualquer valor e ajude a manter nosso trabalho de resgate e cuidado.
                            </p>
                            <a href="javascript:void(0)" onclick="navigateTo('cadastro')" class="btn btn-primary btn-lg" style="background: white; color: var(--color-primary-600);">
                                <svg class="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M3.33301 9.99996C3.33301 9.99996 6.66634 3.33329 9.99967 3.33329C13.333 3.33329 16.6663 9.99996 16.6663 9.99996C16.6663 9.99996 13.333 16.6666 9.99967 16.6666C6.66634 16.6666 3.33301 9.99996 3.33301 9.99996Z" stroke="currentColor" stroke-width="1.5"/>
                                    <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
                                </svg>
                                Quero ser Doador Mensal
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Nossos Projetos -->
            <section class="section">
                <div class="container">
                    <h2 class="section-title">Nossos Projetos Especiais</h2>
                    <p class="section-subtitle">Conheça as iniciativas que fazem a diferença</p>
                    
                    <div class="card-grid">
                        <!-- Projeto Cãozinho Feliz -->
                        <article class="info-card">
                            <span class="info-card-icon">🐕</span>
                            <h3 class="info-card-title">Projeto Cãozinho Feliz</h3>
                            <p class="info-card-text">
                                Programa de reabilitação comportamental para cães com traumas. Através de terapia especializada 
                                e cuidados intensivos, preparamos os pets para uma nova vida em família.
                            </p>
                            <div class="alert alert-info">
                                <div class="alert-content">
                                    <p class="alert-title">📊 Resultados</p>
                                    <p>Mais de 120 cães reabilitados e adotados nos últimos 2 anos</p>
                                </div>
                            </div>
                            <span class="badge badge-success" style="margin-top: 1rem;">Em Andamento</span>
                        </article>
                        
                        <!-- Projeto Gatinhos Especiais -->
                        <article class="info-card">
                            <span class="info-card-icon">🐱</span>
                            <h3 class="info-card-title">Gatinhos Especiais</h3>
                            <p class="info-card-text">
                                Cuidados especializados para gatos com necessidades especiais, idosos ou com deficiências. 
                                Oferecemos tratamento médico e encontramos famílias preparadas para esse amor especial.
                            </p>
                            <div class="alert alert-warning">
                                <div class="alert-content">
                                    <p class="alert-title">💡 Apoie</p>
                                    <p>Precisamos de doações para medicamentos e equipamentos adaptativos</p>
                                </div>
                            </div>
                            <span class="badge badge-warning" style="margin-top: 1rem;">Precisa de Apoio</span>
                        </article>
                        
                        <!-- Projeto Educação Animal -->
                        <article class="info-card">
                            <span class="info-card-icon">🎓</span>
                            <h3 class="info-card-title">Educação Animal</h3>
                            <p class="info-card-text">
                                Programa educativo em escolas e comunidades sobre posse responsável, bem-estar animal 
                                e prevenção ao abandono. Levamos conhecimento para formar cidadãos conscientes.
                            </p>
                            <div class="alert alert-success">
                                <div class="alert-content">
                                    <p class="alert-title">🎯 Meta 2024</p>
                                    <p>Alcançar 50 escolas e 2.000 crianças com nossos workshops</p>
                                </div>
                            </div>
                            <span class="badge badge-primary" style="margin-top: 1rem;">Expandindo</span>
                        </article>
                        
                        <!-- Projeto Feira de Adoção -->
                        <article class="info-card">
                            <span class="info-card-icon">🏡</span>
                            <h3 class="info-card-title">Feiras de Adoção</h3>
                            <p class="info-card-text">
                                Eventos mensais em shoppings e praças para facilitar o encontro entre pets e famílias. 
                                Organizamos tudo com muito carinho para garantir adoções responsáveis e duradouras.
                            </p>
                            <div class="alert alert-info">
                                <div class="alert-content">
                                    <p class="alert-title">📅 Próximo Evento</p>
                                    <p>Shopping Central - Todo último sábado do mês, das 10h às 16h</p>
                                </div>
                            </div>
                            <span class="badge badge-info" style="margin-top: 1rem;">Mensal</span>
                        </article>
                        
                        <!-- Projeto Castração Solidária -->
                        <article class="info-card">
                            <span class="info-card-icon">⚕️</span>
                            <h3 class="info-card-title">Castração Solidária</h3>
                            <p class="info-card-text">
                                Campanhas gratuitas de castração para animais de famílias de baixa renda, contribuindo 
                                para o controle populacional e prevenção de doenças. Saúde e responsabilidade juntas.
                            </p>
                            <div class="alert alert-success">
                                <div class="alert-content">
                                    <p class="alert-title">✅ Impacto</p>
                                    <p>Mais de 800 castrações realizadas gratuitamente</p>
                                </div>
                            </div>
                            <span class="badge badge-success" style="margin-top: 1rem;">Alto Impacto</span>
                        </article>
                        
                        <!-- Projeto Lar Temporário -->
                        <article class="info-card">
                            <span class="info-card-icon">🏠</span>
                            <h3 class="info-card-title">Rede de Lares Temporários</h3>
                            <p class="info-card-text">
                                Programa que conecta voluntários dispostos a cuidar temporariamente de animais em suas 
                                casas até encontrarem uma família definitiva. Mais espaço, mais vidas salvas.
                            </p>
                            <div class="alert alert-warning">
                                <div class="alert-content">
                                    <p class="alert-title">🤝 Junte-se</p>
                                    <p>Procuramos famílias para serem lares temporários. Você pode fazer a diferença!</p>
                                </div>
                            </div>
                            <span class="badge badge-primary" style="margin-top: 1rem;">Procuramos Voluntários</span>
                        </article>
                    </div>
                </div>
            </section>
            
            <!-- Contato -->
            <section class="section">
                <div class="container">
                    <h2 class="section-title">Entre em Contato</h2>
                    <p class="section-subtitle">Estamos aqui para responder suas dúvidas</p>
                    
                    <div class="card-grid">
                        <div class="info-card">
                            <span class="info-card-icon">📞</span>
                            <h3 class="info-card-title">Telefone</h3>
                            <p class="info-card-text">(12) 1234-5678</p>
                        </div>
                        
                        <div class="info-card">
                            <span class="info-card-icon">✉️</span>
                            <h3 class="info-card-title">Email</h3>
                            <p class="info-card-text">propet@doacao.com.br</p>
                        </div>
                        
                        <div class="info-card">
                            <span class="info-card-icon">📍</span>
                            <h3 class="info-card-title">Endereço</h3>
                            <p class="info-card-text">Rua dos Animais, 123<br>Cidade Pet Land, Estado C/G</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    cadastro: function() {
        return `
            <!-- Hero Section -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <span class="badge badge-primary">🤝 Cadastro de Voluntários</span>
                        <h2 class="hero-title" style="color: white;">Faça Parte da Nossa Família ProPet</h2>
                        <p class="hero-subtitle" style="color: white;">
                            Transforme sua paixão pelos animais em ação! Cadastre-se como voluntário e ajude a salvar vidas, 
                            proporcionando amor, cuidado e esperança para pets que precisam de uma segunda chance.
                        </p>
                        <div class="hero-cta">
                            <a href="#cadastro-form" class="btn btn-primary btn-lg">
                                <svg class="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 5V15M5 10H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Começar Cadastro
                            </a>
                            <a href="javascript:void(0)" onclick="navigateTo('projetos')" class="btn btn-outline btn-lg" style="background-color: white; color: var(--color-primary-600); border-color: white;">Ver Projetos</a>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">

                <!-- Formulário Completo -->
                <section class="section">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <form id="cadastro-form" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            
                            <fieldset style="border: none; padding: 0; margin-bottom: 2rem;">
                                <legend style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary-600); margin-bottom: 1rem; padding: 0;">
                                    <svg style="width: 24px; height: 24px; vertical-align: middle; margin-right: 0.5rem;" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                    Dados Pessoais
                                </legend>
                                
                                <div style="display: grid; gap: 1rem;">
                                    <div>
                                        <label for="nome" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nome Completo *</label>
                                        <input type="text" id="nome" name="nome" required 
                                               style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                               placeholder="Digite seu nome completo">
                                    </div>

                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                        <div>
                                            <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email *</label>
                                            <input type="email" id="email" name="email" required 
                                                   style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                                   placeholder="seu@email.com">
                                        </div>

                                        <div>
                                            <label for="telefone" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Telefone *</label>
                                            <input type="tel" id="telefone" name="telefone" required 
                                                   style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                                   placeholder="(00) 00000-0000">
                                        </div>
                                    </div>

                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                        <div>
                                            <label for="cpf" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">CPF *</label>
                                            <input type="text" id="cpf" name="cpf" required 
                                                   style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                                   placeholder="000.000.000-00">
                                        </div>

                                        <div>
                                            <label for="idade" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Idade *</label>
                                            <input type="number" id="idade" name="idade" min="18" max="100" required 
                                                   style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                                   placeholder="18">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset style="border: none; padding: 0; margin-bottom: 2rem;">
                                <legend style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary-600); margin-bottom: 1rem; padding: 0;">
                                    <svg style="width: 24px; height: 24px; vertical-align: middle; margin-right: 0.5rem;" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                    Endereço
                                </legend>
                                
                                <div style="display: grid; gap: 1rem;">
                                    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 1rem;">
                                        <div>
                                            <label for="cep" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">CEP *</label>
                                            <input type="text" id="cep" name="cep" required 
                                                   style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                                   placeholder="00000-000">
                                        </div>

                                        <div>
                                            <label for="cidade" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Cidade/Estado *</label>
                                            <input type="text" id="cidade" name="cidade" required 
                                                   style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                                   placeholder="Cidade - UF">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="endereco" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Endereço Completo *</label>
                                        <input type="text" id="endereco" name="endereco" required 
                                               style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;"
                                               placeholder="Rua, número e bairro">
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset style="border: none; padding: 0; margin-bottom: 2rem;">
                                <legend style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary-600); margin-bottom: 1rem; padding: 0;">
                                    <svg style="width: 24px; height: 24px; vertical-align: middle; margin-right: 0.5rem;" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                    Voluntariado
                                </legend>
                                
                                <div style="display: grid; gap: 1rem;">
                                    <div>
                                        <label for="disponibilidade" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Disponibilidade (horas/semana) *</label>
                                        <input type="number" id="disponibilidade" name="disponibilidade" min="4" max="40" required 
                                               style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;">
                                        <small style="color: #6b7280;">Mínimo 4 horas por semana</small>
                                    </div>

                                    <div>
                                        <label style="display: block; margin-bottom: 1rem; font-weight: 500;">Áreas de Interesse * (selecione pelo menos uma)</label>
                                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                                                <input type="checkbox" name="interesses" value="cuidados">
                                                <span>🐾 Cuidados com animais</span>
                                            </label>
                                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                                                <input type="checkbox" name="interesses" value="eventos">
                                                <span>📅 Eventos de adoção</span>
                                            </label>
                                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                                                <input type="checkbox" name="interesses" value="divulgacao">
                                                <span>📱 Divulgação</span>
                                            </label>
                                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
                                                <input type="checkbox" name="interesses" value="transporte">
                                                <span>🚗 Transporte</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                                <button type="reset" class="btn btn-secondary">Limpar</button>
                                <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        `;
    }
};

// Função principal de navegação
function navigateTo(page) {
    console.log('=== NAVEGAÇÃO INICIADA ===');
    console.log('Página destino:', page);
    console.log('Estado atual:', window.SPAState);
    
    // Previne navegação múltipla simultânea
    if (window.SPAState.isNavigating) {
        console.log('Navegação já em andamento, ignorando...');
        return;
    }
    
    window.SPAState.isNavigating = true;
    
    try {
        // Verifica se o elemento existe
        if (!window.SPAState.mainContent) {
            window.SPAState.mainContent = document.querySelector('.main-content');
            if (!window.SPAState.mainContent) {
                console.error('Elemento .main-content não encontrado!');
                window.SPAState.isNavigating = false;
                return;
            }
        }

        // Verifica se o template existe
        if (!PAGE_TEMPLATES[page]) {
            console.error('Template não encontrado para:', page);
            console.log('Templates disponíveis:', Object.keys(PAGE_TEMPLATES));
            window.SPAState.isNavigating = false;
            return;
        }

        console.log('Executando navegação...');
        
        // Atualiza URL
        if (window.location.hash !== '#' + page) {
            window.history.pushState({ page: page }, '', '#' + page);
        }
        
        // Efeito de transição
        window.SPAState.mainContent.style.transition = 'opacity 0.2s ease-in-out';
        window.SPAState.mainContent.style.opacity = '0.3';
        
        setTimeout(() => {
            try {
                // Gera e insere o novo conteúdo
                const newContent = PAGE_TEMPLATES[page]();
                window.SPAState.mainContent.innerHTML = newContent;
                
                // Atualiza estado
                window.SPAState.currentPage = page;
                
                // Restaura opacidade
                window.SPAState.mainContent.style.opacity = '1';
                
                // Atualiza navegação ativa
                updateActiveNavigation(page);
                
                // Scroll para o topo
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Inicializa funcionalidades específicas da página
                initPageFeatures(page);
                
                console.log('Navegação concluída com sucesso!');
                
            } catch (error) {
                console.error('Erro ao atualizar conteúdo:', error);
                window.SPAState.mainContent.style.opacity = '1';
            } finally {
                window.SPAState.isNavigating = false;
            }
        }, 100);
        
    } catch (error) {
        console.error('Erro geral na navegação:', error);
        window.SPAState.isNavigating = false;
        if (window.SPAState.mainContent) {
            window.SPAState.mainContent.style.opacity = '1';
        }
    }
}

// Atualiza navegação ativa
function updateActiveNavigation(page) {
    try {
        // Remove active de todos os links do header
        const headerLinks = document.querySelectorAll('header .nav-link');
        headerLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });

        // Adiciona active ao link atual do header
        const selector = `header a[onclick*="navigateTo('${page}')"], header a[onclick*='navigateTo("${page}")']`;
        const currentLink = document.querySelector(selector);
        if (currentLink) {
            currentLink.classList.add('active');
            currentLink.setAttribute('aria-current', 'page');
            console.log('Link ativo atualizado:', page);
        } else {
            console.log('Link não encontrado para:', page);
        }
    } catch (error) {
        console.error('Erro ao atualizar navegação:', error);
    }
}

// Inicializa recursos específicos da página
function initPageFeatures(page) {
    if (page === 'cadastro') {
        setTimeout(() => {
            if (window.FormValidator) {
                console.log('Inicializando validação de formulário...');
                new FormValidator();
            }
        }, 200);
    } else if (page === 'projetos') {
        setTimeout(() => {
            initProjetosFeatures();
        }, 300);
    }
}

// Funcionalidades específicas da página de projetos
function initProjetosFeatures() {
    console.log('Inicializando funcionalidades da página de projetos...');
    
    // Navegação suave para seções
    setupSectionNavigation();
    
    // Animações de hover nos cards
    setupCardAnimations();
    
    // Contador animado para estatísticas
    setupDonationCounter();
    
    // Efeito de click nos botões
    setupButtonEffects();
}

// Navegação suave entre seções
function setupSectionNavigation() {
    // Adiciona links de navegação interna
    const voluntariadoLinks = document.querySelectorAll('a[href="#voluntariado"]');
    const doacoesLinks = document.querySelectorAll('a[href="#doacoes"]');
    
    // Scroll suave para voluntariado
    function scrollToVoluntariado(e) {
        e.preventDefault();
        const section = document.getElementById('voluntariado');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Adiciona highlight temporário
            section.style.background = 'rgba(59, 130, 246, 0.05)';
            setTimeout(() => {
                section.style.background = '';
            }, 2000);
        }
    }
    
    // Scroll suave para doações
    function scrollToDoacoes(e) {
        e.preventDefault();
        const section = document.getElementById('doacoes');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Adiciona highlight temporário
            section.style.background = 'rgba(16, 185, 129, 0.05)';
            setTimeout(() => {
                section.style.background = '';
            }, 2000);
        }
    }
    
    // Atualiza os dropdown links do menu
    const dropdownLinks = document.querySelectorAll('.dropdown-item');
    dropdownLinks.forEach(link => {
        if (link.textContent.includes('Voluntariado')) {
            link.onclick = scrollToVoluntariado;
        } else if (link.textContent.includes('Doações')) {
            link.onclick = scrollToDoacoes;
        }
    });
}

// Animações nos cards
function setupCardAnimations() {
    const cards = document.querySelectorAll('.info-card');
    
    cards.forEach(card => {
        // Efeito hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
        
        // Efeito de click com pulse
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
}

// Contador animado para doações
function setupDonationCounter() {
    // Simula um contador de impacto
    const statsData = [
        { selector: '.animals-saved', target: 250, suffix: '+', label: 'Animais Salvos' },
        { selector: '.volunteers-active', target: 45, suffix: '', label: 'Voluntários Ativos' },
        { selector: '.donations-received', target: 180, suffix: '+', label: 'Doações Recebidas' }
    ];
    
    // Cria elementos de estatísticas se não existirem
    const ctaSection = document.querySelector('.cta-section .cta-content');
    if (ctaSection) {
        const statsContainer = document.createElement('div');
        statsContainer.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 2rem 0; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 1rem;">
                <div style="text-align: center;">
                    <div class="animals-saved" style="font-size: 2rem; font-weight: bold; color: white;">0+</div>
                    <div style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Animais Salvos</div>
                </div>
                <div style="text-align: center;">
                    <div class="volunteers-active" style="font-size: 2rem; font-weight: bold; color: white;">0</div>
                    <div style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Voluntários Ativos</div>
                </div>
                <div style="text-align: center;">
                    <div class="donations-received" style="font-size: 2rem; font-weight: bold; color: white;">0+</div>
                    <div style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Doações Recebidas</div>
                </div>
            </div>
        `;
        ctaSection.insertBefore(statsContainer, ctaSection.lastElementChild);
        
        // Anima os contadores
        setTimeout(() => {
            statsData.forEach(stat => {
                const element = document.querySelector(stat.selector);
                if (element) {
                    animateCounter(element, stat.target, stat.suffix);
                }
            });
        }, 500);
    }
}

// Função para animar contadores
function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 60; // 60 frames para animação suave
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 25);
}

// Efeitos nos botões
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Efeito ripple
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            // Adiciona animação CSS se não existir
            if (!document.querySelector('#ripple-style')) {
                const style = document.createElement('style');
                style.id = 'ripple-style';
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                    .btn {
                        position: relative;
                        overflow: hidden;
                    }
                `;
                document.head.appendChild(style);
            }
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Efeito hover com transformação
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Função global para navegação para seções específicas
function navigateToSection(section) {
    // Primeiro navega para projetos se não estiver lá
    if (window.SPAState.currentPage !== 'projetos') {
        navigateTo('projetos');
        setTimeout(() => {
            scrollToSection(section);
        }, 500);
    } else {
        scrollToSection(section);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Adiciona highlight temporário
        const color = sectionId === 'voluntariado' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(16, 185, 129, 0.05)';
        section.style.background = color;
        setTimeout(() => {
            section.style.background = '';
        }, 2000);
    }
}

// Inicialização do sistema
function initializeSPA() {
    console.log('=== INICIALIZANDO SPA ===');
    
    // Encontra o elemento principal
    window.SPAState.mainContent = document.querySelector('.main-content');
    
    if (!window.SPAState.mainContent) {
        console.error('Elemento .main-content não encontrado! Tentando novamente em 500ms...');
        setTimeout(initializeSPA, 500);
        return;
    }
    
    console.log('Elemento .main-content encontrado!');
    console.log('Templates carregados:', Object.keys(PAGE_TEMPLATES));
    
    // Configura evento de botão voltar
    window.addEventListener('popstate', function(event) {
        const page = event.state ? event.state.page : (window.location.hash.substring(1) || 'home');
        console.log('Botão voltar pressionado:', page);
        navigateTo(page);
    });
    
    // Verifica página inicial baseada na URL
    const initialPage = window.location.hash.substring(1) || 'home';
    if (initialPage !== 'home') {
        console.log('Navegando para página inicial:', initialPage);
        navigateTo(initialPage);
    }
    
    console.log('SPA inicializado com sucesso!');
}

// Inicia quando DOM carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSPA);
} else {
    initializeSPA();
}

console.log('Script SPA carregado!');