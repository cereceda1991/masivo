import { useState } from 'react';
import { read, utils } from 'xlsx';

const ExcelReader = ({ onJSONLoaded }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleLoadJSON = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = utils.sheet_to_json(worksheet, { header: 1, range: 1, raw: false });

                const formattedData = jsonData.map((row) => {
                    return {
                        DNI: row[0],
                        company: row[1],
                        name: row[2],
                        career_type: row[3],
                        selected_number: row[4],
                        ceo_name: row[5],
                        cto_name: row[6]
                    };
                });

                console.log(formattedData); // Agregar console.log para verificar los datos
                onJSONLoaded(formattedData);

            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx" onChange={handleFileChange} />
            <button onClick={handleLoadJSON}>Load Excel</button>
        </div>
    );
};

export default ExcelReader;
