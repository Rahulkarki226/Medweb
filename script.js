document.getElementById('diseaseSearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var disease = document.getElementById('diseaseSearchInput').value;
    var diseaseUrls = {
        'Diabetes': 'https://diabetesprediction-rk.streamlit.app/',
        'Pneumonia': 'https://pnemoniadetector-rk.streamlit.app/',
        'Brain tumor': 'https://braintumorpred-rk.streamlit.app/',
        'Heart Disease': 'https://heartdisease-rk.streamlit.app/',
        'Medicine Recommend': 'https://medreco-rk.streamlit.app/'
    };
    var diseaseUrl = diseaseUrls[disease];
    if (diseaseUrl) {
        window.location.href = diseaseUrl; 
    } else {
        alert('Disease not found!');
    }
});
