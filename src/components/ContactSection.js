import React from 'react';

function ContactSection() {
    return (
        <>
            <section id='contact' className='contactSection'>
                <div className='wrapper'>
                    <div className='formSection'>
                        <h3>let's get in touch</h3>
                            <p>Interested in working together or chatting about coding? </p>
                            <p>You can just email at sayhi@oksanadev.com. Or, if you prefer it the old-fashioned way, fill out the form!</p>
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
                                type='email'
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
                </div>
            </section>
        </>
    );
}

export default ContactSection;














    