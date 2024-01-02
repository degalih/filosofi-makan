class KakiBawah extends HTMLElement {

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
            .kaki-bawah {
                padding: 20px;
                color: #e5e5e5;
                background-color: #2d4059;
                font-weight: bold;
                font-size: small;
            }
            .kaki-bawah a:link {
                color: #ea5455;
            }
            .kaki-bawah a:visited {
                color: white;
            }

            .text-left {
                text-align: left;
            }

            .text-right {
                text-align: right;
            }
       </style>
       <div class=kaki-bawah>
            <div class="text-left">
                <p>&copy; 2020 Dicoding. All Rights Reserved.</p>
            </div>
            <div class="text-right">
                <p>Dibuat oleh Galih Muhammad Ramdan dengan bantuan <a href="https://www.dicoding.com/">Dicoding</a> dan <a href="https://www.themealdb.com/">TheMealDB</a></p>
            </div>
        </div>
    `;
    }
}

customElements.define("kaki-bawah", KakiBawah);