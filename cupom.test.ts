const cupom_imprime_dados_loja = require("./cupom");

test("Retorno de 'imprime_dados_loja'", () => {
	expect(cupom_imprime_dados_loja()).toBe(
		"Arcos Dourados Com. de Alimentos LTDA\n" +
			"Av. Projetada Leste, 500 EUC F32/33/34\n" +
			"Br. Sta Genebra - Campinas - SP\n" +
			"CEP:13080-395 Tel (19) 3756-7408\n" +
			"Loja 1317 (PDP)\n" +
			"CNPJ: 42.591.651/0797-34\n" +
			"IE: 244.898.500.113"
	);
});
