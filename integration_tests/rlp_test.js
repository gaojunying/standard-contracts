const assert = require('assert');
const path = require('path');
const util = require('./utils');
const async = require('async');

var rlpreadertest;

const bytecode = "6060604052610dfc806100126000396000f3606060405236156100985760e060020a600035046304455e95811461009a5780630902c6d7146100f2578063564ad1421461014a5780637b053195146101ec5780637b8167191461024457806395e77a051461029c578063a49886ce1461037e578063b66e68f2146103d6578063c91813ca14610445578063d572056e1461049d578063e95bd5f214610518578063f8f1f1511461057d575b005b6105d56004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050600061070261070a83610342565b6105d56004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050600061077761077e83610342565b6105e76004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437505060408051602081810183526000808352835160a0810185526060810182815260808201839052815280830182905284518086019095528185529184018190529799509735978796508695509093508492509082906107ab6107388b610342565b6105d56004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050505050505060006107776108ad83610342565b6105d56004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050600061077761078383610342565b6105e76004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050604080516020818101835260008083528351808501909452808452908301819052918291829182906108c28760016040805180820182526000808252602082810182905283518085019094528184528301819052909190610b23855b60408051808201909152600080825260208201819052825190818114156109455760408051808201909152818152602081018290529250610962565b6105d56004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050505050505060006107776108e083610342565b61064d6004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050604080518082019091526000808252602082018190529081908190816108eb86610342565b6105d56004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050600061077761090b83610342565b6105e76004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050604080516020818101835260008083528351808501909452808452908301819052918291829182906108c287610342565b61066b6004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050505050505060408051602081019091526000815261070261091c83610342565b6106d96004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050600061077761093683610342565b60408051918252519081900360200190f35b60405180868152602001858152602001848152602001806020018381526020018281038252848181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f150905001965050505050505060405180910390f35b60408051938452602084019290925282820152519081900360600190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b90505b919050565b610761565b94508450846040518059106107215750595b818152602091820281019091016040529550610a678a5b6040805160a08101909152600060608201818152608083018290528252602082018190526109d6835b600060008260200151600014156109695761097c565b9050610705565b61078a565b6000610777825b600060006000610982845b60006000826020015160001415610c8e5761097c565b92505b610804836107d8565b61082a835b6040805180820190915260008082526020820181905280610a11845b60408051808201909152600080825260209182015281518082015181519284015192019091109061097c565b801561080f57508882105b156107b75761081d836107bc565b50600191909101906107ae565b905061088a815b60408051602081810183526000808352835160a08101855260608101828152608082018390528152808301829052845180860190955281855284830182905285519286015192949293919283918291826108a08a610761565b939e929d50909b50995090975095505050505050565b96508615610a735761070f8a5b600060006000600060006000610ad387610761565b90506108cd81610831565b939b929a50909850965090945092505050565b60006107778261078a565b602081015190518051909891975060001a60f860020a0295509350505050565b6000600060006000610b9b85610795565b6040805160208101909152600080825280610be484610795565b600060006000610c5084610795565b506040805180820190915260208481018083529082018390529092505b5050919050565b8260000151905060c0815160001a101591505b50919050565b151561098d57610002565b6109a5845b60006000600060006000610c9e86610795565b9150915060208111806109b85750806000145b156109c257610002565b806020036101000a82510492505050919050565b15156109e157610002565b6109fe835b600060006000836020015160001415610d0f57610962565b8351938352929092016020820152919050565b15610a265783602001519150610a2b82610a4e565b610002565b8284526020848101829052818401908601529050610962565b80610b4283600001515b8051600090811a6080811015610d75576001915061097c565b92505b610a80836107d8565b5050505091939590929450565b8015610a8b57508484105b15610a7357610a99836107bc565b915081519050808685815181101561000257505050602084810287010181905260019390930192610a6a565b8095505b5050505050919050565b1515610ae25760009550610ac9565b8651805160001a95509350610af6876109e6565b840192506001876020015185010391505b818311610ac557610b1783610a4e565b90920191600101610b07565b91508315610b855750835180610b38836109e6565b10610a4457610002565b1115610b4d57610002565b610b7a828051805160009181831a9160011a90608183148015610b705750608082105b15610b9357610002565b1515610b8557610002565b509392505050565b60015b93505b505050919050565b1515610ba657610002565b610baf85610992565b909350915060018214610bc157610002565b50815160001a6001811115610bd557610002565b80600114610b8d576000610b90565b1515610bef57610002565b610bf884610992565b9150915080604051805910610c0a5750595b81815260209182028101909101604052925061096282848360006020601f83010484602085015b828414610de95760208402808301518183015260018501945050610c31565b1515610c5b57610002565b610c6484610992565b909250905060148114610c7657610002565b50516c01000000000000000000000000900492915050565b5050515160c060009190911a1090565b1515610ca957610002565b8551805160001a935091506080831015610ccb57909350600192508390610d07565b60b8831015610cea576020860151600183019550600019019350610d07565b50602085015181830160b51901945082900360b601925060b61982015b505050915091565b50508151805160001a906080821015610d2b5760009250610962565b60b8821080610d46575060c08210158015610d46575060f882105b15610d545760019250610962565b60c0821015610d695760b51982019250610962565b60f51982019250610962565b60b8811015610d8a57607e198101915061097c565b60c0811015610db357600183015160b76020839003016101000a9004810160b51901915061097c565b60f7811015610dc85760be198101915061097c565b6001929092015160f76020849003016101000a900490910160f51901919050565b600086516020018701525050505050505056";
const ABI = [{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testIsList","outputs":[{"name":"ret","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testToUint","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"},{"name":"index","type":"uint256"}],"name":"testSubItem","outputs":[{"name":"memPtr","type":"uint256"},{"name":"len","type":"uint256"},{"name":"isList","type":"bool"},{"name":"list","type":"uint256[]"},{"name":"listLen","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testItems","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testToInt","outputs":[{"name":"","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testItemStrict","outputs":[{"name":"memPtr","type":"uint256"},{"name":"len","type":"uint256"},{"name":"isList","type":"bool"},{"name":"list","type":"uint256[]"},{"name":"listLen","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testToBytes32","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testFirst","outputs":[{"name":"memPtr","type":"uint256"},{"name":"len","type":"uint256"},{"name":"first","type":"bytes1"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testToBool","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testItem","outputs":[{"name":"memPtr","type":"uint256"},{"name":"len","type":"uint256"},{"name":"isList","type":"bool"},{"name":"list","type":"uint256[]"},{"name":"listLen","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testToData","outputs":[{"name":"bts","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[{"name":"rlp","type":"bytes"}],"name":"testToAddress","outputs":[{"name":"","type":"address"}],"type":"function"}];

describe('Codec', function () {

    describe('RLPReader', function () {

        before(function (done) {
            this.timeout(300000); // 5 minutes.
            util.initWeb3(function (err) {
                if (err)
                    return done(err);
                util.deploy(ABI, bytecode, function (err, contract) {
                    if (err)
                        return done(err);
                    rlpreadertest = contract;
                    done();
                });
            });
        });

        describe('#toRLPItem(bytes)', function () {

            it('should create an RLP item from encoded strings', function (done) {
                async.forEachOfSeries(testStrings, function (testData, idx, cb) {
                        rlpreadertest.testItem(testData.input, function (err, result) {
                            assert.ifError(err);
                            var eRes = testData.result;
                            var len = result[1].toNumber();
                            assert.equal(len, eRes.length);
                            var isList = result[2];
                            assert(!isList);
                            cb();
                        })
                    }, function () {
                        done();
                    }
                );
            });

            it('should create an RLP item from encoded lists', function (done) {
                async.forEachOfSeries(testLists, function (testData, idx, cb) {
                        rlpreadertest.testItem(testData.input, function (err, result) {
                            assert.ifError(err);
                            var eRes = testData.result;
                            var memPtr = result[0].toNumber();
                            var len = result[1].toNumber();
                            assert.equal(len, eRes.length);
                            var isList = result[2];
                            assert(isList);
                            var list = result[3];
                            var listLen = result[4].toNumber();
                            if(listLen > 0) {
                                for(var i = 0; i < listLen; i++) {
                                    var le = list[i].toNumber();
                                    assert.equal(le - memPtr, eRes.list[i]);
                                }
                            }
                            cb();
                        })
                    }, function () {
                        done();
                    }
                );
            });

        });

        describe('#isList(Slice)', function () {

            it('should detect that RLP encoded strings are not lists', function (done) {
                async.forEachOfSeries(testStrings, function (testData, idx, cb) {
                        rlpreadertest.testIsList(testData.input, function (err, result) {
                            assert.ifError(err);
                            assert(!result);
                            cb();
                        })
                    }, function () {
                        done();
                    }
                );
            });

            it('should detect that RLP encoded lists are lists', function (done) {
                async.forEachOfSeries(testLists, function (testData, idx, cb) {
                        rlpreadertest.testIsList(testData.input, function (err, result) {
                            assert.ifError(err);
                            assert(result);
                            cb();
                        })
                    }, function () {
                        done();
                    }
                );
            });

        });

        describe('#items(Slice)', function () {

            it('should find the correct number of elements in an RLP encoded list', function (done) {
                async.forEachOfSeries(testLists, function (testData, idx, cb) {
                        rlpreadertest.testItems(testData.input, function (err, result) {
                            assert.ifError(err);
                            var listLen = result.toNumber();
                            assert.equal(listLen, testData.result.list.length);
                            cb();
                        })
                    }, function () {
                        done();
                    }
                );
            });

        });

        describe('#item(Slice, uint)', function () {
            /*
            // List of strings and lists mixed
            input: "0xC8C201028101C20102",
                result: {length: 9, list: [1, 4, 6]}
            */
            it('should create an RLP item from index 0 of "0xC9C201028101C3010203"', function (done) {
                rlpreadertest.testItem("0xC9C201028101C3010203", function(err, result){
                    assert.ifError(err);
                    var subPtr = result[3][0].toNumber();
                    rlpreadertest.testSubItem("0xC9C201028101C3010203", 0, function (err, result) {
                        assert.ifError(err);
                        var memPtr = result[0].toNumber();
                        assert.equal(memPtr, subPtr);
                        var len = result[1].toNumber();
                        assert.equal(len, 3);
                        var isList = result[2];
                        assert(isList);
                        var list = result[3];
                        var listLen = result[4].toNumber();
                        assert.equal(listLen, 2);
                        assert.equal(list[0].toNumber(), memPtr + 1);
                        assert.equal(list[1].toNumber(), memPtr + 2);
                        done();
                    });

                });

            });

            it('should create an RLP item from index 1 of "0xC9C201028101C3010203"', function (done) {
                rlpreadertest.testItem("0xC9C201028101C3010203", function(err, result){
                    assert.ifError(err);
                    var subPtr = result[3][1].toNumber();
                    rlpreadertest.testSubItem("0xC9C201028101C3010203", 1, function (err, result) {
                        assert.ifError(err);
                        var memPtr = result[0].toNumber();
                        assert.equal(memPtr, subPtr);
                        var len = result[1].toNumber();
                        assert.equal(len, 2);
                        var isList = result[2];
                        assert(!isList);
                        done();
                    });

                });

            });

            it('should create an RLP item from index 2 of "0xC9C201028101C3010203"', function (done) {
                rlpreadertest.testItem("0xC9C201028101C3010203", function(err, result){
                    assert.ifError(err);
                    var subPtr = result[3][2].toNumber();
                    rlpreadertest.testSubItem("0xC9C201028101C3010203", 2, function (err, result) {
                        assert.ifError(err);
                        var memPtr = result[0].toNumber();
                        assert.equal(memPtr, subPtr);
                        var len = result[1].toNumber();
                        assert.equal(len, 4);
                        var isList = result[2];
                        assert(isList);
                        var list = result[3];
                        var listLen = result[4].toNumber();
                        assert.equal(listLen, 3);
                        assert.equal(list[0].toNumber(), memPtr + 1);
                        assert.equal(list[1].toNumber(), memPtr + 2);
                        assert.equal(list[2].toNumber(), memPtr + 3);
                        done();
                    });

                });

            });

        });
        
        describe('#toData(Slice)', function () {

            it('should decode RLP encoded data and return it as bytes', function (done) {
                async.forEachOfSeries(testStrings, function (testData, idx, cb) {
                        rlpreadertest.testToData(testData.input, function (err, result) {
                            assert.ifError(err);
                            assert.equal(result, testData.result.bytes);
                            cb();
                        })
                    }, function () {
                        done();
                    }
                );
            });

        });

    });

});

const testStrings = [
    {
        input:  "0x00",
        result: {bytes: "0x00", length: 1}
    }, {
        input:  "0x05",
        result: {bytes: "0x05", length: 1}
    }, {
        input:  "0x80",
        result: {bytes: "0x", length: 1}
    }, {
        input:  "0x820505",
        result: {bytes: "0x0505", length: 3}
    }, {
        input:  "0x880102030405060708",
        result: {bytes: "0x0102030405060708", length: 9}
    }, {
        input:  "0xB701020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607",
        result: {bytes: "0x01020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607", length: 56}
    }, {
        input:  "0xB8380102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708",
        result: {bytes: "0x0102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708", length: 58}
    }, {
        input:  "0xB9010001020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708",
        result: {bytes: "0x01020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708", length: 259}
    }
];

// List is offset by starting memory address in tests.
const testLists = [
    {
        // Empty list
        input: "0xC0",
        result: {length: 1, list: []}
    }, {
        // List of length 1 items
        input: "0xC80102030405060708",
        result: {length: 9, list: [1, 2, 3, 4, 5, 6, 7, 8]}
    }, {
        // List of mixed string types
        input: "0xF873B70102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060705B8380102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708",
        result: {length: 117, list: [2, 58, 59]}
    }, {
        // List of empty lists
        input: "0xC3C0C0C0",
        result: {length: 4, list: [1, 2, 3]}
    }, {
        // List of lists
        input: "0xC6C20102C20102",
        result: {length: 7, list: [1, 4]}
    }, {
        // List of strings and lists mixed
        input: "0xC8C201028101C20102",
        result: {length: 9, list: [1, 4, 6]}
    }, {
        // List of length 55
        input: "0xF7B6010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506",
        result: {length: 56, list: [1]}
    }, {
        // List of length > 55
        input: "0xF838B701020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607",
        result: {length: 58, list: [2]}
    }, {
        // List of length with length > 255
        input: "0xF90103B9010001020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708",
        result: {length: 262, list: [3]}
    }, {
        // A long list of strings and lists mixed.
        input: "0xF90494B701020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607F90103B901000102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070805C8C201028101C20102B8380102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708F90103B9010001020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708F90103B9010001020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708F90103B9010001020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708010203040506070801020304050607080102030405060708",
        result: {length: 1175, list: [3, 59, 321, 322, 331, 389, 651, 913]}}
];