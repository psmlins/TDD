var chai = require("chai");
var expect = chai.expect;
var media = require("../routines/notas");

describe("Média", () => {
    //Média de N1 e N2
    describe("Teste com notas de unidade", () => {
        it("6+6/2 = 6", () => {
            expect(media.calcMedia(6, 6, null)).to.equal(6);
        }) 
        it("6+7/2 = 6,5", () => {
            expect(media.calcMedia(6, 7, null)).to.equal(6.5);
        }) 
    })

    //Média de N1 e N2 com segunda chamada, sendo na N1 ou na N2
    describe("Teste com notas de unidade + segunda chamada", () => {
        it("6+faltou+6(segunda chamada) = 6", () => {
            expect(media.calcMedia(6, null, 6)).to.equal(6);
        }) 
        it("faltou+6+7(segunda chamada) = 6,5", () => {
            expect(media.calcMedia(null, 6, 7)).to.equal(6.5);
        }) 
        it("faltou+faltou+6(segunda chamada) = 3", () => {
            expect(media.calcMedia(null, null, 6)).to.equal(3);
        })
    })

    //Média de N1 e N2 com segunda chamada, sendo na N1 ou na N2
    describe("Foi pra final", () => {
        it("3+3/2 = 3 final: 9 = 6", () => {
            expect(media.calcMedia(3, 3, null, 9)).to.equal(6);
        })
        it("2+faltou+4(segunda chamada) = 3 final:10 = 6.5", () => {
            expect(media.calcMedia(2, null, 4, 10)).to.equal(6.5);
        }) 
        it("faltou+1+5(segunda chamada) = 3 final:8 = 5.5", () => {
            expect(media.calcMedia(null, 1, 5, 8)).to.equal(5.5);
        }) 
        it("faltou+faltou+6(segunda chamada) = 3 final:7 = 5", () => {
            expect(media.calcMedia(null, null, 6, 7)).to.equal(5);
        })
        it("faltou+faltou+6(segunda chamada) = 3 final:null = 3", () => {
            expect(media.calcMedia(null, null, 6, null)).to.equal(3);
        })
    })
})