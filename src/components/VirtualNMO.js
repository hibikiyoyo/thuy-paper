import React, { Component } from 'react';
import RangerSliders from './RangerSliders'
class VirtualNMO extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title " align="center"><label>Virtual Network Mobile Operation</label></h3>
                </div>
                <div className="panel-body">
                    <label><h3> Policy Preference</h3></label>
                    <div className="form-group">
                        <select className="form-control"  >
                            <option hidden>Select a Policy</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <RangerSliders
                         name = {"QoS"}
                        
                    />
                     <RangerSliders
                         name = {"Resolution"}
                         
                    />

                </div>
            </div>
        );
    }
}

export default VirtualNMO;
