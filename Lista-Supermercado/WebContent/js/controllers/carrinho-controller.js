var item = function(nome, preco) {

	this.nome = nome;
	this.quantidade = 1;
	this.preco = preco;

	this.adicionarQuantidade = function() {
		this.quantidade++;
	};

	this.removerQuantidade = function() {
		this.quantidade--;
	};

};

angular.module('carrinhodecompras').controller('CarrinhoController',
		function($scope) {

			$scope.itens = [];

			$scope.adicionar = function(nome, preco) {

				var itemAdicionado = new item(nome, preco);

				var itemEncontrado = false;

				for (i = 0; i < $scope.itens.length; i++) {
					var itemDaLista = $scope.itens[i];

					if (itemDaLista.nome == itemAdicionado.nome) {
						itemDaLista.adicionarQuantidade();
						itemEncontrado = true;
						return;
					}
				}

				$scope.itens.push(itemAdicionado);

			};

			$scope.diminuirQuantidade = function(item, removerTodos) {

				const
				index = $scope.itens.indexOf(item);

				$scope.itens[index].removerQuantidade();

				if ($scope.itens[index].quantidade == 0 || removerTodos == -1) {
					$scope.itens.splice(index, 1);
				}
			};

		});
