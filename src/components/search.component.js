import { extend } from 'jquery'

import apiCaller from '../utils/apiCaller';
import React,{Component} from 'react'

export default class Search extends Component{
    constructor(){
        super();
        this.state={
            keyword:''
        }
    }


    // componentDidMount(){
    //     apiCaller('api/Product','GET',null)
    //         .then((res)=>{
    //             this.setState({
    //                 products:res.data
    //             });
    //         });
    // }

    onChange = (event)=>{
        var {filterName} = this.state;
        var value = event.target.value;
        var name = event.target.name;
        // if(name.filterType === '-1'){
        //     value = event.target.value === '0'? '0' : '1';
        // }
        this.setState({ 
            [name] : value
        })
    }
    onSearch = ()=>{
        this.props.onSearch(this.state.keyword);
    }

    render(){
        var {products,keyword} = this.state;
        return(
        <div className="row">
            <div className="col-lg-12 card-margin">
                <div className="card search-form">
                    <div className="card-body p-0">
                        <form  id="search-form">
                            <div className="row">
                            <div className="col-12">
                                <div className="row no-gutters">
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    {/* <select className="form-control" value={filterType} name='filterType' onChange={this.onChange} id="exampleFormControlSelect1">
                                    <option value={-1}>Tìm theo </option>
                                    <option value={0}>Tên sản phẩm</option>
                                    <option value={1}>Thương hiệu</option>
                                    </select> */}
                                </div>
                                <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                    <input type="text" value={keyword} placeholder="Search..." onChange={this.onChange} className="form-control" id="search" name="keyword" />
                                </div>
                                <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                                    <button type="button" className="btn btn-base" onClick={this.onSearch}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
        )
    }
}
