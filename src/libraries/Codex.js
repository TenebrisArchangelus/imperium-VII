import { ConsultInValiditas } from '../models/Consults.js';

export async function NameValidum(name) {
  const NameValidus = /^\s*\S.*$/i;
  return NameValidus.test(name);
};

export async function EmailValidum(email) {
  const EmailValidus = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return EmailValidus.test(email);
};

export async function CpfValidum(cpf) {
  const CpfValidus = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
  return CpfValidus.test(cpf);
};

export async function TelValidum(tel) {
  const TelValidus = /^\+\d{2} \(\d{2}\) \d{4,5}\-\d{4}$/;
  return TelValidus.test(tel);
};

export async function PasswordValidum(password) {
  const PasswordValidus = /^(?=.*\d)(?=.*[a-zß])(?=.*[A-Z])(?=.*[@#$%^&+=*])[a-zA-Z\dß@#$%^&+=*]{8,}$/;
  return PasswordValidus.test(password);
};

export async function UserValidum(name, email, apelido, cpf) {
  const resultsName = await ConsultInValiditas('name', name);
  const resultsEmail = await ConsultInValiditas('email', email);
  const resultsApelido = await ConsultInValiditas('apelido', apelido);
  const resultsCpf = await ConsultInValiditas('cpf', cpf);

  const user = {
    name: resultsName[0][0] ? resultsName[0][0].name : null,
    email: resultsEmail[0][0] ? resultsEmail[0][0].email : null,
    cpf: resultsCpf[0][0] ? resultsCpf[0][0].cpf : null,

    cpfII: resultsCpf[0].length > 0,
    apelido: resultsApelido[0][0] ? resultsApelido[0][0].apelido : null,
    apelidoII: resultsApelido[0].length > 0
  };

  return user;

};