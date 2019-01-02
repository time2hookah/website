<template>
    <div>
        <!-- Shopping Cart -->
        <div id='services-shoppingCart' class="btn-group">
            <!-- <button type="button" class="dropdown-toggle shoppingCart-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
            <span id='shoppingCart-icon' class="fa-stack fa-5x has-badge" :data-count="trayItemCount">
                <i class="fa fa-circle fa-stack-1x" ></i>
                <img class='fa-stack-2x' :src="'src/assets/logos/' + (trayItemCount ? 'tray-full-v4' :  'tray-empty') + '.png'" alt="">
                <!-- <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i> -->
            </span>

            <!-- Dropdown -->
            <!-- </button> -->
            <div id='shoppingCart-dropdown'>
                <h5 class='text-center'>Shopping Tray</h5>
                <hr>
                <ul id='shoppingCart-list'></ul>

                <div class='mt-2'>
                    <i class="fas fa-info-circle"></i> - Hover for Add-Ons
                </div>

                <button id='shoppingCart-goBtn' class='btn' data-placement="top" title="You must select at least one service to continue.">
                    GO
                    <!-- <router-link to="/checkout" class="btn">GO</router-link> -->
                </button>
            </div>
        </div>

<!-- <button class='btn' @click='test'>TESTING</button> -->

        <h3 class='text-center'>Services</h3>
        <br>
        <p>&nbsp; * - Drag&Drop the icons into the tray area in the bottom left corner to add to cart.</p>

        <section class="section section-sm bg-gray-light text-center">
            <!-- Our Services-->
            <div class="shell">
                <!-- <h2>Our Services</h2> -->
                <!-- Bootstrap collapse-->
                <div class="panel-group panel-group-custom panel-group-corporate" id="servicesAccordion" role="tablist" aria-multiselectable="true">
                    <div class="range range-30">
                        <div class="cell-sm-6">
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-calculator drag" data-item='Payroll Suite' data-toggle="tooltip" data-placement="top" title="Drag Me!"></i>
                                <div class="panel-heading" id="servicesAccordion-payrollHeading" role="tab">
                                    <div class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-payrollCollapse" aria-controls="servicesAccordion-payrollCollapse" aria-expanded="true">
                                            <!-- payroll -->
                                            Payroll Suite Solutions

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse in" id="servicesAccordion-payrollCollapse" role="tabpanel" aria-labelledby="servicesAccordion-payrollHeading">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <ul>
                                                    <li>– Payroll Process</li>
                                                    <li>– Payroll Reporting</li>
                                                    <li>– Accruals</li>
                                                    <li>– Payroll Setup (Year End Fee)</li>
                                                    <li>– Benefits Administration</li>
                                                    <li>– Platform Administration</li>
                                                    <li>– Mobile App </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-6">
                                                <u>Add-Ons</u>
                                                <ul>
                                                    <li>+ ACA Manager</li>
                                                    <li>+ General Ledger/Year End</li>
                                                    <li>+ G-Suite by Google Cloud</li>
                                                    <li>+ Payroll AnswerForce</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-users drag" data-item='HR Suite'></i>
                                <div class="panel-heading" id="servicesAccordion-hrHeading" role="tab">
                                    <div class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-hrCollapse" aria-controls="servicesAccordion-hrCollapse" aria-expanded="true">
                                            <!-- hr -->
                                            HR Suite Solutions

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse in" id="servicesAccordion-hrCollapse" role="tabpanel" aria-labelledby="servicesAccordion-hrHeading">
                                    <div class="panel-body">

                                        <div class="row">
                                            <div class="col-sm-6">
                                                <u>Included</u>
                                                <ul>
                                                    <li>– Benefits</li>
                                                    <li>– Talent Acquisition</li>
                                                    <li>– Talent Management</li>
                                                    <li class='pl-2'>o Compensation Management</li>
                                                    <li class='pl-2'>o Performance Management</li>
                                                    <li class='pl-2'>o Succession planning</li>
                                                    <li class='pl-2'>o Training & Certification Management</li>
                                                    <li class='pl-2'>o Indecent Tracking</li>
                                                    <li class='pl-2'>o Attendance Management</li>
                                                    <li class='pl-2'>o Asset Management</li>
                                                    <li class='pl-2'>o Offboarding</li>
                                                    <li>– HR Management / Administration</li>
                                                    <li class='pl-2'>o Benefits Administration</li>
                                                    <li class='pl-2'>o Position Management </li>
                                                    <li class='pl-2'>o Compliance</li>
                                                    <li class='pl-2'>o HR Resources</li>
                                                    <li class='pl-2'>o Mobile App</li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-6">
                                                <u>Add-Ons</u>
                                                <ul>
                                                    <li>+ Leave Manager</li>
                                                    <li>+ Recruiting</li>
                                                    <li>+ AnswerForce</li>
                                                    <li>+ E-Verify Connector</li>
                                                    <li>+ Background Screening</li>
                                                    <li>+ Travel & Expense Management</li>
                                                    <li>+ Job Postings</li>
                                                    <li>+ EverythingBenefits Integration</li>
                                                    <li>+ eBenefits Network</li>
                                                    <li>+ Talent Acquisitions Express</li>
                                                    <li>+ G-Suite by Google Cloud</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-sm-6">
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="glyphicon glyphicon-time drag" data-item='Timekeeping Suite'></i>
                                <div class="panel-heading" id="servicesAccordion-timekeepingHeading" role="tab">
                                    <div class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-timekeepingCollapse" aria-controls="servicesAccordion-timekeepingCollapse" aria-expanded="true">
                                            <!-- timekeeping -->
                                            Timekeeping Suite Solutions

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse in" id="servicesAccordion-timekeepingCollapse" role="tabpanel" aria-labelledby="servicesAccordion-timekeepingHeading">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <u>Included</u>
                                                <ul>
                                                    <li>– Labor Management </li>
                                                    <li>– Basic Scheduling </li>
                                                    <li>– Accruals </li>
                                                    <li>– Attestation </li>
                                                    <li>– Pay Rules </li>
                                                    <li>– Rate Tracking</li>
                                                    <li>– Reports</li>
                                                    <li>– Data Collection </li>
                                                    <li>– Mobile Apps</li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-6">
                                                <u>Add-Ons</u>
                                                <ul>
                                                    <li>+ ACA Manager</li>
                                                    <li>+ Leave Manager</li>
                                                    <li>+ G-Suite by Google Cloud</li>
                                                    <li>+ Asher Telephony</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-calendar drag" data-item='Scheduling Suite'></i>
                                <div class="panel-heading" id="servicesAccordion-schedulingHeading" role="tab">
                                    <div class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-schedulingCollapse" aria-controls="servicesAccordion-schedulingCollapse" aria-expanded="true">
                                            <!-- scheduling -->
                                            Scheduling Suite Solutions

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse in" id="servicesAccordion-schedulingCollapse" role="tabpanel" aria-labelledby="servicesAccordion-schedulingHeading">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <u>Included</u>
                                                <ul>
                                                    <li>– Shift Distribution</li>
                                                    <li>– Time Scheduler</li>
                                                    <li>– Cost Control</li>
                                                    <li>– Skill Scheduler</li>
                                                    <li>– Robust Reporting</li>
                                                    <li>– Policy Enforcement</li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-6">
                                                <u>Add-Ons</u>
                                                <ul>
                                                    <li>+ G-Suite by Google Cloud</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="d-none section section-sm bg-gray-light text-center">
            <!-- Our Services-->
            <div class="shell">
                <!-- <h2>Our Services</h2> -->
                <!-- Bootstrap collapse-->
                <div class="panel-group panel-group-custom panel-group-corporate" id="servicesAccordion" role="tablist" aria-multiselectable="true">
                    <div class="range range-30">
                        <div class="cell-sm-6">
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-calculator drag" data-item='Payroll' data-toggle="tooltip" data-placement="top" title="Drag Me!"></i>
                                <div class="panel-heading" id="servicesAccordion-payrollHeading" role="tab">
                                    <div class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-payrollCollapse" aria-controls="servicesAccordion-payrollCollapse" aria-expanded="true">
                                            <!-- payroll -->
                                            Payroll

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse in" id="servicesAccordion-payrollCollapse" role="tabpanel" aria-labelledby="servicesAccordion-payrollHeading">
                                    <div class="panel-body">
                                        <p>With continuous processing, payroll data is available whenever you need it. Real-time calculations let you know exactly what your people are doing and what you’re paying them to do it. Our Payroll Solution includes payroll processing, reporting, setup, general ledger/year end, benefits administration, security, mobile apps and  more. </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-users drag" data-item='HR'></i>
                                <div class="panel-heading" id="servicesAccordion-HRHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-HRCollapse" aria-controls="servicesAccordion-HRCollapse">
                                            <!-- HR -->
                                            HR

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-HRCollapse" role="tabpanel" aria-labelledby="servicesAccordion-HRHeading">
                                    <div class="panel-body">
                                        <p>Our HR Solution includes, talent acquisition, talent management, performance management, succession planning, attendance management, compliance, training and certifications management. </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="glyphicon glyphicon-time drag" data-item='Timekeeping'></i>
                                <div class="panel-heading" id="servicesAccordion-timekeepingHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-timekeepingCollapse" aria-controls="servicesAccordion-timekeepingCollapse">
                                            <!-- timekeeping -->
                                            Timekeeping

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-timekeepingCollapse" role="tabpanel" aria-labelledby="servicesAccordion-timekeepingHeading">
                                    <div class="panel-body">
                                        <p>Streamlined to boost employee satisfaction and bottom-line results with our Timekeeping Solution which includes labor management, accruals, scheduling, pay rules, rate tracking, reports, mobile apps, data collection, security and alerts. </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-search drag" data-item='Recruiting'></i>
                                <div class="panel-heading" id="servicesAccordion-recruitingHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-recruitingCollapse" aria-controls="servicesAccordion-recruitingCollapse">
                                            <!-- recruiting -->
                                            Recruiting

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-recruitingCollapse" role="tabpanel" aria-labelledby="servicesAccordion-recruitingHeading">
                                    <div class="panel-body">
                                        <p>Our talent acquisition solution helps your organization source, track, and evaluate quality talent so you can build an engaged, high-performing workforce more efficiently and cost effectively. This powerful solution automates and streamlines recruiting and hiring processes to support a paperless human capital management (HCM) environment. It provides a positive candidate experience that makes it easy for candidates to provide information, search for jobs, and apply online. </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-calendar drag" data-item='Scheduling'></i>
                                <div class="panel-heading" id="servicesAccordion-schedulingHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-schedulingCollapse" aria-controls="servicesAccordion-schedulingCollapse">
                                            <!-- scheduling -->
                                            Scheduling

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-schedulingCollapse" role="tabpanel" aria-labelledby="servicesAccordion-schedulingHeading">
                                    <div class="panel-body">
                                        <p>With our Scheduling Solution, time-consuming, error-prone processes are a thing of the past. Users can build, fill, manage, and measure best-fit schedules that align output and service-level goals with budget and demand. And automated scheduling rules and policies enforcement helps improve employee morale while reducing the potential for grievances, litigation, and fines. </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-user-plus drag" data-item='Accruals'></i>
                                <div class="panel-heading" id="servicesAccordion-accrualsHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-accrualsCollapse" aria-controls="servicesAccordion-accrualsCollapse">
                                            <!-- accruals -->
                                            Accruals

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-accrualsCollapse" role="tabpanel" aria-labelledby="servicesAccordion-accrualsHeading">
                                    <div class="panel-body">
                                        <p>
                                            Prerequisites: <b>Requires Timekeeping</b> or <b>Payroll modules</b>

                                            <br><br>

                                            Managing accruals manually can be a painful process — especially since employees accrue time at different rates. Our accruals module automatically and accurately calculates and tracks accrual balances based on your organization’s rules, giving managers immediate visibility into current status to help ensure impartial treatment of employees and minimize compliance risk.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-star drag" data-item='Performance Management'></i>
                                <div class="panel-heading" id="servicesAccordion-performanceManagementHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-performanceManagementCollapse" aria-controls="servicesAccordion-performanceManagementCollapse">
                                            <!-- performanceManagement -->
                                            Performance Management

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-performanceManagementCollapse" role="tabpanel" aria-labelledby="servicesAccordion-performanceManagementHeading">
                                    <div class="panel-body">
                                        <p>The solution makes it easy to create, assign, and complete assessments based on defined criteria and automate the review cycle to reflect established processes. Alerts and reminders keep form submission and approvals on track for more timely review completion. Even more important, it enables you to define cascading goals and track progress throughout the year — not just at annual review time — to measure how employee performance affects business outcomes and to support effective coaching and development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell-sm-6">
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fa fa-medkit drag" data-item='Benefits'></i>
                                <div class="panel-heading" id="servicesAccordion-benefitsHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-benefitsCollapse" aria-controls="servicesAccordion-benefitsCollapse">
                                            <!-- benefits -->
                                            Benefits

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-benefitsCollapse" role="tabpanel" aria-labelledby="servicesAccordion-benefitsHeading">
                                    <div class="panel-body">
                                        <p>Benefits administration features within our HR solution enable you to set up, configure, modify, and manage multiple benefit plans, profiles, and types — quickly and easily — with on-demand visibility into eligibility, enrollment status, and costs across the employee base. It’s also simple to modify the solution’s standard benefits reports to meet your organization’s specific requirements. Customizable self-service tools empower employees to select plans and make life event changes on their own.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="glyphicon glyphicon-piggy-bank drag" data-item='Retirement Services'></i>
                                <div class="panel-heading" id="servicesAccordion-retirementServicesHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-retirementServicesCollapse" aria-controls="servicesAccordion-retirementServicesCollapse">
                                            <!-- retirementServices -->
                                            Retirement Services

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-retirementServicesCollapse" role="tabpanel" aria-labelledby="servicesAccordion-retirementServicesHeading">
                                    <div class="panel-body">
                                        <p>We know that payroll and HR can be challenging for companies of any size—and that’s before trying to coordinate information with your retirement plan. Worktay solves this by creating a better process to ensure your payroll is not only fully compliant and easy to use, but also seamlessly integrates with your Worktray-administered retirement plan.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-heartbeat drag" data-item='ACA Manager'></i>
                                <div class="panel-heading" id="servicesAccordion-ACAManagerHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-ACAManagerCollapse" aria-controls="servicesAccordion-ACAManagerCollapse">
                                            <!-- ACAManager -->
                                            ACA Manager

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-ACAManagerCollapse" role="tabpanel" aria-labelledby="servicesAccordion-ACAManagerHeading">
                                    <div class="panel-body">
                                        <p>Prerequisites: Requires Timekeeping or Payroll or HR modules.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-umbrella drag" data-item='Leave Manager'></i>
                                <div class="panel-heading" id="servicesAccordion-leaveManagerHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-leaveManagerCollapse" aria-controls="servicesAccordion-leaveManagerCollapse">
                                            <!-- leaveManager -->
                                            Leave Manager

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-leaveManagerCollapse" role="tabpanel" aria-labelledby="servicesAccordion-leaveManagerHeading">
                                    <div class="panel-body">
                                        <p>
                                            Prerequisites: Requires Accruals with Timekeeping or HR modules.
                                            <br><br>
                                            Our solution’s absence management module helps you handle leave cases accurately and consistently to avoid litigation and grievances. It integrates leave requests and documentation with employee timesheets and schedules and limits unauthorized time off and late returns with built-in notifications. It also automates enforcement of federal, state, and employer-specific leave policies, including the FMLA, as well as administration of leave eligibility and requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-certificate drag" data-item='Attestation'></i>
                                <div class="panel-heading" id="servicesAccordion-attestationHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-attestationCollapse" aria-controls="servicesAccordion-attestationCollapse">
                                            <!-- attestation -->
                                            Attestation

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-attestationCollapse" role="tabpanel" aria-labelledby="servicesAccordion-attestationHeading">
                                    <div class="panel-body">
                                        <p>
                                            Prerequisite: Requires Timekeeping module.
                                            <br><br>
                                            Failure to comply with labor regulations and collective bargaining agreements can have disastrous results. But our solution’s attestation features minimize compliance risk and improve enforcement of wage and hour policies by empowering employees to access, review, and approve or reject their timecards and designate whether they took their lunch break or not when they punch out.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="icon-tertiary icon material-icons-queue drag" data-item='Add-Ons & Integration'></i>
                                <div class="panel-heading" id="servicesAccordion-addOnsHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-addOnsCollapse" aria-controls="servicesAccordion-addOnsCollapse">
                                            <!-- addOns -->
                                            Add-Ons & Integration

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-addOnsCollapse" role="tabpanel" aria-labelledby="servicesAccordion-addOnsHeading">
                                    <div class="panel-body">
                                        <p>Self-service apps from 3rd party providers expanding the platform’s functionality, such as ACA manager, background checks, workers compensation, HR compliance support, 401(k) plans, carrier connect, travel and expense management.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Bootstrap panel-->
                            <div class="panel panel-custom panel-corporate">
                                <i class="fas fa-mobile-phone drag" data-item='Go Mobile'></i>
                                <div class="panel-heading" id="servicesAccordion-goMobileHeading" role="tab">
                                    <div class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#servicesAccordion" href="#servicesAccordion-goMobileCollapse" aria-controls="servicesAccordion-goMobileCollapse">
                                            <!-- goMobile -->
                                            Go Mobile

                                            <div class="panel-arrow"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-collapse collapse" id="servicesAccordion-goMobileCollapse" role="tabpanel" aria-labelledby="servicesAccordion-goMobileHeading">
                                    <div class="panel-body">
                                        <p>
                                            <ol class='list-type-disc'>
                                                <li>Clock in and out</li>
                                                <li>Communicate preferred shifts and availability</li>
                                                <li>Check schedules</li>
                                                <li>Adjust availability and preferences</li>
                                                <li>Swap shifts</li>
                                                <li>Communicate with peers and managers</li>
                                                <li>Track tasks</li>
                                                <li>Submit and approve time-off requests</li>
                                                <li>View pay and benefits information</li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import {setListeners} from 'src/js/services';

