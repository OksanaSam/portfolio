import React from 'react';

function ContactSection() {

    return (
        <>
            <section id='contact' className='contactSection'>
                <div className='formSection'>
                    <div className='contact'>
                        <div className='card'>
                            <p>If you are interested in working together or just having a chat over coffee you can fill out the form or just email me at</p>
                            <p>sayhi@oksanadev.com</p>
                        </div>
                    </div>
                    <form action='https://getform.io/f/27e13fbd-6704-422a-a101-c0e11e96aab1' method='POST' >
                        <label htmlFor='name'>name *</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            // value=''
                            // value={this.state.values.name}
                            // onChange={this.handleInputChange}
                            required
                        />
                        <label htmlFor='email'>email *</label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            // value=''
                            // value={this.state.values.email}
                            // onChange={this.handleInputChange}
                            required
                        />
                        <textarea
                            name='message'
                            id='message'
                            cols='30'
                            rows='10'
                            placeholder='message'
                            required
                        ></textarea>
                        <input type='submit' id='submit' name='submit'/>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ContactSection;














    