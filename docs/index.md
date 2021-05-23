# Application Form

A Yawik application form is a standalone Single Page Application (SPA). It is static 
HTML code combined with Javascript and CSS that runs in the applicant's browser. The 
form thus offers the applicant a maximum of user-friendliness. Already during the 
input of the application data, the applicant is signaled that data is entered 
correctly or incorrectly.

## free application forms

you can create an application form for free at 
https://kostenlose-bewerbungsformulare.yawik.org/

We are happy if you decide to fill out a free application form. But please keep in 
mind that we will then generate the email that reaches you from the applicant's data.
Of course, we assure that everything is done in accordance with data protection. 


## Features

* multilingual
* hosting as Github or Gitlab Page possible
* compatible with Yawik. 

## Installation

The forms are subject to the MIT license. You can copy and modify the source code for
free. Ask your technology. Or them us. We are happy to help.

``` bash
git clone https://gitlab.com/yawik/applicationform.git
cd applicationform
yarn install
yarn dev
```

## Configuration

The form is .env-aware. 

| Name                         | Value                               | 
|------------------------------|-------------------------------------|
| YAWIK_APPLICATION_FORM_ACTON | URL to which form data is sent      |
| YAWIK_JOB_DETAIL_URL         | URL where we get title or company   |
| YAWIK_ORGANIZATION           | Organizaion ID                      |
| YAWIK_OAUTH_FACEBOOK         | App Identifier                      |
| YAWIK_OAUTH_GOOGLE           | App Identifier                      |
| YAWIK_OAUTH_LINKEDIN         | App Identifier                      |
| YAWIK_OAUTH_XING             | **not working**                     |

If an **YAWIK_OAUTH_\*** variable is not shown, the feature is not used within the form.
Linkedin and Xing are currently not working because of: https://github.com/MrSwitch/hello.js/issues/585

## Demo

https://form.yawik.org