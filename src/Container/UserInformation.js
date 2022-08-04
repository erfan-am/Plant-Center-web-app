import React from 'react'

const UserInformation = ({user}) => {
  return (
    <div className="container bootstrap snippets bootdey">
    <div className="panel-body inf-content">
        <div className="row">
            <div className="col-md-4">
                <img alt="" width="600" height={400} title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
                <ul title="Ratings" className="list-inline ratings text-center">
                    <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                </ul>
            </div>
            <div className="col-md-6">
                
                <strong>Information <span className="btn">Edite</span></strong> <br/>
                <div className="table-responsive">
                <table className="table table-user-information">
                    <tbody>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-asterisk text-primary h5"></span>
                                    user name                                                
                                </strong>
                            </td>
                            <td className="text-primary h5">
                                {user.username}     
                            </td>
                        </tr>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-eye-open text-primary h5"></span> 
                                    E_mail                                                
                                </strong>
                            </td>
                            <td className="text-primary h5">
                                {user.email}
                            </td>
                        </tr>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-calendar text-primary h5"></span>
                                    created                                                
                                </strong>
                            </td>
                            <td className="text-primary h5">
                                20 jul 20014
                            </td>
                        </tr>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-calendar text-primary h5"></span>
                                    Location                                                
                                </strong>
                            </td>
                            <td className="text-primary h5">
                                 {user.location}
                            </td>
                        </tr> 
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-calendar text-primary h5"></span>
                                    Indetifation Code                                                
                                </strong>
                            </td>
                            <td className="text-primary h5">
                                 3135245241
                            </td>
                        </tr>           
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-calendar text-primary h5"></span>
                                    Customs                                                
                                </strong>
                            </td>
                            <td className="text-primary h5">
                                 Customs list
                            </td>
                        </tr>                                    
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </div>
    </div>                                        
  )
}

export default UserInformation