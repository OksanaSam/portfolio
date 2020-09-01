import React from 'react';

// * * * * TRANSLATIONS FEATURE
import Translate from 'translate-components';

function Contact() {
    return (
        <>
        {/* CONTACT */}
            <section id='contact' className='contactSection'>
                <div className='wrapper'>
                    <div className='formSection'>
                        <h2><Translate useRawText={true}>let's get in touch</Translate></h2>
                            <p><Translate useRawText={true}>To connect, you can always email me at oksana.s.dev@gmail.com.</Translate></p>
                            <p><Translate useRawText={true}>Or, if you prefer it the old-fashioned way, fill out the form!</Translate></p>
                        <form action='https://getform.io/f/27e13fbd-6704-422a-a101-c0e11e96aab1' method='POST' >
                            <label htmlFor='name'><Translate useRawText={true}>name *</Translate></label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                // placeholder='your name'
                                // value=''
                                // value={this.state.values.name}
                                // onChange={this.handleInputChange}
                                required
                            />
                            <label htmlFor='email'><Translate useRawText={true}>email *</Translate></label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                // placeholder='email'
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
                            <button type='submit' id='submit' name='submit'><Translate useRawText={true}>Submit</Translate></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;














    