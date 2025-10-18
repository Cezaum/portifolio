// --- 1. BANCO DE DADOS DE TRADUÇÃO (INTEGRADO) ---
const translations = {
    // --- PORTUGUÊS ---
    pt: {
        pageTitle: "Cesar Nicolas Carvalho Rosa - Portfólio de Dados",
        headerSubtitle: "ANALISTA DE DADOS | SQL | MIS | POWER BI SPECIALIST",
        profile: {
            title: "PERFIL DE DADOS",
            greeting: "Olá, meu nome é Cesar Nicolas. Sou um Analista de Dados apaixonado por transformar grandes volumes de dados em insights acionáveis. Com experiência em SQL Server, Power BI e ferramentas de automação, meu foco é otimizar processos e impulsionar decisões estratégicas.",
            metric1: "Anos de Exp.",
            metric2: "Domínio SQL",
            metric3: "Especialista BI"
        },
        skills: {
            title: "MATRIZ DE HABILIDADES",
            filter1: "Dados & BI",
            filter2: "Office & Automação",
            filter3: "Soft Skills",
            filter4: "Geral"
        },
        timeline: {
            title: "LINHA DO TEMPO PROFISSIONAL",
            linkedinBtn: "Perfil no LinkedIn"
        },
        contact: {
            title: "INTERFACE DE CONEXÃO",
            codeComment1: "// Query para contato e mais informações",
            codeComment2: "// Status: Pronto para novos desafios",
            status: "Sistema Online"
        },
        chartLabels: {
            database: ['SQL Server', 'Power BI', 'Análise de dados', 'Python', 'Modelagem de Dados', 'Power Query'],
            office: ['Excel Avançado', 'VBA', 'Power Automate', 'PowerPoint', 'Microsoft Office', 'Automação'],
            softskills: ['Gestão de Projetos', 'Analytical Skills', 'Trabalho em Equipe', 'Gestão de Tempo', 'Negociação', 'Atendimento ao Cliente'],
            geral: ['Business Intelligence', 'Gestão Estratégica', 'Relatórios Executivos', 'Back Office', 'Lead Management', 'MIS Reports']
        }
    },
    // --- INGLÊS ---
    en: {
        pageTitle: "Cesar Nicolas Carvalho Rosa - Data Portfolio",
        headerSubtitle: "DATA ANALYST | SQL | MIS | POWER BI SPECIALIST",
        profile: {
            title: "DATA PROFILE",
            greeting: "Hello, my name is Cesar Nicolas. I am a Data Analyst passionate about transforming large volumes of data into actionable insights. With experience in SQL Server, Power BI, and automation tools, my focus is on optimizing processes and driving strategic decisions.",
            metric1: "Years of Exp.",
            metric2: "SQL Domain",
            metric3: "BI Specialist"
        },
        skills: {
            title: "SKILL MATRIX",
            filter1: "Data & BI",
            filter2: "Office & Automation",
            filter3: "Soft Skills",
            filter4: "General"
        },
        timeline: {
            title: "PROFESSIONAL TIMELINE",
            linkedinBtn: "LinkedIn Profile"
        },
        contact: {
            title: "CONNECTION INTERFACE",
            codeComment1: "// Query for contact and more info",
            codeComment2: "// Status: Ready for new challenges",
            status: "System Online"
        },
        chartLabels: {
            database: ['SQL Server', 'Power BI', 'Data Analysis', 'Python', 'Data Modeling', 'Power Query'],
            office: ['Advanced Excel', 'VBA', 'Power Automate', 'PowerPoint', 'Microsoft Office', 'Automation'],
            softskills: ['Project Management', 'Analytical Skills', 'Teamwork', 'Time Management', 'Negotiation', 'Customer Service'],
            geral: ['Business Intelligence', 'Strategic Management', 'Executive Reports', 'Back Office', 'Lead Management', 'MIS Reports']
        }
    },
    // --- JAPONÊS ---
    jp: {
        pageTitle: "セザール・ニコラス・カルバーリョ・ロサ - データポートフォリオ",
        headerSubtitle: "データアナリスト | SQL | MIS | POWER BI スペシャリスト",
        profile: {
            title: "データプロファイル",
            greeting: "こんにちは、セザール・ニコラスです。私はデータアナリストであり、膨大なデータを実用的なインサイトに変えることに情熱を注いでいます。SQL Server、Power BI、自動化ツールの経験を活かし、プロセスの最適化と戦略的意思決定の推進に焦点を当てています。",
            metric1: "経験年数",
            metric2: "SQL習熟度",
            metric3: "BI専門家"
        },
        skills: {
            title: "スキルマトリックス",
            filter1: "データ & BI",
            filter2: "Office & 自動化",
            filter3: "ソフトスキル",
            filter4: "全般"
        },
        timeline: {
            title: "職務経歴",
            linkedinBtn: "LinkedIn プロフィール"
        },
        contact: {
            title: "接続インターフェース",
            codeComment1: "// 連絡先および詳細情報クエリ",
            codeComment2: "// ステータス: 新たな挑戦受付中",
            status: "システムオンライン"
        },
        chartLabels: {
            database: ['SQL Server', 'Power BI', 'データ分析', 'Python', 'データモデリング', 'Power Query'],
            office: ['高度なExcel', 'VBA', 'Power Automate', 'PowerPoint', 'Microsoft Office', '自動化'],
            softskills: ['プロジェクト管理', '分析スキル', 'チームワーク', '時間管理', '交渉力', '顧客対応'],
            geral: ['BI', '戦略的管理', 'エグゼクティブレポート', 'バックオフィス', 'リード管理', 'MISレポート']
        }
    }
};

