import React, { Component } from 'react';
class VIM extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title " align="center"><label>VIM</label></h3>
                </div>
                <div className="panel-body">
                    <div className="form-group has-feedback">
                        <label className="sr-only">Search</label>
                        <input type="text" className="form-control" name="search" id="search" placeholder="search" />
                        <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                    <div>
                        <table className="table table-bordered ">
                            <thead>
                                <tr>
                                   
                                    <th ><a >First Name    </a></th>
                                    {/*<th className="text-center" ><a  align="center">First Name    </a></th> */}
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  
                                    <td >Mark</td>
                                   
                                 
                                </tr>
                                <tr>
                                   
                                    <td >Ashley</td>
                                    
                                  
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

export default VIM;
