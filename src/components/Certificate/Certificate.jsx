
import "./Certificate.css";

const Certificate = ({ certificates, backgroundImage }) => {
  const handleChange = (e, index) => {
    const { value, name } = e.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = { ...updatedCertificates[index], [name]: value };
  };

  console.log(certificates);

  return (
    <section className="container_certificate">
      <form id="content">
        {certificates?.map((certificate, index) => (
          <div className="content_certificate" style={{ backgroundImage: `url(${backgroundImage})` }} key={index}>
            <div>
              <label className="content_title">Certificado de Experiencia</label>
            </div>
            <input
              type="text"
              placeholder="No Country"
              name="company"
              value={certificate.company}
              onChange={(e) => handleChange(e, index)}
              className="content__input-company"
            />
            <label className="content__label">Certifica a</label>
            <input
              type="text"
              placeholder="JUAN ERNESTO PEREZ MOLLA"
              name="name"
              value={certificate.name}
              onChange={(e) => handleChange(e, index)}
              className="content__input-name"
            />
            <section className="info__section">
              <p className="content__paragraph">
                <label>Por haber participado exitosamente como</label>
                <input
                  type="text"
                  placeholder="Backend Developer"
                  name="career_type"
                  className="content__carreer"
                  value={certificate.career_type}
                  onChange={(e) => handleChange(e, index)}
                />
                <label>en la instancia de emulación del Seleccionado</label>
                <input
                  type="text"
                  placeholder="9"
                  className="content__instance"
                  name="selected_number"
                  value={certificate.selected_number}
                  onChange={(e) => handleChange(e, index)}
                />
                <label>llevando a cabo su proyecto en tiempo y forma.</label>
              </p>
            </section>

            <div className="director__presidente">
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Leandro Buzeta Bernasconi"
                    name="ceo_name"
                    value={certificate.ceo_name}
                    onChange={(e) => handleChange(e, index)}
                    className="content__ceo"
                  />
                </label>
                <label className="content__label"><b>Co-Founder & CEO</b></label>
              </div>
              <div>
                <label className="content__label">
                  <input
                    type="text"
                    placeholder="Julio Ignacio Otero"
                    name="cto_name"
                    value={certificate.cto_name}
                    onChange={(e) => handleChange(e, index)}
                    className="content__cto"
                  />
                </label>
                <label className="content__label"><b>Co-Founder & CTO</b></label>
              </div>
            </div>

          </div>
        ))}
      </form>
    </section>
  );
};

export default Certificate;
