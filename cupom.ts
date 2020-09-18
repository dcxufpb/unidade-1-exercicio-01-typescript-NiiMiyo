let nomeLoja = "Arcos Dourados Com. de Alimentos LTDA";
let logradouro = "Av. Projetada Leste";
let numero = 500;
let complem = "EUC F32/33/34";
let bairro = "Br. Sta Genebra";
let municipio = "Campinas";
let estado = "SP";
let cep = "13080-395";
let tel = "(19) 3756-7408";
let obs = "Loja 1317 (PDP)";
let cnpj = "42.591.651/0797-34";
let inscEstu = "244.898.500.113";

function imprime_dados_loja(): string {
	// Implemente aqui
	let output = nomeLoja + "\n";
	output += `${logradouro}, ${numero} ${complem}\n`;
	output += `${bairro} - ${municipio} - ${estado}\n`;
	output += `CEP:${cep} Tel ${tel}\n`;
	output += obs + "\n";
	output += `CNPJ: ${cnpj}\n`;
	output += `IE: ${inscEstu}`;

	return output;
}

module.exports = imprime_dados_loja;