// --- 2. DADOS DA LINHA DO TEMPO (INTEGRADO) ---
const timelineData = {
    pt: [
      { "empresa": "Emdia", "cargo": "Junior Data Analyst", "periodo": "abr de 2025 - o momento (7 meses)", "descricao": "Competências: Microsoft SQL Server · Microsoft Power BI · Microsoft Excel · Microsoft Office · VBA (Visual Basic for Applications) · Python · Análise de dados · Banco de dados" },
      { "empresa": "Emdia", "cargo": "Assistente de Control Desk - Planejamento", "periodo": "fev de 2024 - abr de 2025 (1 ano 3 meses)", "descricao": "Competências: Microsoft SQL Server · Microsoft Power BI · Microsoft Power Automate · Microsoft PowerPoint · Microsoft Excel · Gestão de projetos · Analytical Skills · Análise de dados · Banco de dados · Microsoft Power Query · VBA Excel" },
      { "empresa": "Emdia", "cargo": "Administrador de bancos de dados - Back Office", "periodo": "mar de 2023 - fev de 2024 (1 ano)", "descricao": "Competências: Microsoft PowerPoint · Analytical Skills · Experiência do cliente · Microsoft Word · Análise de dados · Ferramentas de business intelligence · Microsoft Excel · Administrador de banco de dados · Desenvolvimento de banco de dados · Trabalho em equipe · Microsoft Office · Relatórios e análises · Gestão · Microsoft Power BI · Inteligência de negócios (BI) · Back office · Lead Management · Gestão de tempo" },
      { "empresa": "Emdia", "cargo": "Operador de telecomunicações", "periodo": "dez de 2019 - fev de 2023 (3 anos 3 meses)", "descricao": "Competências: Microsoft Excel · Atendimento ao cliente · Gestão de tempo · Negociação" }
    ],
    en: [
      { "empresa": "Emdia", "cargo": "Junior Data Analyst", "periodo": "Apr 2025 - Present (7 months)", "descricao": "Skills: Microsoft SQL Server · Microsoft Power BI · Microsoft Excel · Microsoft Office · VBA (Visual Basic for Applications) · Python · Data Analysis · Database" },
      { "empresa": "Emdia", "cargo": "Control Desk Assistant - Planning", "periodo": "Feb 2024 - Apr 2025 (1 year 3 months)", "descricao": "Skills: Microsoft SQL Server · Microsoft Power BI · Microsoft Power Automate · Microsoft PowerPoint · Microsoft Excel · Project Management · Analytical Skills · Data Analysis · Database · Microsoft Power Query · VBA Excel" },
      { "empresa": "Emdia", "cargo": "Database Administrator - Back Office", "periodo": "Mar 2023 - Feb 2024 (1 year)", "descricao": "Skills: Microsoft PowerPoint · Analytical Skills · Customer Experience · Microsoft Word · Data Analysis · Business Intelligence Tools · Microsoft Excel · Database Administrator · Database Development · Teamwork · Microsoft Office · Reports and Analyses · Management · Microsoft Power BI · Business Intelligence (BI) · Back office · Lead Management · Time Management" },
      { "empresa": "Emdia", "cargo": "Telecommunications Operator", "periodo": "Dec 2019 - Feb 2023 (3 years 3 months)", "descricao": "Skills: Microsoft Excel · Customer Service · Time Management · Negotiation" }
    ],
    jp: [
      { "empresa": "Emdia", "cargo": "ジュニアデータアナリスト", "periodo": "2025年4月 - 現在 (7ヶ月)", "descricao": "スキル: Microsoft SQL Server · Microsoft Power BI · Microsoft Excel · Microsoft Office · VBA (Visual Basic for Applications) · Python · データ分析 · データベース" },
      { "empresa": "Emdia", "cargo": "コントロールデスクアシスタント - 企画", "periodo": "2024年2月 - 2025年4月 (1年3ヶ月)", "descricao": "スキル: Microsoft SQL Server · Microsoft Power BI · Microsoft Power Automate · Microsoft PowerPoint · Microsoft Excel · プロジェクト管理 · 分析スキル · データ分析 · データベース · Microsoft Power Query · VBA Excel" },
      { "empresa": "Emdia", "cargo": "データベース管理者 - バックオフィス", "periodo": "2023年3月 - 2024年2月 (1年)", "descricao": "スキル: Microsoft PowerPoint · 分析スキル · 顧客体験 · Microsoft Word · データ分析 · BIツール · Microsoft Excel · データベース管理者 · データベース開発 · チームワーク · Microsoft Office · レポートと分析 · 管理 · Microsoft Power BI · ビジネスインテリジェンス(BI) · バックオフィス · リード管理 · 時間管理" },
      { "empresa": "Emdia", "cargo": "電気通信オペレーター", "periodo": "2019年12月 - 2023年2月 (3年3ヶ月)", "descricao": "スキル: Microsoft Excel · 顧客対応 · 時間管理 · 交渉力" }
    ]
};

