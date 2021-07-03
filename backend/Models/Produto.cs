using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public String Nome { get; set; }
        public Decimal Preco { get; set; }
        public int Estoque { get; set; }
    }
}
