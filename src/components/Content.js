import React, { Component } from 'react';
import MapContent from './MapContent';
import '../App.css'
import VirtualNMO from './VirtualNMO';
import NaSS from './NaSS';
import NFV from './NFV';
import VIM from './VIM';
class Content extends Component {
    render() {
        return (
            <div className="row ">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 height-80  scroll">
                    <div className="panel panel-primary ">
                        <div className="panel-heading">
                            <h3 className="panel-title " align="center">Simulation</h3>
                        </div>
                        <div className="panel-body background">
                            <VirtualNMO />
                            <NaSS />
                            <NFV />
                            <VIM />
                        </div>
                    </div>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height-80">
                    <div className="wrapper">
                        <div >
                            <MapContent />
                        </div>
                        <div className="mt-65">
                            <button type="button" className="btn btn-default">button</button>
                        </div>


                    </div>




                </div>
            </div>
        );
    }
}

export default Content;
