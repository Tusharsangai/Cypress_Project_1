import addtocart from "../support/ShouldStore/Extension.cy"


describe('ADD TO CART And CART Page', () => {
  const add = new addtocart();
  
     it('TC-85', () => {
         add.SelectSize_UI_UX()
     });

     it('TC-86', () => {
     add.SelectSize()
     })

     it('TC-87', () => {
         
         add.AddtoCartButtonUI_UX()
     });
  
     it('TC-88', () => {
     add.AddtoCartButton()
     })

   it('TC-89', () => {
     add.checkUIofAddToCartButton()
   })

   it('TC-91', () => {
        add.CARTIcon()

   });
   
   it('TC-92', () => {
        
       add.checkProduct_UI_UX;
   });

   it('TC-93', () => {
     add.checkProductDetails()
   });

   it('TC-94', () => {
    add.checkProductDetails()
   });


   it('TC-101', () => {
       add.CartList()
   });

   it('TC-103', () => {
       
         add.RemoveCartList()
   });
   

   it('TC-105', () => {
         add.PlaceTheOrder()
   });


  it('TC-115', () => {
        add.Logout()
  });
})