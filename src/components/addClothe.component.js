import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import {ProductContext} from "../contexts/product.context";

export default class AddClothe extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            price:"",
            image:"",
            description:"",
        }
    }
    // generate random id
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    
    onChange = (event)=>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(value.id ===""){
            var id = this.uuidv4();
            value = target.value.id === "" ? id : "";
            
        }
        this.setState({
            [name] : [value]
        })
    }

    onSubmit = (event)=>{
        event.preventDefault();
    }

    render(){
        return(
            <Container>
                <p>Products</p>

                <div style={{width:"600px",marginLeft:"200px"}}>
                    <Form onSubmit={this.onSubmit} >
                        <FormGroup>
                            <Label >Tên sản phẩm : </Label>
                            <Input type="text" onChange={this.onChange} name="name" />
                        </FormGroup>

                        <FormGroup>
                            <Label >Giá : </Label>
                            <Input type="text" onChange={this.onChange} name="price" />
                        </FormGroup>

                        {/* <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup> */}

                        {/* <FormGroup>
                            <Label for="exampleSelectMulti">Select Multiple</Label>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup> */}

                        {/* <FormGroup>
                            <Label >Loại : </Label>
                            <Input type="text" onChange={this.onChange} name="category"  />
                        </FormGroup> */}

                        {/* <FormGroup>
                            <Label >Hình ảnh : </Label>
                            <Input type="file" onChange={this.onChange} name="image"  />
                        </FormGroup> */}
                        
                        {/* <FormGroup>
                            <Label >Số lượng : </Label>
                            <Input type="number" onChange={this.onChange} name="quantity"  />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label >Nhà sản xuất : </Label>
                            <Input type="text" onChange={this.onChange} name="producer"  />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label >Giám đốc : </Label>
                            <Input type="text" onChange={this.onChange} name="director"  />
                        </FormGroup> */}
                        
                        <FormGroup>
                            <Label >Chi tiết sản phẩm : </Label>
                            <Input type="text" onChange={this.onChange} name="description"  />
                        </FormGroup>

                        {/* <FormGroup tag="fieldset">
                            <legend>Radio Buttons</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Option one is this and that—be sure to include why it's great
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Option two can be something else and selecting it will deselect option one
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="radio1" disabled />{' '}
                                    Option three is disabled
                                </Label>
                            </FormGroup>
                        </FormGroup> */}

                        {/* <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />
                                Check me out
                            </Label>
                        </FormGroup> */}
                        
                        <ProductContext.Consumer>
                            {({setProductList})=><Button type="submit" onClick={()=> setProductList(this.state)}  >Submit</Button>}
                        </ProductContext.Consumer>
                    </Form>

                </div>
            </Container>
        )
    }
}