export default {
    name: 'services',
    data: function() {
        return {
            trayItemCount: Object.keys(this.$root.shoppingTray).length ? Object.keys(this.$root.shoppingTray).length : 0,
            addOnItems: {
                'all': ['G-Suite by Google Cloud'],
                'Payroll Suite': ['ACA Manager', 'General Ledger / Year End', 'AnswerForce'],
                'HR Suite': ['Leave Manager', 'Recruiting', 'AnswerForce', 'E-Verify Connector', 'Background Screening', 'Travel & Expense Management', 'Job Postings', 'EverythingBenefits Integration', 'eBenefits Network', 'Talent Acquisitions Express'],
                'Timekeeping Suite': ['ACA Manager', 'Leave Manager', 'Asher Telephony'],
                'Scheduling Suite': []
            }
        };
    },
    mounted: function() {
        setListeners(this);

        var breadcrumbs = '' +
            '<li><a href="https://worktray.com/">Home</a></li>' +
            '<li class="active">Services</li>';

        $('#breadcrumbs ul').html(breadcrumbs);
    },
    created: function() {

    },
    methods: {
        listCartItems: function () {
            $('#shoppingCart-list').html('');
            var removeBtn = '<span class="icon-gradient mdi mdi-close-circle shoppingCart-item-remove"></span>';
            var liList = '';
            shoppingTray.forEach(function(el, i) {
                liList += '<li><h6 class="shoppingCart-item-name">' + el + removeBtn +'</h6></li>';
            });

            $('#shoppingCart-list').append(liList);
        },
        /* emptyFunc: function(e) {
            // e.stopImmediatePropagation();
            // return false;
            // e.preventDefault();
        } */
        test: function() {
            this.$root.$data.shoppingTray.push('testing123');
        }


    }
};
</script>

