/* =========================================
   ESPERAR A QUE CARGUE LA PÁGINA
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       ELEMENTOS
    ===================================== */

    const modal = document.getElementById("modal");

    const cerrarModal =
        document.getElementById("cerrarModal");

    const modalTitulo =
        document.getElementById("modalTitulo");

    const modalEtiqueta =
        document.getElementById("modalEtiqueta");

    const modalTexto =
        document.getElementById("modalTexto");


    const visorImagen =
        document.getElementById("visorImagen");

    const imagenPrincipal =
        document.getElementById("imagenPrincipal");

    const imagenGrande =
        document.getElementById("imagenGrande");

    const cerrarImagen =
        document.getElementById("cerrarImagen");


    const modoLectura =
        document.getElementById("modoLectura");


    const reloj =
        document.getElementById("reloj");


    /* =====================================
       CONTENIDO DE LAS NOTICIAS
    ===================================== */

    const noticias = {

        principal: {

            etiqueta: "NOTICIA PRINCIPAL",

            titulo:
                "¡La independencia ha sido consumada!",

            texto: `
                <p>
                    <strong>Ciudad de México, 29 de septiembre de 1821.</strong>
                    Apenas han transcurrido dos días desde la entrada
                    del Ejército Trigarante a nuestra capital.
                </p>

                <p>
                    El pasado 27 de septiembre, las fuerzas del Ejército
                    de las Tres Garantías hicieron su entrada triunfal
                    en la Ciudad de México.
                </p>

                <p>
                    La llegada de las tropas encabezadas por
                    Agustín de Iturbide fue recibida como uno de los
                    acontecimientos más importantes de la historia
                    reciente de nuestra nación.
                </p>

                <p>
                    Las calles de la capital fueron ocupadas por
                    ciudadanos que acudieron a presenciar el desfile
                    de las tropas.
                </p>

                <p>
                    Después de años de conflicto, estos acontecimientos
                    representan la consumación de la independencia
                    mexicana y el comienzo de una nueva etapa política.
                </p>

                <p>
                    Nuestra nación enfrenta ahora el desafío de construir
                    un nuevo gobierno y establecer las instituciones
                    que dirigirán su futuro.
                </p>
            `
        },


        acta: {

            etiqueta: "DOCUMENTOS",

            titulo:
                "Se firma el Acta de Independencia",

            texto: `
                <p>
                    <strong>28 de septiembre de 1821.</strong>
                    Un día después de la entrada del Ejército Trigarante
                    a la capital, fue firmada el Acta de Independencia
                    del Imperio Mexicano.
                </p>

                <p>
                    El documento declara formalmente la independencia
                    de la nación mexicana y establece una nueva etapa
                    para el país.
                </p>

                <p>
                    La firma del acta constituye uno de los acontecimientos
                    fundamentales de la consumación de la independencia.
                </p>
            `
        },


        editorial: {

            etiqueta: "EDITORIAL",

            titulo:
                "Un nuevo comienzo",

            texto: `
                <p>
                    Los acontecimientos de los últimos días marcarán
                    para siempre la historia de nuestra nación.
                </p>

                <p>
                    La entrada del Ejército Trigarante a la capital
                    y la posterior firma del Acta de Independencia
                    anuncian el comienzo de una nueva época.
                </p>

                <p>
                    El futuro de México dependerá ahora de la organización
                    de sus instituciones y de las decisiones que tomen
                    quienes tengan la responsabilidad de dirigir la nueva
                    nación.
                </p>

                <p>
                    <em>
                        — Redacción de El Independiente
                    </em>
                </p>
            `
        },


        garantias: {

            etiqueta: "BREVE",

            titulo:
                "Las Tres Garantías",

            texto: `
                <p>
                    El Ejército Trigarante se encontraba identificado
                    con tres principios fundamentales establecidos
                    en el Plan de Iguala.
                </p>

                <p>
                    Estos principios fueron:
                </p>

                <p>
                    <strong>Religión · Independencia · Unión</strong>
                </p>

                <p>
                    Estas tres garantías dieron nombre al ejército
                    que entró triunfalmente en la Ciudad de México
                    el 27 de septiembre de 1821.
                </p>
            `
        }

    };


    /* =====================================
       ABRIR NOTICIAS
    ===================================== */

    const botonesNoticias =
        document.querySelectorAll(".leer-mas");


    botonesNoticias.forEach(boton => {

        boton.addEventListener("click", () => {

            const tipo =
                boton.getAttribute("data-noticia");

            const noticia =
                noticias[tipo];


            if (!noticia) {
                return;
            }


            modalEtiqueta.textContent =
                noticia.etiqueta;


            modalTitulo.textContent =
                noticia.titulo;


            modalTexto.innerHTML =
                noticia.texto;


            modal.classList.add("activo");

            document.body.style.overflow =
                "hidden";

        });

    });


    /* =====================================
       CERRAR MODAL
    ===================================== */

    function cerrarVentana() {

        modal.classList.remove("activo");

        document.body.style.overflow =
            "";

    }


    cerrarModal.addEventListener(
        "click",
        cerrarVentana
    );


    modal.addEventListener("click", (evento) => {

        if (evento.target === modal) {

            cerrarVentana();

        }

    });


    /* =====================================
       TECLA ESC
    ===================================== */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            cerrarVentana();

            cerrarVisor();

        }

    });


    /* =====================================
       VISOR DE IMAGEN
    ===================================== */

    imagenPrincipal.addEventListener(
        "click",
        () => {

            imagenGrande.src =
                imagenPrincipal.src;

            visorImagen.classList.add("activo");

            document.body.style.overflow =
                "hidden";

        }
    );


    function cerrarVisor() {

        visorImagen.classList.remove(
            "activo"
        );

        document.body.style.overflow =
            "";

    }


    cerrarImagen.addEventListener(
        "click",
        cerrarVisor
    );


    visorImagen.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target === visorImagen
            ) {

                cerrarVisor();

            }

        }
    );


    /* =====================================
       MODO LECTURA
    ===================================== */

    modoLectura.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "modo-lectura"
            );


            if (
                document.body.classList.contains(
                    "modo-lectura"
                )
            ) {

                modoLectura.textContent =
                    "✕ Salir del modo lectura";

            } else {

                modoLectura.textContent =
                    "☰ Modo lectura";

            }

        }
    );


    /* =====================================
       RELOJ
    ===================================== */

    function actualizarReloj() {

        const ahora = new Date();

        let horas =
            String(
                ahora.getHours()
            ).padStart(2, "0");


        let minutos =
            String(
                ahora.getMinutes()
            ).padStart(2, "0");


        let segundos =
            String(
                ahora.getSeconds()
            ).padStart(2, "0");


        reloj.textContent =
            `${horas}:${minutos}:${segundos}`;

    }


    actualizarReloj();


    setInterval(
        actualizarReloj,
        1000
    );


});