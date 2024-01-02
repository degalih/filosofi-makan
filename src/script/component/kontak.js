class KontakCs extends HTMLElement {

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
                background: url(https://www.linkpicture.com/q/kontak.jpg) no-repeat center;
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
            
            @media (max-width: 455px) {
                .banner {
                    height: 200px;;
                }
            
                .container {
                    transform: translate(-50%, -30%);
                    overflow: hidden;
                    font-weight: 1000;
                }
            
                .container h1 {
                    font-size: 30px;
                }
            
            }
            @media (max-width: 385px) {
                .banner {
                    width: 500px;
                }
            
                .container {
                    transform: translate(-50%, -40%);
                    overflow: hidden;
                    font-weight: 10;
                }
            
                .container h1 {
                    font-size: 30px;
                }
            
                .container h1 span {
                    border: none;
                    padding: none;
                    display: inline-block;
                }
            
                .sosial-media {
                    display: block;
                    margin-left: 20px;
                }
                
            }
    
       </style>
        <div class="banner">
                <div class="container">
                    <h1><span>Kontak</span></h1>
                </div>
            </div>`;
    }
}

customElements.define("kontak-custom", KontakCs);