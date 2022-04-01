import Cert from "./Cert";

const Certifications = ({ certs }) => {
  return (
    <>
      {certs.map((value) => {
        if (value.type === "Specialization")
          return (
            <div className="flex flex-col items-center" key={value.title}>
              <Cert
                type={value.type}
                image={value.image}
                w={value.w}
                h={value.h}
                link={value.link}
                title={value.title}
              />
              <div
                className="flex flex-wrap justify-center"
                key={value.title + "2"}
              >
                {value.certs.map((cert) => (
                  <Cert
                    key={cert.title}
                    type={cert.type}
                    image={cert.image}
                    w={cert.w}
                    h={cert.h}
                    link={cert.link}
                    title={cert.title}
                  />
                ))}
              </div>
            </div>
          );
        return (
          <Cert
            key={value.title}
            type={value.type}
            image={value.image}
            w={value.w}
            h={value.h}
            link={value.link}
            title={value.title}
          />
        );
      })}
    </>
  );
};

export default Certifications;
