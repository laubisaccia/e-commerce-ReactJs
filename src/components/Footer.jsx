import React from 'react';

export default function Footer() {


    return (
        <div style={{ backgroundColor: '#989d9d' }}>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum.</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum.</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum.</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>

                        {/* Column4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum.</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="p text-sm-center">
                            &copy;{new Date().getFullYear()} Lau Bisaccia - All rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

