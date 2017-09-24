var app = angular.module('SelectApp', []);

app.controller('SelectController', function($scope){
	$(function(){
		var operacao = "A"; //"A"=Adição; "E"=Edição
		var indice_selecionado = -1; //Índice do item selecionado na lista
		var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
		tbClientes = JSON.parse(tbClientes); // Converte string para objeto
		if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbClientes = [];
	});

	$scope.listaProdutos = [
		{codigo: '1', nome: 'Guarana', desc: 'Refrigerante 300 ml', valor: '4,50'},
		{codigo: '2', nome: 'Coca-Cola', desc: 'Refrigerante 300 ml', valor: '4,50'},
		{codigo: '3', nome: 'Heineken', desc: 'Cerveja 300 ml', valor: '5,00'},
		{codigo: '4', nome: 'Budweiser', desc: 'Cerveja 300 ml', valor: '5,00'}
	];

	$scope.remove = function(nome){
		var resposta  = confirm("Confirma a exclusão do produto " + nome);
		if (resposta == true){
			var posicao = retornaPosicao(nome);
			$scope.listaProdutos.splice(posicao, 1);
			alert("Remoção com sucesso");
		}
	}
	$scope.insere = function(){
		// verifica se já existe
		var posicao = retornaPosicao($scope.codigo);
		if (posicao == -1){ // insere novo
			$scope.listaProdutos.push(
				{
					codigo: $scope.codigo,
					nome: $scope.nome,
					desc: $scope.desc,
					valor: $scope.valor
				}
			);
			alert("Item inserido com sucesso");
		}
		else {
			// já existe - atualiza a lista
			$scope.listaProdutos[posicao].nome = $scope.nome;
			$scope.listaProdutos[posicao].desc = $scope.desc;
			$scope.listaProdutos[posicao].valor = $scope.valor;
			alert("Item atualizado com sucesso");
		}
	}
	$scope.alert = function(){
		alert("Botão sem função");
	}

	$scope.atualiza = function(codigo){
		// recupera a posição do produto
		var posicao = retornaPosicao(codigo);
		// passa o produto para o formulário
		$scope.codigo = parseInt($scope.listaProdutos[posicao].codigo);
		$scope.nome = $scope.listaProdutos[posicao].nome;
		$scope.desc = parseInt($scope.listaProdutos[posicao].desc);
		$scope.valor = parseInt($scope.listaProdutos[posicao].valor);
	}

	function retornaPosicao(codigo){
			var i;
			for(i=0; i<$scope.listaProdutos.length;i++){
				if ($scope.listaProdutos[i].codigo == codigo){
					return i; // retorna posição
				}
			}
			return -1;
	}

});
