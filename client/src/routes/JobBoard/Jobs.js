import React, { Component, useEffect, useState } from 'react'
import {cardsList, data} from "../customViews/listType/data";
import {Col, Row,Card,Input,Button} from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import CardsListItem from '../customViews/listType/Component/CardsListItem';
import Basic from "../../routes/components/navigation/Pagination/Basic";
import Back from '../components/others/BackTop/Basic';
import Dynamic from '../components/dataDisplay/Tag/Dynamic';
import axios from 'axios' ;


export default function jobs({match}){
   //URLS To fetch 
   const URL = 'http://localhost:8082/job/show'
  
  const Search = Input.Search;
    const [jobs,getJobs] = useState('');

    useEffect(() => {
      getAllJobs();
}, []);

    const getAllJobs = () => {
      axios.get(`${URL}job`)
         .then((response) => {
           const AllJobs = response.data ;
           getJobs(AllJobs);
         })
         .catch( error =>console.error('Error : ${error}'));
         }
         
    
       

    
  
   

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
               <Dynamic>
                  
                  </Dynamic>
            
         <Row>
          <Col span={24}>
            <ContainerHeader 
                           title={<IntlMessages id="Jobs offer"/>}  
                           match={match}/>
          </Col> 

          <Col span={24}>
            <CardsListItem jobs={jobs} styleName="gx-card-list" />
        </Col>
        </Row>
          <Basic>
         
                </Basic>
          <Back>
          
         </Back>

         
          
      </div>
        );
}
