class RegisterScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:"open"})
        this._shadowRoot.innerHTML = `
        <form id="register-form">
<div class="title">
    Share story
</div>
<img src="https://www.logolynx.com/images/logolynx/3c/3c8f7f52261ef898a736518a782b4028.png" alt="" srcset="">
<input-wrapper id="name" type="text" placeholder="Full name"></input-wrapper>
<div class = "error"></div>
<div>
<input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
<div class = "error"></div>
</div><div>
<input-wrapper id="pass" type="password" placeholder="Password"></input-wrapper>
<div class = "error"></div>
</div><div>
<input-wrapper id="confirm-pass" type="password" placeholder="Confirm password"></input-wrapper>
<div class = "error"></div>
</div>
<button class="btn">Register</button>
<div id="redirect">Already have an account ? Login</div>
</form>
    </div>
    <style>
    
    #register-form{
        width: 20%;
        margin: auto;
        background-color: pink;
        text-align: center;
        margin-top: 60px;
        padding-top: 3%;
        height: 100%;
        font-size: 30px;
        border: 1px solid black
    }
    .title{
        font-size: 30px;
        font-family: fantasy;
        
    }
    #register-form img{
        height: 100px;
        width : 100px
    }
    
    #redirect{
        font-size: 15px
    }
    </style>
  
        `
        this._shadowRoot.getElementById('register-form')
        .addEventListener('submit', (e) => {
            e.preventDefault()
         
            console.log(this._shadowRoot.getElementById('name').value)
           const email = this._shadowRoot.getElementById('email').value
           const pass = this._shadowRoot.getElementById('pass').value
           firebase.auth().createUserWithEmailAndPassword(email,pass)
        })

        
    }
    
}
    window.customElements.define('register-screen',RegisterScreen)
