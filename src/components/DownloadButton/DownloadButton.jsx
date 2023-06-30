
const DownloadButton = () => {
    const downloadTemplate = () => {
        const link = document.createElement('a');
        link.href = '/public/templateExcel/data.xlsx';
        link.download = 'template.xlsx';
        link.click();
    };

    return (
        <button onClick={downloadTemplate}>
            Download Template
        </button>
    );
};

export default DownloadButton;