<style>
#services-shoppingCart {
    position: absolute;
}

#shoppingCart-icon {
    position: fixed;
    cursor: pointer;
    bottom: 20px;
    left: 5px;
    font-size: 50px;
    padding: 15px 20px 15px 15px;
    /* background: white;
    border-radius: 50%; */
    z-index: 1000;
}

#shoppingCart-icon i.fa /* i.fa-shopping-cart */ {
    font-style: normal;
    background: #9b9b9b;
    border-radius: 50%;
    opacity: .3;
}

i.fa-circle::before {
    opacity: 0;
}

#shoppingCart-icon img {
    z-index: 10;
    height: 30%;
    top: 57px;
}

#shoppingCart-icon.drop-hover img {
    top: 75px;
}

.cart-button {
    position: fixed;
    left: 100px;
    bottom: 100px;
}

#shoppingCart-dropdown {
    display: none;
    position: fixed !important;
    left: 5px !important;
    bottom: 120px !important;
    width: auto;
    min-height: 150px;
    padding: 5px;
    background: white;
    border-radius: 5px;
    border: 1px solid #9b9b9b;
    z-index: 1000;
}

#shoppingCart-dropdown hr {
    margin: 20px 0;
}

#shoppingCart-list {
    text-align: left;
    overflow-y: auto;
    overflow-x: hidden;
}

