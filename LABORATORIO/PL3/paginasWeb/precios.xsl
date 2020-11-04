<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>    
        <title> Rebajas - ElReyDelPc </title>    
        <meta charset="UTF-8">
        <meta name="title" content="Rebajas">
        <meta name="description" content="Rebajas">    
        </head> 
    <header>
        <h1>REBAJAS</h1>
        <nav>
        <ul>
            <a href="./index.html"> INICIO // </a>
            <a href="./perifericos.html"> PERIFERICOS // </a>
            <a href="./componentes.html"> COMPONENTES // </a>
            <a href="./software.html"> SOFTWARE // </a>
            <a href="./monitores.html"> MONITORES </a>
        </ul>
        </nav>
    </header>
    <body>
        <h2>Seleccion de productos rebajados</h2>
        <table border="1">
            <tr bgcolor="#808080">
                <th>Seccion</th>
                <th>Nombre del producto</th>
                <th>Precio incial</th>
                <th>Precio final</th>
            </tr>
            <xsl:for-each select="productos/producto">
            <tr>
                <td><xsl:value-of select="tipo"/></td>
                <td><xsl:value-of select="nombre"/></td>
                <td><xsl:value-of select="precio_antes"/></td>
                <td><xsl:value-of select="precio_despues"/></td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
    <footer>
        <h5> PIDENOS TU PC A MEDIDA </h5>
        <h6><a href="./formularioPcAMedida.html"> Pedir presupuesto <br> </a></h6>
        <h5> CONTACTA CON NOSOTROS </h5>
        <h6><a href="./contacUs.html"> Contáctanos <br> </a></h6>
        <h6><a href="./formularioQuejas.html"> Quejas y devoluciones <br> </a></h6>
        <h6><a href="./formularioOpina.html"> Opina <br> </a></h6>
    </footer>
  </html>
</xsl:template>

</xsl:stylesheet>