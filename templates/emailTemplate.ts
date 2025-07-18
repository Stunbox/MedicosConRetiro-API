const emailTemplate = 
`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Médicos con retiro - Email</title>
    <style type="text/css">#outlook a{padding:0}.ReadMsgBody{width:100%}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}a,blockquote,body,li,p,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0;mso-table-rspace:0}img{-ms-interpolation-mode:bicubic}body{margin:0}img{border:0;height:auto;line-height:100%;outline:0;text-decoration:none}table{border-collapse:collapse!important}#bodyCell,#bodyTable,body{height:100%!important;margin:0;width:100%!important}#bodyCell{padding-top:50px;padding-right:50px;padding-left:50px;padding-bottom:50px}#templateContainer{width:500px}#bodyTable,body{background-color:#f5f5f5}h1{color:#202020!important;display:block;font-family:Helvetica;font-size:26px;font-style:normal;font-weight:700;line-height:39px;letter-spacing:normal;margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left}h2{color:#404040!important;display:block;font-family:Helvetica;font-size:20px;font-style:normal;font-weight:700;line-height:30px;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0;text-align:left}h3{color:#606060!important;display:block;font-family:Helvetica;font-size:16px;font-style:normal;font-weight:400;line-height:24px;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0;text-align:left}h4{color:grey!important;display:block;font-family:Helvetica;font-size:14px;font-style:normal;font-weight:400;line-height:21px;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:50px;margin-left:0;text-align:left}#templatePreheader{background-color:#fff;display:inherit}.preheaderContent{color:grey;font-family:Helvetica;font-size:10px;line-height:15px;text-align:left}.preheaderContent a .yshortcuts,.preheaderContent a:link,.preheaderContent a:visited{color:#448aff;font-weight:400;text-decoration:none}#templateHeader{background-color:#f5f5f5}.headerContent{color:#505050;font-family:Helvetica;font-size:20px;font-weight:400;line-height:30px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;text-align:left;vertical-align:middle}.headerContent a .yshortcuts,.headerContent a:link,.headerContent a:visited{color:#448aff;font-weight:400;text-decoration:none}#headerImage{height:auto;display:block!important;max-width:500px!important}#templateBody{background-color:#fff;border-radius:25px!important}.bodyContent{color:#505050;font-family:Helvetica;font-size:16px;line-height:24px;padding-top:50px;padding-right:50px;padding-bottom:50px;padding-left:50px;text-align:left}.bodyContent a .yshortcuts,.bodyContent a:link,.bodyContent a:visited{color:#448aff;font-weight:400;text-decoration:none}.bodyContent img{display:block;height:auto;max-width:400px}#templateFooter{background-color:#f5f5f5}.footerContent{color:grey;font-family:Helvetica;font-size:14px;line-height:21px;padding-top:50px;padding-right:50px;padding-bottom:50px;padding-left:50px;text-align:left}.footerContent a .yshortcuts,.footerContent a span,.footerContent a:link,.footerContent a:visited{color:#448aff;font-weight:400;text-decoration:none}@media only screen and (max-width:480px){a,blockquote,body,li,p,table,td{-webkit-text-size-adjust:none!important}body{width:100%!important;min-width:100%!important}#bodyCell{padding-top:10px!important;padding-right:10px!important;padding-left:10px!important;padding-bottom:10px!important}#templateContainer{max-width:500px!important;width:100%!important}h1{font-size:24px!important;line-height:27px!important}h2{font-size:20px!important;line-height:30px!important}h3{font-size:18px!important;line-height:27px!important}h4{font-size:16px!important;line-height:24px!important}#templatePreheader{display:none!important}#headerImage{height:auto!important;max-width:500px!important;width:100%!important;display:block!important}.headerContent{font-size:20px!important;line-height:30px!important}.bodyContent{font-size:18px!important;padding:20px!important;line-height:24px!important}.footerContent{font-size:14px!important;padding:20px!important;line-height:21px!important}.footerContent a{display:block!important}}
    </style>
</head>
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
<center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" width="100%">
        <tbody>
        <tr>
            <td align="center" id="bodyCell" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" id="templateContainer">
                    <tbody>
                    <tr>
                        <td align="center" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" id="templateHeader" width="100%">
                                <tbody>
                                <tr>
                                    <td class="headerContent" valign="top"><img alt="Parallax" id="headerImage" src="https://www.medicosconretiro.com.mx/medicos_retiro_mail.png" width="500" /></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" id="templateBody" width="100%">
                                <tbody>
                                <tr>
                                    <td class="bodyContent" valign="top">
                                        <!-- Datos para el usuaio-->
                                        {userData}

                                        <!-- Datos para el admin-->
                                        {dataAdmin}

                                        <p>
                                            <hr/>
                                            <strong>Atentamente el equipo de Médicos con Retiro</strong>
                                        </p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" id="templateFooter" width="100%">
                                <tbody>
                                <tr>
                                    <td class="footerContent" valign="top">
                                        <p><strong>Email enviado a</strong><br />
                                            {email2}</p>
                                        <p>Más información en <a href="https://www.medicosconretiro.com.mx/" target="_blank">www.medicosconretiro.com.mx/</a></p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</center>
</body>
</html>`;

export default emailTemplate;
