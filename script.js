document.addEventListener('DOMContentLoaded', () => {
    // Datos de documentos
    const documentos = {
        parcial1: [
            { nombre: "Actividad 1 - Mapa conceptual de los tipos de Nubes", tipo: "PDF", enlace: "#", icono: "fa-file-pdf", meta: "PDF • 1.2 MB" },
            { nombre: "Actividad 2 - Tabla comparativa de tipos de almacenamiento en la nube", tipo: "PDF", enlace: "https://drive.google.com/file/d/1rAoml9ZBJVThb-ofX9oU2w2Pc8CLrpte/view", icono: "fa-file-pdf", meta: "PDF • 850 KB" },
            { nombre: "Actividad 3 - Valores éticos digitales", tipo: "PDF", enlace: "#", icono: "fa-file-pdf", meta: "PDF • 1.5 MB" },
            { nombre: "Actividad 4 - Herramientas de almacenamiento en la nube", tipo: "PDF", enlace: "https://drive.google.com/file/d/1t7xVTERM3lyGmClol6ku5hTwvqJBUt7V/view", icono: "fa-file-pdf", meta: "PDF • 2.1 MB" },
            { nombre: "Actividad 5 - Tipo de servicio de nubes", tipo: "PDF", enlace: "https://drive.google.com/file/d/1ya8WBbrt0AwBTUkN1VvXLabyDsCL54Di/view", icono: "fa-file-pdf", meta: "PDF • 1.8 MB" },
            { nombre: "Actividad 6 - Valores Eticos", tipo: "PDF", enlace: "https://docs.google.com/document/d/1HeJKIOsZxSGjUBxxg-qhHUVpHa0fLcqMy8iiPDAYJGU/edit", icono: "fa-file-pdf", meta: "PDF • 1.0 MB" },
            { nombre: "Actividad 7 - Google Sites y otras plataformas", tipo: "PDF", enlace: "https://drive.google.com/file/d/1zeIku7iMuH3IEUfXHFpiGCBuGEDHIL_C/view", icono: "fa-file-pdf", meta: "PDF • 3.2 MB" }
        ],
        parcial2: [
            { nombre: "Actividad 1 - Introducción - Cuestionario", tipo: "PDF", enlace: "https://drive.google.com/file/d/1xzIdRvLWHJsIJcbFhFeeR-FGOwCC5kJF/view", icono: "fa-file-pdf", meta: "PDF • 750 KB" },
            { nombre: "Actividad 2 - Tabla comparativa de tipos de archivos y formatos", tipo: "PDF", enlace: "https://drive.google.com/file/d/1vAAJhe6WFDfeeiPhL2Iikws8iG47afpb/view", icono: "fa-file-pdf", meta: "PDF • 1.1 MB" },
            { nombre: "Actividad 3 - Mapa visual de los archivos más utilizados", tipo: "PDF", enlace: "https://drive.google.com/file/d/1q9uHnfGJyFrfCmwPFrb6iopZbJi6Ux0n/view", icono: "fa-file-pdf", meta: "PDF • 1.5 MB" },
            { nombre: "Actividad 4 - Herramientas de conversión", tipo: "PDF", enlace: "https://drive.google.com/file/d/13brWgaXGw83CR0svCQe-9OK32h2Y0Lfq/view", icono: "fa-file-pdf", meta: "PDF • 2.0 MB" },
            { nombre: "Actividad 5 - Tabla descriptiva de herramientas de conversión", tipo: "PDF", enlace: "https://drive.google.com/file/d/1KvTzOTURZ-OuyqH4NTF9qcwWYMuGaZTU/view", icono: "fa-file-pdf", meta: "PDF • 1.3 MB" },
            { nombre: "Actividad 6 - Video tutorial sobre Tuberculosis", tipo: "MP4", enlace: "https://drive.google.com/file/d/1AHB506gpl6vv7S4jn1duy9AN0Ns6SVp6/view", icono: "fa-file-video", meta: "MP4 • 25 MB", accion: "Ver" },
            { nombre: "Actividad 7 - Creación de sitio web", tipo: "HTML", enlace: "#", icono: "fa-file-code", meta: "Sitio web", accion: "Visitar" },
            { nombre: "Actividad 8 - Segunda revisión del sitio web", tipo: "Presencial", enlace: "#", icono: "fa-chalkboard-teacher", meta: "Evaluación en clase", mostrarBoton: false },
            { nombre: "Actividad 9 - Exposición por equipos del sitio", tipo: "Presencial", enlace: "#", icono: "fa-users", meta: "Presentación en aula", mostrarBoton: false }
        ]
    };

    // Función para cargar documentos en un contenedor específico
    function cargarDocumentos(parcial, idContenedor) {
        const contenedor = document.getElementById(idContenedor);
        contenedor.innerHTML = '';

        if (documentos[parcial]) {
            documentos[parcial].forEach(doc => {
                const icono = doc.icono || 'fa-file-pdf';
                const textoBoton = doc.accion || (doc.tipo === 'MP4' ? 'Ver' : 'Descargar');

                const documentoHTML = `
                <div class="documento-item">
                    <div class="documento-info">
                        <i class="fas ${icono} documento-icono"></i>
                        <div>
                            <span class="documento-nombre">${doc.nombre}</span>
                            <span class="documento-meta">${doc.meta || doc.tipo}</span>
                        </div>
                    </div>
                    ${doc.enlace && doc.mostrarBoton !== false ? `
                    <div class="documento-acciones">
                        <a href="${doc.enlace}" target="_blank" class="btn-descargar">
                            <i class="fas ${doc.tipo === 'MP4' ? 'fa-play' : 'fa-download'}"></i>
                            ${textoBoton}
                        </a>
                    </div>
                    ` : ''}
                </div>
                `;
                contenedor.insertAdjacentHTML('beforeend', documentoHTML);
            });
        }
    }

    // Cargar documentos para el parcial 1 y 2 al cargar la página
    cargarDocumentos('parcial1', 'documentos-parcial1');
    cargarDocumentos('parcial2', 'documentos-parcial2');

    // Lógica para la barra de búsqueda
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const documentosSections = document.querySelectorAll('.documentos-section');

    function buscarContenidoDocumentos() {
        const searchTerm = searchInput.value.toLowerCase();
        let resultadosEncontrados = false;

        documentosSections.forEach(section => {
            if (section.style.display === 'block') {
                const elementsToSearch = section.querySelectorAll('.documento-nombre');
                for (const element of elementsToSearch) {
                    const lowerCaseText = element.textContent.toLowerCase();
                    if (lowerCaseText.includes(searchTerm)) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        element.classList.add('highlight');
                        setTimeout(() => {
                            element.classList.remove('highlight');
                        }, 1500);
                        resultadosEncontrados = true;
                        return; // Detener la búsqueda en la primera coincidencia
                    }
                }
            }
        });

        if (!resultadosEncontrados && searchTerm) {
            alert('No se encontraron documentos con ese nombre en la sección actual.');
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', buscarContenidoDocumentos);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                buscarContenidoDocumentos();
            }
        });
    }
});