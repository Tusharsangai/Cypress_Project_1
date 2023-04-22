require('cypress-xpath');

class addtocart{

     SelectSize(){

        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        // cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
     }
     SelectSize_UI_UX(){

        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(3000)
        cy.xpath("(//div[@class='col-md-5 pr0'])[1]").screenshot('{ capture:"fullPage",padding:1200, }')
       
        // cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
     }
     
     AddtoCartButtonUI_UX(){
          
        cy.visit("https://www.thesouledstore.com/men")
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.wait(1000)
        cy.xpath("(//div[@class='col-md-5 pr0'])[1]").screenshot('{ capture:"fullPage",padding:1200, }')

       


     }
      
     AddtoCartButton(){
          
        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()


     }
     checkUIofAddToCartButton(){
          
        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.xpath("//a[contains(text(),'Go to cart')]").should('be.visible')

     }

     CARTIcon(){

        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.wait(5000)
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click()   

     }

     checkProduct_UI_UX(){
        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click()
        cy.wait(5000)
        cy.get('.viewContainer').screenshot('{ capture:"fullPage",padding:140, }')   
        cy.xpath("//h1[normalize-space()='Spider-Man: Sigil']").should('have.text','Spider-Man: Sigil')
        
     }
     

     checkProductDetails(){ 
            
        cy.visit("https://www.thesouledstore.com/men")
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click()  
        cy.wait(10000)
        cy.get('.viewContainer').screenshot('{ capture:"fullPage",padding:1200, }')         
        
     }
     
     CartList(){
        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.go('back')
        cy.go('back')
        cy.wait(5000)
        cy.xpath("//img[@alt='Joggers']").click()
        cy.wait(5000)
        cy.get("a[href='/product/solids-azure-blue-men-cargo-joggers?gte=1']").click()
        cy.wait(5000)
        cy.xpath("//div[@class='tss-body-wrapper']//li[3]").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.wait(5000)
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click() 
        cy.wait(10000)
        cy.get(':nth-child(5) > .btn').click()
        cy.wait(6000)
        cy.xpath("(//li[@class='fbold'])[2]").screenshot('{ capture:"fullPage",padding:800, }')
        // cy.xpath("(//li[contains(@class,'fbold')])[5]").should('have.text','\n Total Amount \n ₹ 2420.00\n          ')
       
     }

     RemoveCartList(){
        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.go('back')
        cy.go('back')
        cy.wait(5000)
        cy.xpath("//img[@alt='Joggers']").click()
        cy.get("a[href='/product/solids-azure-blue-men-cargo-joggers?gte=1']").click()
        cy.xpath("//div[@class='tss-body-wrapper']//li[3]").click()
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click() 
        cy.wait(10000)
        cy.get(':nth-child(5) > .btn').click()
        cy.xpath("(//button[contains(@type,'button')][normalize-space()='Remove'])[1]").click()
        cy.get(".move").click()
        cy.xpath("(//button[contains(@type,'button')][normalize-space()='Remove'])[2]").click()
        cy.get(".move").click()
        cy.get(".emptyCartTitle").should('have.text','Your shopping cart is empty. ')
     }

     PlaceTheOrder(){
        cy.visit("https://www.thesouledstore.com/men")
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click()
        cy.wait(10000)
        cy.get(':nth-child(5) > .btn').click()
        cy.get("button[class='btn btn-primary btn-lg btn-block pointer text-uppercase']").click()
        cy.wait(5000)
        cy.get("input[placeholder='Enter Phone Number']").type(8668806959)
        cy.get("button[type='submit']").click();
        cy.wait(20000);
        cy.get("button[type='submit']").click();
        cy.wait(5000)
        cy.get("button[class='btn btn-primary btn-lg btn-block pointer text-uppercase']").click()
        
      
     }

     Logout(){

        cy.visit("https://www.thesouledstore.com/men")
        cy.viewport(1500,800)
        cy.wait(5000)
        cy.get("#vests").scrollIntoView().click()
        cy.wait(5000)
        cy.contains("Spider-Man: Sigil").click()
        cy.wait(5000)
        cy.xpath("//span[normalize-space()='S']").click()
        cy.wait(5000)
        cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").click()
        cy.wait(5000)
        cy.xpath("//div[@class='headerRight']//li[4]//a[1]").click()
        cy.wait(10000)
        cy.get(':nth-child(5) > .btn').click()
        cy.wait(5000)
        cy.get("button[class='btn btn-primary btn-lg btn-block pointer text-uppercase']").click()
        cy.wait(5000)
        cy.get("input[placeholder='Enter Phone Number']").type(8668806959)
        cy.get("button[type='submit']").click();
        cy.wait(40000);
        cy.get("button[type='submit']").click();
        cy.wait(8000)
        cy.get("button[class='btn btn-primary btn-lg btn-block pointer text-uppercase']").click()
        cy.wait(5000)
        cy.get(".pointer.navbar-brand").click()
        cy.wait(5000)
        cy.xpath("//span[@class='hicon fa fa-user-o']").trigger('mouseover')
        cy.wait(1000)
        cy.xpath("//div[contains(@class,'dropdown-item pointer')]").click()
        cy.wait(1000)
        cy.get(".toasted.toasted-customred.primary.default").should('have.text','Successfully Logged Out.')

     }
}
export default addtocart;