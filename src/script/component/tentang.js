class TentangCs extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            body,html {
                height: 100%;
                margin: 0;
                padding: 0;
            }
            
            .banner {
                position: relative;
                height: 500px;
                overflow: hidden;
                background: url(https://www.linkpicture.com/q/tentang.jpg) no-repeat center;
                background-size: cover;
                z-index: -100;
            }
            
            .container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                overflow: hidden;
                text-align: center;
                color: #e5e5e5;
                font-weight: 700;
                text-transform: uppercase;
            }
            
            .container h1 {
                font-size: 72;
                letter-spacing: 0.2em;
                margin: 0;
            }
            
            .container h1 span {
                border: 10px solid #e5e5e5;
                padding: 6px 14px;
                display: inline-block;
            }
            
            .card {
                padding: 20px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                margin: 50px;
                background: #2d4059;
                color: #e5e5e5;
            }
            
            .card p {
                font-size: 20px;
            }
            
            .card a:link {
                color: #ea5455;
            }
            
            .card a:visited {
                color: #ea5455;
            }
            
            @media (max-width: 500px) {
                .banner {
                    max-width: 100%;
                }
            
            
                .container {
                    transform: translate(-50%, -30%);
                    overflow: hidden;
                    font-weight: 1000;
                }
            
                .container h1 {
                    font-size: 50;
                }
            
            }
            @media (max-width: 350px) {
            
                .container {
                    transform: translate(-50%, -40%);
                    overflow: hidden;
                    font-weight: 10;
                }
            
                .container h1 {
                    font-size: 32px;
                }
            
                .container h1 span {
                    border: none;
                    padding: none;
                    display: inline-block;
                }
                
            }
       </style>
        <div class="banner">
            <div class="container">
                 <h1><span>Tentang</span></h1>
            </div>
        </div>
        <div class="card">
            <p>Website ini dibuat dengan tujuan untuk memenuhi salah satu kriteria agar lulus dari kelas belajar fundamental front-end website dari <a href="https://www.dicoding.com/">Dicoding</a>.
                Hanya untuk latihan saja dan tidak ada tujuan komersil apapun. Adapun segala sumber dan asset yang terdapat dalam website ini didapat dari open-source. Jikalau memang ada, sekiranya bisa 
                untuk menghubungi saya di <a href="kontak.html">laman ini.</a></p>
            <p>Saya juga mengucapkan terima kasih yang sebesar-besarnya kepada <a href="https://www.dicoding.com/"">Dicoding</a> dan <a href="https://bdd.kemenparekraf.go.id/">Kemenparekraf</a> 
                yang telah memfasilitasi sehingga saya bisa berkesempatan untuk belajar kali ini. Tidak lupa juga kepada <a href="https://www.themealdb.com/">TheMealDB</a> selaku penyedia layanan WEB 
                API open-source dan pihak-pihak lainnya yang tidak bisa saya sebutkan satu persatu Saya mengucapkan terima kasih yang sebesar-besarnya.</p>
        </div>`;
    }
}

customElements.define("tentang-custom", TentangCs);