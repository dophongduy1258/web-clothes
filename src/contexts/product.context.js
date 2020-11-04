import React ,{Component} from "react";
var randomstring = require("randomstring");

export const ProductContext = React.createContext();

export default class ProductProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            productList : []
        }
        this.setProductList = this.setProductList.bind(this);
    }

    // tạo random data
    onGenerateData = ()=>{
        var product = [
          {
            id: this.onGenerateID(),
            name:'vest',
            price:"200000",
            image:"https://vestdep.net/upload/vestdep/2017/08/bo-vest-nam-xanh-caro-denim-cao-cap-3.jpg",
            description:"egfeagaeg",
          },
          {
            id:this.onGenerateID(),
            name:'blaze',
            price:"250000",
            image:"https://cf.shopee.vn/file/c8e9dce4a61f4fc97965a55a01645e9f",
            description:"db5b45b",
          },
          {
            id:this.onGenerateID(),
            name:'hoodie',
            price:"100000",
            image:"https://cf.shopee.vn/file/685369fcf3d967f43ce0b320a1533b46",
            description:"3wgv34g2t",
          },
        ]
        localStorage.setItem('product',JSON.stringify(product));
        console.log("onGenerateData in context"+this.state.productList);
        console.log(product);
        
    }


    // Tạo chuỗi ID ngẫu nhiên
    onGenerateID(){
        var id = randomstring.generate();
        return id;
    }
    

    

    // componentDidMount(){
    //     console.log("componentDidMount");
    //     // kiểm tra xem localStorage có khác null ko và có lấy đc key ko 
    //     if(localStorage && localStorage.getItem("product") ) {
    //         var product = JSON.parse(localStorage.getItem("product"));
    //         console.log("componentDidMount lần 2 refresh check productList đã lưu data chưa");
    //         console.log(this.state.productList);
    //         this.setState({
    //             productList:this.state.productList.push(product)
    //         })
    //     }
        

    // }

    setProductList(products){
        console.log("setProductList"+products);
        this.setState({
            productList:products
        })
        
        localStorage.setItem('product',JSON.stringify(products));
    }



    render(){
        return(
            <ProductContext.Provider
                value={{
                    productList:this.state.productList,
                    setProductList:this.setProductList,
                    onGenerateData:this.onGenerateData
                }}
            >
                    {this.props.children}
            </ProductContext.Provider>
        )
    }

}


