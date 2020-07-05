import React from 'react'
import { Navbar, NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem, NavLink,Modal,ModalBody,Button,ModalHeader, FormGroup,
    Form,Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'



class Header extends React.Component{
   constructor(props){
       super(props)
       this.state={
           isNavOpen:true,
           isModalOpen:false
       }
   }

   toggleNav=()=>{
       this.setState({
           isNavOpen:!this.state.isNavOpen
       })
   }

   toggleModal=()=>{
       this.setState({
           isModalOpen:!this.state.isModalOpen
       })
   }

   handleLogin=(event)=>{
       this.toggleModal();
       alert("USERNAME"+this.username.value + "Password" +this.password.value+ "Remember"+this.remember.checked)
   }


    render(){

        return(

            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristonrante con Fusion" />
                        </NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>

                          <Nav navbar>
                             <NavItem>
                                 <NavLink tag={Link} className="nav-Link" to="/home" >
                                     <span className="fa fa-home fa-lg"></span>Home
                                 </NavLink>
                             </NavItem>
                             <NavItem> 
                                 <NavLink tag={Link} className="nav-Link" to="/about" >
                                     <span className="fa fa-info fa-lg"></span>About us
                                 </NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink tag={Link} className="nav-Link" to="/menu" >
                                     <span className="fa fa-list fa-lg"></span>Menu
                                 </NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink tag={Link} className="nav-Link" to ="/contactus" >
                                     <span className="fa fa-home fa-lg"></span>Contact US 
                                 </NavLink>
                             </NavItem>
                         </Nav> 
                         <Nav className="ml-auto" navbar>
                             <NavItem>
                                 <Button outline onClick={this.toggleModal}>
                                     <span className="fa fa-sign-in fa-lg"></span>Login
                                 </Button>
                             </NavItem>
                         </Nav>
                         </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={{backgroundColor:'rgba(145,68,204,0.98)'}} >
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from World's best cuisines,and create a unique fusion experience.Our lipsmacking creation will tickle your cusinnary senses!</p>
                                
                            </div>
                        </div>
                    </div>

                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(input)=>this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input)=>this.password=input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input)=>this.remember=input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary" >Login</Button>
                        </Form>
                        
                    </ModalBody>>

                </Modal>

            </>
        )
    }


}




export default Header;

