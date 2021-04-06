import React, { Component, useState } from 'react'
import {cardsList} from "../customViews/listType/data";
import {Col, Row,Card,Input,Button} from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import CardsListItem from '../customViews/listType/Component/CardsListItem';
import Basic from "../../routes/components/navigation/Pagination/Basic";
import Back from '../components/others/BackTop/Basic';



export default function jobs({match}){
    const Search = Input.Search;
    


   

        return(
            
        <div className="gx-main-content gx-pb-sm-4">

               <Card className="gx-card" title="Search for your next Job">
                <div className= "space-align-block" >
                     <Search
                            placeholder="Search by title ,Skill or company"
                            onSearch={value => console.log(value)}
                            style={{width: 450 , margin:20}}
                             allowClear
                     />
    
                      <Search
                           placeholder="City ,State or Zip Code"
                       onSearch={value => console.log(value)}
                       style={{width: 450,margin:20}}
                       allowClear
                       />
                        <Button
                                 
                                 type="primary" 
                                 icon="search" 
                                 style={{margin:20}}
                              >Search
                        </Button>

             </div>
               </Card>
            
         <Row>
          <Col span={24}>
            <ContainerHeader title={<IntlMessages id="Jobs offer"/>} match={match}/>
          </Col>
          <Col span={24}>
            {cardsList.map((data, index) => (
              <CardsListItem key={index} data={data} styleName="gx-card-list"/>
            ))}
          </Col>
        </Row>
          <Basic>
         
                </Basic>
          <Back>
          
         </Back>

         <Card className="gx-card" title="Search for your next Job">
                <div className= "space-align-block" >
                     <Search
                            placeholder="Search by title ,Skill or company"
                            onSearch={value => console.log(value)}
                            style={{width: 450 , margin:20}}
                             allowClear
                     />
    
                      <Search
                           placeholder="City ,State or Zip Code"
                       onSearch={value => console.log(value)}
                       style={{width: 450,margin:20}}
                       allowClear
                       />
                        <Button
                                 
                                 type="primary" 
                                 icon="search" 
                                 style={{margin:20}}
                              >Search
                        </Button>

             </div>
               </Card>
            
         <Row>
          <Col span={24}>
            <ContainerHeader title={<IntlMessages id="Jobs offer"/>} match={match}/>
          </Col>
          <Col span={24}>
            {cardsList.map((data, index) => (
              <CardsListItem key={index} data={data} styleName="gx-card-list"/>
            ))}
          </Col>
        </Row>
          <Basic>
         
                </Basic>
          <Back>
          
         </Back>
          
      </div>
        );
}