// --- 3. LÓGICA DO PORTFÓLIO ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- ESTADO GLOBAL ---
    let currentLanguage = 'pt';
    let currentFilter = 'database';
    let radarChart; 
    
    // --- SELETORES DE ELEMENTOS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const langButtons = document.querySelectorAll('.lang-btn');
    const timelineContainer = document.getElementById('timeline-content');
    const dataTicker = document.getElementById('data-ticker'); 

    // --- DADOS DAS HABILIDADES (APENAS NÚMEROS) ---
    const skillsData = {
        database: { data: [9, 9, 8, 7, 8, 8] },
        office: { data: [10, 8, 7, 8, 9, 7] },
        softskills: { data: [8, 9, 9, 8, 7, 8] },
        geral: { data: [9, 8, 9, 8, 7, 8] } 
    };

    // --- 1. INICIALIZAÇÃO DO GRÁFICO ---
    function createChart(lang) {
        // NOVAS CORES DO GRÁFICO
        const accentColor = '#64FFDA';
        const textColorPrimary = '#CCD6F6';
        const moduleBorder = '#1D3A61';
        const moduleBG = '#112240';
        
        const chartConfig = {
            type: 'radar',
            data: {
                labels: translations[lang].chartLabels[currentFilter],
                datasets: [{
                    label: 'Nível de Habilidade',
                    data: skillsData[currentFilter].data,
                    backgroundColor: 'rgba(100, 255, 218, 0.2)', // Preenchimento da cor de destaque
                    borderColor: accentColor, // Linha da cor de destaque
                    borderWidth: 2,
                    pointBackgroundColor: accentColor, // Pontos
                    pointBorderColor: textColorPrimary, // Borda dos pontos
                    pointHoverBackgroundColor: textColorPrimary,
                    pointHoverBorderColor: accentColor,
                    pointRadius: 4, 
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { 
                        backgroundColor: moduleBG,
                        titleColor: accentColor,
                        bodyColor: textColorPrimary,
                        borderColor: moduleBorder,
                        borderWidth: 1,
                        cornerRadius: 4,
                        titleFont: { family: "'Fira Code', monospace", size: 13 },
                        bodyFont: { family: "'Inter', sans-serif", size: 12 }
                    }
                },
                scales: {
                    r: {
                        angleLines: { color: moduleBorder }, // Linhas da "teia"
                        grid: { color: moduleBorder }, // Círculos da "teia"
                        pointLabels: {
                            color: textColorPrimary, // Labels (React, SQL...)
                            font: { family: "'Fira Code', monospace", size: 13 }
                        },
                        ticks: {
                            color: textColorPrimary, // Números (0, 2, 4...)
                            backdropColor: moduleBG, // Fundo dos números
                            stepSize: 2,
                            font: { family: "'Fira Code', monospace", size: 11 }
                        },
                        min: 0,
                        max: 10
                    }
                }
            }
        };

        const ctx = document.getElementById('skillsRadar').getContext('2d');
        if (radarChart) {
            radarChart.destroy(); // Destrói o gráfico antigo antes de criar um novo
        }
        radarChart = new Chart(ctx, chartConfig);
    }

    // --- 2. FUNÇÃO PARA ATUALIZAR GRÁFICO ---
    function updateChart(filter, lang) {
        if (!radarChart) { // Se o gráfico não existir, cria ele
            createChart(lang);
            return;
        }
        
        const data = skillsData[filter].data;
        const labels = translations[lang].chartLabels[filter];
        
        radarChart.data.labels = labels;
        radarChart.data.datasets[0].data = data;
        radarChart.update();
    }

    // --- 3. FUNÇÃO PARA CARREGAR TIMELINE ---
    function loadTimeline(lang) {
        const data = timelineData[lang];
            
        if (!data || data.length === 0) {
            timelineContainer.innerHTML = `<p>Nenhuma experiência encontrada.</p>`;
            return;
        }
        
        // Limpa a timeline antiga para a animação funcionar de novo
        timelineContainer.innerHTML = '';
        
        data.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'timeline-item';
            itemEl.style.animationDelay = `${index * 0.1}s`; // Animação mais rápida
            
            itemEl.innerHTML = `
                <h3>${item.cargo}</h3>
                <h4>${item.empresa}</h4>
                <span class="periodo">${item.periodo}</span>
                <p>${item.descricao}</p>
            `;
            timelineContainer.appendChild(itemEl);
        });
    }

    // --- 4. FUNÇÃO PRINCIPAL DE TRADUÇÃO ---
    function updateLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang; 

        // Atualiza botões de idioma
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Atualiza todos os textos estáticos
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.dataset.i18nKey;
            
            let text = key.split('.').reduce((obj, k) => (obj && obj[k] !== 'undefined') ? obj[k] : key, translations[lang]);

            if (key === 'pageTitle') {
                document.title = text;
            } else {
                el.innerHTML = text;
            }
        });

        // Recarrega o gráfico com as novas labels
        // É melhor recriar o gráfico para evitar bugs de renderização de fontes
        createChart(lang);

        // Recarrega a timeline com os novos dados
        loadTimeline(lang);
    }
    
    // --- 5. FUNÇÃO DO DATA TICKER ---
    function initDataTicker() {
        const tickerMessages = [
            "QUERYING DATABASE...",
            "DATASTREAM: STABLE",
            "POWER_BI_CONN: OK",
            "SQL_SERVER: ONLINE",
            "ANALYZING METRICS...",
            "PYTHON_KERNEL: READY",
            "LAST_ANALYSIS: 2m AGO"
        ];
        let messageIndex = 0;
        
        if (dataTicker) {
            setInterval(() => {
                dataTicker.textContent = tickerMessages[messageIndex];
                messageIndex = (messageIndex + 1) % tickerMessages.length;
            }, 3000); // Muda a mensagem a cada 3 segundos
        }
    }

    // --- 6. EVENT LISTENERS ---
    
    // Listeners dos filtros de skills
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            currentFilter = button.getAttribute('data-filter');
            updateChart(currentFilter, currentLanguage);
        });
    });

    // Listeners dos botões de idioma
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // --- 7. CARGA INICIAL ---
    updateLanguage(currentLanguage); // Preenche todo o texto e carrega timeline/gráfico
    initDataTicker(); // Inicia o ticker de dados

});
