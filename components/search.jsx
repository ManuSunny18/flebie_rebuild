import React from 'react';
import reqwest from 'reqwest';
import SearchMain from '../client/scripts/search.js';

class Search extends React.Component {
    constructor(props){
		super(props);
		this.state={
			loading:true,
			gotList:false,
			labList:[]
		}
    }
    loadLabs(){
        var _this = this;
		reqwest({			
				//url:"http://lowcost-env.hppsvuceth.ap-south-1.elasticbeanstalk.com/api/v0.1/labTest/getLabTestsFromTestNames?tests=Vitamin B6 (Pyridoxin), Serum;"
				//url:"http://lowcost-env.hppsvuceth.ap-south-1.elasticbeanstalk.com/api/v0.1/test/getAllTests"
				//url:"/getMultiLabs"
				url:" http://lowcost-env.hppsvuceth.ap-south-1.elasticbeanstalk.com/api/v0.1/labTest/getLabTestsFromTestNames?tests=Vitamin B6 (Pyridoxin), Serum;Vitamin E (Tocopherol), Serum"
				, type: 'json'
				,headers:{
					"Access-Control-Allow-Origin":"*"
				}
				, method: 'get'
				, error: function (err) {
					console.log(err,"err")
					this.setState({
						loading:false,
						gotList:false
					})
				}
				, success: function (resp) {
					console.log(resp,"success");
						_this.setState({
							labList:resp,
							gotList:true,
							loading:false
						})
					}
				})
    }
    componentDidMount(){
        console.log("popular");
        //getMultiLabs
        this.loadLabs.bind(this)();
	}
    render(){
		var loader= <div className={(!this.state.loading)?"hide":"loader-wrap"}>
				<div className="sk-circle">
					<div className="sk-circle1 sk-child"></div>
					<div className="sk-circle2 sk-child"></div>
					<div className="sk-circle3 sk-child"></div>
					<div className="sk-circle4 sk-child"></div>
					<div className="sk-circle5 sk-child"></div>
					<div className="sk-circle6 sk-child"></div>
					<div className="sk-circle7 sk-child"></div>
					<div className="sk-circle8 sk-child"></div>
					<div className="sk-circle9 sk-child"></div>
					<div className="sk-circle10 sk-child"></div>
					<div className="sk-circle11 sk-child"></div>
					<div className="sk-circle12 sk-child"></div>
				</div>
			</div>;
		var labListUI=[];
		labListUI= this.state.labList.map(function(item,index){
			return <div className="list-item">
					<div><div className="item-head">
						<button className="btn btn-link">?</button>
						<div className="pull-right price-block">
							<span className="strike-price">{item.MRP}</span>
							<span className="actual-price">{item.offerPrice}</span>
						</div>
					</div>
					<div className="lab-img">
					</div>
					<div className="lab-footer">
						<h3>{item.name}</h3>
					</div>
				</div>
			</div>
		})
        return (
            <div className="search-main">
				{loader}
				<div className="test-accord">
				</div>
				<div className="clearfix lab-lists">
				{labListUI}
				</div>
            </div>
        );
    }
}
export default Search;