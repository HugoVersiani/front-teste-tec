<script setup>

</script>


<template>
    <footer>
        <ul class="item">
            <h4>Encontre seu veículo</h4>
            <li>Encontre seu veiculo</li>
            <li>Lojas</li>
            <li>Promoções</li>
            <li>Vantagens</li>
            <li>Garantia Mais</li>
        </ul>
        <ul  class="item">
            <h4>A Empresa</h4>
            <li>Sobre</li>
            <li>Delivery</li>
            <li>Aviso de Privacidade</li>
            <li>Blog Seminovos</li>
        </ul>
        <ul class="item">
            <h4>Atendimento</h4>
            <li>Perguntas Frequentes</li>
            <li>Fale Conosco</li>
            <li>Pós-vendas</li>
        </ul>
        <ul class="item">
            <h4>Lojistas</h4>
            <li>Acesse Seminovos </li>
            <li>Atacado</li>
        </ul>
        <ul class="item mobile">
            <h4>Atendimento ao cliente</h4>
            <ul class="contact">  
               <li class="phone">
                    0800 000 000
                </li>
                <li class="whats">
                  <ion-icon class="whats" name="logo-whatsapp"></ion-icon> 
                </li>
            </ul>
           
          
        </ul>
        <ul class="item mobile">
            <h4>Siga a gente</h4>
            <ul class="social">
                <li>
                     <ion-icon name="logo-instagram"></ion-icon>
                </li>
                <li>
                <ion-icon name="logo-twitter"></ion-icon>
                </li>
                <li>
                <ion-icon name="logo-linkedin"></ion-icon>
                </li>
                <li>
                <ion-icon name="logo-facebook"></ion-icon>
                </li>
            </ul>
        </ul>
    </footer>
</template>

<style scoped>

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        background-color: var(--color-footer);
        width: 100%;
      
    }

    .item {
        display: none;
    }


    .mobile {
        display: block
    }

    .item h4 {
        color: var(--color-secondary);
        margin: 10px 0;
    }

    .item li {
        color: var(--color-secondary);
        margin: 5px 0;
    } 
        .contact {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center
    }

    .phone {
        padding: 9px;
        background-color: var(--color-primary);
        margin: 5px !important;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }  
     .whats {
        padding: 2px;
        color: var(--color-secondary);
        background-color: #1ABB59;
        margin: 5px !important;
        border-radius: 5px;
    }
    
    .social {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    } 
    .social li {
        padding: 5px 3px;
        margin: 5px;
        border-radius: 5px;
        background: var(--color-primary);
       
    }

    .social li ion-icon {
         color: var(--color-secondary)
    }

    .mobile h4 {
      text-align: center
    }

 
 



@media(min-width: 700px) {


    footer {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: start;
        padding: 20px 10%;
        background-color: var(--color-footer);
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        
    }


    .item {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      height: auto
    }

   .social {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
 
    .contact {
        display: flex;
        flex-direction: row;
    }

      .phone {
        padding: 10px 7px;
        background-color: var(--color-primary);
        margin: 5px  !important;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center
    }  
     .whats {
        padding: 2px 3px;
        color: var(--color-secondary);
        background-color: #1ABB59;
        margin: 5px !important;
        border-radius: 5px;
    }
 
}
</style>


<script>
export default {
    name: 'Footer',

}
</script>