#shoppingCart-list > li {
    position: relative;
    padding: 5px 0;
}

#shoppingCart-goBtn {
    width: 100%;
}

.shoppingCart-item-name {
    width: max-content;
}

.shoppingCart-item-remove {
    position: absolute;
    right: 10px;
    font-size: 26px;
    cursor: pointer;
}

.fa-stack[data-count]::after{
    position: absolute;
    right: 0%;
    top: 1%;
    content:  attr(data-count);
    font-size: 30%;
    padding: .6em;
    border-radius: 999px;
    line-height: .75em;
    color:  white;
    background: rgba(255,0,0,.85);
    text-align: center;
    min-width: 2em;
    font-weight: bold;
}

.drag {
    position: relative;
    width: 30px;
    margin: 0 15px;
    top: 20px;
    color: black;
    font-size: 30px;
    text-align: center;
    z-index: 100;
    float: left;
    cursor: pointer;
}


.drop-active-blue i.fa {
    /* font-size: 90px !important; */
    background: linear-gradient(to bottom, #1ebbf0 15%, #34d9b6 120%) !important;

}

.drop-active-red i.fa {
    /* font-size: 90px !important; */
    background: linear-gradient(to bottom, #1ebbf0 15%, #d93434 75%) !important;

}

.drop-hover {
    font-size: 70px !important;
    bottom: 25px !important;
    left: 10px !important;
}

</style>

