import { series } from './data';
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('series-list');
    const detailDiv = document.getElementById('series-detail');
    series.forEach(serie => {
        const row = tbody.insertRow();
        row.innerHTML = `<td>${serie.id}</td><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>`;
        row.addEventListener('click', () => {
            detailDiv.innerHTML = `
                <div class="card">
                    <div class="card-header">${serie.name}</div>
                    <div class="card-body">
                        <p class="card-text">${serie.description}</p>
                        <a href="${serie.url}" class="btn btn-primary" target="_blank">More Info</a>
                    </div>
                </div>
            `;
        });
    });
});
