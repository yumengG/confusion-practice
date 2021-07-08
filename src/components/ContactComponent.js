import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const Contact = () => {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [comment, setComment] = useState()


    const addEmail = (e) => {
        setEmail(e.target.value)
    }

    const addName = (e) => {
        setName(e.target.value)
    }

    const addComment = (e) => {
        setComment(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            name: name,
            email: email,
            comment: comment
        }
        console.log(newComment)
    }
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                    121, Clear Water Bay Road<br />
                    Clear Water Bay, Kowloon<br />
                    HONG KONG<br />
                    <i className="fa fa-phone"></i>: +852 1234 5678<br />
                    <i className="fa fa-fax"></i>: +852 8765 4321<br />
                    <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content col-md-9">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <Form onSubmit={onSubmit}>
                <FormGroup>
                        <Label for='Name' md={2}>Name</Label>
                        <Input type='text' name='name' id='Name' placeholder='Name' value={name}
                        onChange={addName}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='Email'md={2}>Email</Label>
                        <Input type='email' name='email' id='Email' placeholder='Email' value={email}
                        onChange={addEmail}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Comment" md={2}>Text Area</Label>
                        <Input type="textarea" name="Comment" id="Comment" value={comment} onChange={addComment} />
                    </FormGroup>
                    <Button >Submit</Button>
                </Form>

            </div>
            
        </div>
    )
}

export default Contact
