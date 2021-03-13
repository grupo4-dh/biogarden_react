import React from 'react';
import Title from './Title';

import Row from './Row'
import Card from './Card';
import Article from './Article';
import Category from './Article/Category';
import Product from './Article/Product';
import Table from './Table';
import Paging from './Table/Paging';

function Container() {
    return (
        <div className="container-fluid">            
            <Title/>
            <Row>
                <Card cardClass = 'card border-left-primary shadow h-100 py-2' text = 'Products in Data Base' value = '135' iconClass = 'fas fa-clipboard-list fa-2x text-gray-300' />
                <Card cardClass = 'card border-left-success shadow h-100 py-2' text = 'Amount in products' value = '$546.456' iconClass = 'fas fa-dollar-sign fa-2x text-gray-300' />
                <Card cardClass = 'card border-left-warning shadow h-100 py-2' text = 'Users quantity' value = '38' iconClass = 'fas fa-user-check fa-2x text-gray-300' />
            </Row>
            <Row>
                <Article title = 'Last product in Data Dase' >
                    <Product/>
                </Article>
                <Article title = 'Categories in Data Base' >
                    <div className="card-body">
                        <div className="row">
                            <Category name = 'Category 01' />
                            <Category name = 'Category 02' />
                            <Category name = 'Category 03' />
                            <Category name = 'Category 04' />
                            <Category name = 'Category 05' />
                            <Category name = 'Category 06' />
                        </div>
                    </div>
                </Article>
            </Row>
            <Row>
                <Table/>
                <Paging/>
            </Row>
        </div> 
    );
}

export default Container;

