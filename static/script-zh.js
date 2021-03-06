// (c) Marek Mojzik, 2015-2020

// window, document, MapOptions, Math
MapOptions %= function (win, doc, mapOpts, Math) {

    function remainder(a, b) {
        return (a % b + b) % b
    }

    function Ma(div, b) {
        div.onmousedown = function (ev) {
            var d = b.call(this, ev || win.event);
            d && d.Xg && (win.getSelection ? (ev = win.getSelection()) && ev.removeAllRanges && ev.removeAllRanges() : doc.selection && doc.selection.empty && doc.selection.empty(), doc.onmousemove = function (a) {
                return d.Xg.call(this, a || win.event, 1)
            }, doc.onmouseup = function (event) {
                doc.onmousemove = doc.onmouseup = null;
                if (d.Yg) return d.Yg.call(div, event || win.event)
            })
        };
        div.ondragstart = function () {
            return !1
        };
        div.ontouchstart = function (event) {
            if (1 ==
                event.touches.length) {
                var d = b.call(div, event.touches[0]);
                if (d && d.Xg) {
                    var f = 0,
                        r = {},
                        e = [];
                    doc.ontouchstart = function (ev) {
                        for (var i = 0; i < ev.changedTouches.length; i++) r[ev.changedTouches[i].identifier] = e.length, e.push(ev.changedTouches[i]);
                        if (2 == e.length) return ev = e[1].clientX - e[0].clientX, i = e[1].clientY - e[0].clientY, d.onchange && d.onchange.call(div, ev / 2, i / 2), f = Math.sqrt(ev * ev + i * i), !1
                    };
                    doc.ontouchmove = function (ev) {
                        doc.oncontextmenu = function () {
                            return !1
                        };
                        for (var i = 0; i < ev.changedTouches.length; i++) e[r[ev.changedTouches[i].identifier]] = ev.changedTouches[i];
                        ev = ev.touches[0];
                        i = 1;
                        if (1 < e.length) {
                            var i = e[0].clientX - e[1].clientX,
                                h = e[0].clientY - e[1].clientY;
                            ev = {
                                clientX: (e[0].clientX + e[1].clientX) / 2,
                                clientY: (e[0].clientY + e[1].clientY) / 2
                            };
                            i = Math.sqrt(i * i + h * h) / f
                        }
                        return d.Xg.call(div, ev, i) || !1
                    };
                    doc.ontouchend = function (ev) {
                        for (var c = [], g = 0; g < ev.changedTouches.length; g++) c.push(e.splice(r[ev.changedTouches[g].identifier], 1)[0]);
                        if (c[0] && !(1 < e.length))
                            if (1 == e.length) d.onchange && d.onchange.call(div, (e[0].clientX - c[0].clientX) / 2, (e[0].clientY - c[0].clientY) / 2), f = 0;
                            else if (doc.ontouchstart =
                            null, doc.ontouchmove = null, doc.ontouchend = null, doc.ontouchcancel = null, doc.oncontextmenu = null, d.Yg) return d.Yg.call(div, ev.changedTouches[0])
                    };
                    return !1
                }
            }
        }
    }

    function getElementById(a) {
        return doc.getElementById(a)
    }

    function TaskMgr() {
        if (win.Worker && win.URL && "function" == typeof win.Blob && !win.setImmediate && !ismobile) {
            var a = "hardwareConcurrency" in navigator ? navigator.hardwareConcurrency : 4;
            this.workers = [];
            var b = [],
                c;
            for (c in job) b.push(job[c] == Math ? c + ": Math" : c + ":" + job[c].toString());
            var b = "{" + b.join(",") + "}",
                blobURL = URL.createObjectURL(new Blob(["onmessage = (" + this.Ho.toString() +
                    ")(" + b + ")"
                ], {
                    type: "application/javascript"
                }));
            this.AddWorker(blobURL);
            for (var f = this, b = 1; b < a; b++) setTimeout(function () {
                f.AddWorker(blobURL)
            }, 500 * b);
            this.xi = 0;
            this.Uk = {}
        }
    }
    var za = ("https:" == location.protocol ? "https:" : "http:") + "//www.ventusky.com/",
        xa = ("https:" == location.protocol ? "https:" : "http:") + "//cdnstatic.ventusky.com/",
        Ta = [{
            userAgent: /iphone|ipad/i,
            Wj: /windows/i,
            link: "https://itunes.apple.com/us/app/ventusky/id1280984498?mt=8"
        }, {
            userAgent: /android/i,
            Wj: /windows/i,
            link: "https://play.google.com/store/apps/details?id=cz.ackee.ventusky"
        }],
        ismobile = 1024 >= Math.min(win.innerWidth, win.innerHeight) && /ipad|iphone|android|mobile/i.test(navigator.userAgent),
        db = ismobile ? 80 : 160,
        Ua = ismobile ? 512 : 1024,
        Va = ismobile ? 4 : 9,
        Wa = mapOpts.root + "panel.php?link={link}&lang={lang}&id={id}",
        Xa = mapOpts.root + "ventusky_location.json.php?lat={lat}&lon={lon}&zoom={zoom}",
        eb = "#5bc84c #f9bd08 #f67100 #b63365 #6b1527 #222222".split(" "),
        Ya = Math.sqrt(5) / 2 + .5,
        fb = za + "images/logo-w.png",
        Aa = [16, 9, Ya, 1, 3, 2, 4, 3, 5, 4, 1, 1],
        Na = [95, 90, 85, 80, 75],
        Ca = ["#FFF", "#000"],
        gb = ["#111", "rgba(255,255,255,0.7)"],
        sa = "off normal strong soft dark fast".split(" "),
        hb = {
            normal: "0DAKtpv2A",
            dark: "0jAEIuk3a",
            strong: "0oAleyk2A",
            soft: "0xIAb9A9A",
            fast: "0tsdFPK3a"
        },
        Da = {
            normal: "0Ddq9WAHA",
            strong: "0Jdq9SG_A",
            fast: "0Etq9wj-A",
            soft: "0gYAF-g8A",
            dark: "0Ddq9WAHa"
        },
        qa = ismobile ? 10 : 50,
        Oa = [0, 20, 40, 60, 80],
        ib = "/api/api.ventusky_hurricane.json.php?end_time_unix=5&start_time_unix=-2&" + +mapOpts.hurricanesUpdated,
        jb = mapOpts.root + "ventusky_mesta.php?q={q}&lang={lang}",
        xa = xa + "tiles/",
        Ea = ["", "#000", "#FFF"],
        kb = {
            land: xa + "v1.1/land",
            border: xa + "v1.0/border",
            cities: xa + "v1.1/cities"
        },
        Za = {
            "0-75": "i"
        },
        $a = za + "data/{time:yyyy/MM/dd}/{model}/tilled_world/hour_{time:HH}{minutesFolder}/{model}_{layer}_{tileX}_{tileY}_{time:yyyyMMdd_HH}{minutes}.jpg?{cache}",
        Pa = za + "data/{time:yyyy/MM/dd}/{model}/whole_world/hour_{time:HH}{minutesFolder}/{model}_{layer}_{time:yyyyMMdd_HH}{minutes}.jpg?{cache}",
        xa = {
            width: 2880,
            height: 1441,
            re: "13 km",
            pe: 5
        },
        ta = {
            width: 1440,
            height: 721,
            re: "22 km",
            pe: 5
        },
        Ga = {
            width: 1440,
            height: 699,
            re: "22 km",
            pe: 5,
            ae: 89.25,
            Be: -85.5
        },
        Qa = {
            width: 1799,
            height: 1059,
            Fd: 600,
            Ed: 350,
            re: "3 km",
            Te: 260,
            Se: 270,
            pe: 7,
            Ce: -60.9365,
            De: -134.0955,
            ae: 52.6133,
            Be: 21.1405,
            le: "eiw03q19c05i17u06u16k07y15l08w14m09s13t0am12z0bc12b0c211k0cq10z0dc10b0dy0zr0ej0z50f30yo0fm0y30g40xm0gn0x30h40wn0hm0w40i20vq0ii0v80iy0uu0jd0ue0js0u10k60tk0km0t70l00sr0ld0sh0lq0s10m40rp0mh0rb0mu0r00n60ql0nj0qb0nw0pw0o80pm0ok0p80ov0p00p60om0pi0oc0pu0nz0q40nq0qg0nd0qq0n50r00ms0rc0mj0rm0m70rw0lz0s60ln0sg0lf0sq0l30t00kv0ta0kj0tk0kb0tu0jz0u40js0uc0jh0um0j90uw0iy0v40ir0ve0ig0vm0i90vw0hy0w40hs0wc0hh0wm0ha0wu0h00x20gt0xc0gi0xk0gc0xs0g20y00fw0y80fm0yg0fg0yo0f60yw0f00z40eq0zc0ek0zk0ea0zs0e41000du1080do10g0de10n0da10u0d01120cu11a0ck11h0cg11o0c611w0c11220bs12a0bm12i0bd12o0b812w0az1320au13a0al13g0ag13o0a713u0a214209t14809p14e09g14m09b14s09314y08y15608p15c08l15i08c15p08815w07z16207v16807n16e07i16l07a16s07516y06x17406t17a06l17g06h17m06917s06517y05x18405t18a05l18g05h18m05918s05518y04x19404t19a04l19g04h19m04919s04519y03x1a403t1aa03m1ae03j1ak03b1aq0371au0331ay02z1b202v1b602r1ba02m1bf02i1bj02e1bo0281bt0241bx0201c101w1c501r1cb01m1cf01i1cj01d1co0191cs0151cw0111d100v1d600r1da00o1dd00m1de00m1dc00n1dc00o1da00p1da00q1d800r1d800s1d600t1d600t1d500v1d400v1d300x1d300w1d200y1d000z1d00101cy0101cz0111cx0131cw0131cw0141cu0151cu0161cs0171cs0181cq0191cq0191cp01b1cp01a1co01c1cm01d1cm01e1ck01e1cl01f1cj01h1ci01h1ci01i1cg01j1cg01k1ce01l1ce01m1cc01n1cd01m1cc01o1ca01p1ca01q1c801r1c801s1c601s1c701t1c601u1c401v1c401w1c201x1c201x1c101z1c101y1c00201by0211by0221bw0221bx0231bv0251bu0251bu0261bs0271bs0281bq0291bq0291bp02b1bp02a1bo02c1bm02d1bm02d1bl02f1bk02f1bk02g1bi02h1bi02i1bg02j1bg02j1bg02k1be02l1be02m1bc02n1bc02n1bb02p1ba02p1ba02q1b802r1b802r1b702t1b602t1b602u1b402v1b402w1b202w1b302x1b202y1b002z1b00301ay0311ay0311ay0321aw0331aw0341au0351au0351au0361as0371as0381aq0391aq0391aq03a1ao03b1ao03c1am03d1am03d1am03e1ak03f1ak03g1ai03h1ai03h1ai03i1ag03j1ag03k1ae03l1ae03l1ae03m1ac03n1ac03n1ab03p1aa03p1aa03q1a803r1a803r1a703t1a603t1a603u1a403v1a403v1a403w1a203x1a203y1a003z1a003z1a004019y04119y04119x04319w04319w04419u04519u04519u04619s04719s04819q04919q04919q04a19o04b19o04b19n04d19m04d19m04e19k04f19k04f19k04g19i04h19i04i19g04j19g04j19g04k19e04l19e04l19e04m19c04n19c04o19a04p19a04p19a04q19804r19804r19804s19604t19604t19504v19404v19404w19204x19204x19204y19004z19004z18z05118y05118y05218w05318w05318w05418u05518u05518u05618s05718s05718r05918q05918q05a18o05b18o05b18o05c18m05d18m05d18m05e18k05f18k05f18j05h18i05h18i05i18g05j18g05j18g05k18e05l18e05l18e05m18c05n18c05n18c05o18a05p18a05q18805r18805r18805s18605t18605t18605u18405v18405v18405w18205x18205x18205y18005z18005z18006017y06117y06217w06317w06317w06417u06517u06517u06617s06717s06717s06817q06917q06917q06a17o06b17o06b17o06c17m06d17m06d17m06e17k06f17k06f17k06g17i06h17i06i17g06j17g06j17g06k17e06l17e06l17e06m17c06n17c06n17c06o17a06p17a06p17a06q17806r17806r17806s17606t17606t17606u17406v17406v17406w17206x17206x17206y17006z17006z17007016y07116y07116y07216w07316w07316w07416u07516u07516u07616s07716s07716s07816q07916q07916q07a16o07b16o07b16o07c16m07d16m07d16m07e16k07f16k07f16k07g16i07h16i07h16i07i16g07j16g07j16g07k16e07l16e07l16e07m16c07n16c07n16c07o16a07p16a07p16a07q16807r16807r16807s16607t16607t16607t16607u16407v16407v16407w16207x16207x16207y16007z16007z16008015y08115y08115y08215w08315w08315w08415u08515u08515u08615s08715s08715s08815r08815q08915q08915q08a15o08b15o08b15o08c15m08d15m08d15m08e15k08f15k08f15k08g15i08h15i08h15i08i15g08j15g08j15g08j15g08k15e08l15e08l15e08m15c08n15c08n15c08o15a08p15a08p15a08q15808r15808r15808s15708s15608t15608t15608u15408v15408v15408w15208x15208x15208y15008z15008z15009014z09014y09114y09114y09214w09314w09314w09414u09514u09514u09614s09714s09714s09714s09814q09914q09914q09a14o09b14o09b14o09c14m09d14m09d14m09d14m09e14k09f14k09f14k09g14i09h14i09h14i09i14g09j14g09j14g09j14g09k14e09l14e09l14e09m14c09n14c09n14c09o14b09o14a09p14a09p14a09q14809r14809r14809s14609t14609t14609t14609u14409v14409v14409w14209x14209x14209y14109y14009z14009z1400a013y0a113y0a113y0a213x0a213w0a313w0a313w0a413u0a513u0a513u0a613s0a713s0a713s0a713s0a813q0a913q0a913q0aa13o0ab13o0ab13o0ab13o0ac13m0ad13m0ad13m0ae13k0af13k0af13k0af13k0ag13i0ah13i0ah13i0ai13g0aj13g0aj13g0aj13g0ak13e0al13e0al13e0am13c0an13c0an13c0an13c0ao13a0ap13a0ap13a0aq1390aq1380ar1380ar1380as1360at1360at1360au1350au1340av1340av1340aw1320ax1320ax1320ax1320ay1300az1300az1300b012y0b112y0b112y0b112y0b212w0b312w0b312w0b412v0b412u0b512u0b512u0b612s0b712s0b712s0b712s0b812q0b912q0b912q0ba12p0ba12o0bb12o0bb12o0bc12m0bd12m0bd12m0bd12m0be12k0bf12k0bf12k0bg12j0bg12i0bh12i0bh12i0bi12g0bj12g0bj12g0bj12g0bk12e0bl12e0bl12e0bm12d0bm12c0bn12c0bn12c0bo12b0bo12a0bp12a0bp12a0bq1280br1280br1280br1280bs1260bt1260bt1260bu1250bu1240bv1240bv1240bw1220bx1220bx1220bx1220by1200bz1200bz1200bz1200c011y0c111y0c111y0c211x0c211w0c311w0c311w0c411v0c411u0c511u0c511u0c611s0c711s0c711s0c711s0c811q0c911q0c911q0c911q0ca11o0cb11o0cb11o0cb11o0cc11m0cd11m0cd11m0ce11l0ce11k0cf11k0cf11k0cg11j0cg11i0ch11i0ch11i0ci11h0ci11g0cj11g0cj11g0ck11e0cl11e0cl11e0cl11e0cm11c0cn11c0cn11c0cn11c0co11a0cp11a0cp11a0cp11a0cq1180cr1180cr1180cr1180cs1160ct1160ct1160cu1150cu1140cv1140cv1140cw1130cw1120cx1120cx1120cy1110cy1100cz1100cz1100d010z0d010y0d110y0d110y0d210x0d210w0d310w0d310w0d410v0d410u0d510u0d510u0d610t0d610s0d710s0d710s0d810r0d810q0d910q0d910q0da10p0da10o0db10o0db10o0dc10n0dc10m0dd10m0dd10m0de10l0de10k0df10k0df10k0dg10j0dg10i0dh10i0dh10i0di10h0di10g0dj10g0dj10g0dj10g0dk10e0dl10e0dl10e0dl10e0dm10c0dn10c0dn10c0dn10c0do10a0dp10a0dp10a0dp10a0dq1080dr1080dr1080dr1080ds1070ds1060dt1060dt1060du1050du1040dv1040dv1040dw1030dw1020dx1020dx1020dy1010dy1000dz1000dz1000e00zz0e00zy0e10zy0e10zy0e10zy0e20zw0e30zw0e30zw0e30zw0e40zu0e50zu0e50zu0e50zu0e60zt0e60zs0e70zs0e70zs0e80zr0e80zq0e90zq0e90zq0ea0zp0ea0zo0eb0zo0eb0zo0eb0zo0ec0zm0ed0zm0ed0zm0ed0zm0ee0zl0ee0zk0ef0ga0320g80ef0fi04k0fi0eg0ey05o0ex0eg0eg06m0eg0eh0e307e0e10eh0dp0840dp0ei0dd08s0dc0ei0d109e0d10ej0cr0a00cp0ej0cg0ak0cg0ej0c80b20c60ek0bx0bk0bx0el0bp0c20bn0el0bg0ci0bg0el0b90cy0b60en0b00dc0az0eo0at0ds0ap0ep0al0e60ai0eq0af0ek0a90es0a60ey0a20et0a00fb09u0eu09t0fo09m0ew09o0g009e0ey09f0gd0980ez09a0gq08z0f00930h108u0f108z0hc08l0f308s0ho08f0f508m0i00870f608g0ia0820f708b0im07t0f90850iw07o0fb0800j607h0fc07u0jg07c0fd07q0jq0740ff07k0k006z0fh07f0ka06s0fi0790kk06n0fj0750ku06g0fk06z0l406a0fm06w0lc0640fo06p0lm05z0fp06l0lw05s0fq06g0m405n0fs06c0me05g0fu0660mm05c0fv0630mu0560fw05x0n40500fy05u0nc04u0fz05p0nk04q0g105l0ns04k0g205g0o004g0g305c0o90490g50570oi0440g70530oq03y0g804y0oy03u0g904v0p503o0gb04r0pc03k0gd04n0pk03e0ge04i0ps03a0gf04f0q00330gh04a0q802z0gi0480qe02u0gk0420qm02q0gl03z0qu02k0gm03v0r002g0go03s0r802a0gq03m0rg0260gr03k0rm0210gs03f0ru01w0gu03d0s001r0gv0380s801n0gx0350se01i0gy0300sm01d0h002y0ss0180h102u0sy0150h302q0t600z0h402m0tc00w0h502k0ti00q0h702f0tq00m0h902c0tw00h0ha0280u200e0hb0260u80080hd0210ug0040he01z1c101u1c501s1c701o1cb01m1ce01g1cj01e1cl01a1cp0181cr0141cw0111cy00x1d200v1d400r1d900o1db00k1df00i1dh00f1dk00d1dn0081dr0061dt002avu"
        },
        Ha = {
            width: 526,
            height: 671,
            Fd: 526,
            Ed: 671,
            re: "5 km",
            pe: Infinity,
            Ce: 42,
            De: -10.5,
            ae: 63.5,
            Be: 30
        },

        cfgModels = {
            gfs: {
                name: "GFS",
                start: mapOpts.gfsTimelineStart,
                end: mapOpts.gfsTimelineEnd,
                Cd: mapOpts.gfsUpdated,
                Bd: 360,
                source: ["NOAA"],
                oe: ["http://www.noaa.gov"],
                size: ta,
                nd: 180,
                wd: {
                    "clouds-total": {},
                    "clouds-low": {
                        start: Date.UTC(2018, 1, 6, 0)
                    },
                    "clouds-middle": {
                        start: Date.UTC(2018, 1, 6, 0)
                    },
                    "clouds-high": {
                        start: Date.UTC(2018, 1, 6, 0)
                    },
                    "rain-3h": {
                        variant: "typed"
                    },
                    "rain-ac": {
                        start: mapOpts.gfsAccumulationStart
                    },
                    pressure: {},
                    cape: {},
                    cin: {
                        start: Date.UTC(2018,
                            0, 1, 0)
                    },
                    li: {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "cape-shear": {
                        start: Date.UTC(2018, 4, 17, 0)
                    },
                    shear: {
                        start: Date.UTC(2018, 4, 17, 0)
                    },
                    dew: {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    helicity: {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-2m": {},
                    feel: {
                        start: Date.UTC(2019, 1, 15, 0)
                    },
                    "temperature-5cm": {
                        start: Date.UTC(2018, 1, 6, 0)
                    },
                    "temperature-950hpa": {},
                    "temperature-925hpa": {},
                    "temperature-900hpa": {},
                    "temperature-850hpa": {},
                    "temperature-800hpa": {},
                    "temperature-750hpa": {},
                    "temperature-700hpa": {},
                    "temperature-650hpa": {},
                    "temperature-600hpa": {},
                    "temperature-500hpa": {},
                    "temperature-300hpa": {},
                    "temperature-200hpa": {},
                    "temperature-10hpa": {
                        start: Date.UTC(2018, 1, 6, 0)
                    },
                    "wind-10m": {},
                    "wind-100m": {
                        start: Date.UTC(2018, 1, 6, 0)
                    },
                    "wind-950hpa": {},
                    "wind-925hpa": {},
                    "wind-900hpa": {},
                    "wind-850hpa": {},
                    "wind-800hpa": {},
                    "wind-750hpa": {},
                    "wind-700hpa": {},
                    "wind-650hpa": {},
                    "wind-600hpa": {},
                    "wind-500hpa": {},
                    "wind-300hpa": {},
                    "wind-200hpa": {},
                    "wind-10hpa": {
                        start: Date.UTC(2018, 1, 19, 0)
                    },
                    gust: {},
                    "gust-ac": {
                        start: mapOpts.gfsAccumulationStart
                    },
                    humidity: {
                        start: Date.UTC(2018,
                            2, 1, 0)
                    },
                    "humidity-900hpa": {
                        start: Date.UTC(2021, 2, 6, 0)
                    },
                    "humidity-850hpa": {
                        start: Date.UTC(2021, 2, 6, 0)
                    },
                    "humidity-700hpa": {
                        start: Date.UTC(2021, 2, 6, 0)
                    },
                    snow: {},
                    "new-snow-ac": {
                        start: mapOpts.gfsAccumulationStart
                    },
                    freezing: {}
                }
            },
            gem: {
                name: "GEM",
                start: mapOpts.gemTimelineStart,
                end: mapOpts.gemTimelineEnd,
                Cd: mapOpts.gemUpdated,
                Bd: 720,
                source: ["CMC"],
                oe: ["https://www.canada.ca/en/index.html"],
                size: {
                    width: 1500,
                    height: 751,
                    re: "25 km",
                    pe: 5
                },
                nd: 180,
                wd: {
                    "clouds-total": {},
                    "rain-3h": {},
                    "rain-ac": {
                        start: mapOpts.gemAccumulationStart
                    },
                    pressure: {},
                    "temperature-2m": {},
                    "temperature-950hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-925hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-900hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-850hpa": {},
                    "temperature-800hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-750hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-700hpa": {},
                    "temperature-600hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "temperature-500hpa": {},
                    "temperature-300hpa": {},
                    "temperature-200hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-10m": {},
                    "wind-950hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-925hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-900hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-850hpa": {},
                    "wind-800hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-750hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-700hpa": {},
                    "wind-600hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    "wind-500hpa": {},
                    "wind-300hpa": {},
                    "wind-200hpa": {
                        start: Date.UTC(2018, 0, 1, 0)
                    },
                    snow: {}
                }
            },
            icon: {
                name: "ICON",
                start: mapOpts.iconTimelineStart,
                end: mapOpts.iconTimelineEnd,
                Cd: mapOpts.iconUpdated,
                Bd: 360,
                source: ["DWD"],
                oe: ["http://www.dwd.de"],
                g: [{
                    F: "icon_eu",
                    ef: 5
                }],
                size: xa,
                nd: 60,
                wd: {
                    "clouds-total": {},
                    "clouds-high": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "clouds-low": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "clouds-middle": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    "rain-ac": {
                        start: mapOpts.iconAccumulationStart
                    },
                    pressure: {},
                    "temperature-2m": {},
                    feel: {
                        start: Date.UTC(2019, 1, 15, 0)
                    },
                    "temperature-5cm": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "temperature-950hpa": {
                        size: ta,
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "temperature-850hpa": {
                        size: ta
                    },
                    "temperature-700hpa": {
                        size: ta
                    },
                    "temperature-500hpa": {
                        size: ta
                    },
                    "temperature-300hpa": {
                        size: ta
                    },
                    "wind-10m": {},
                    "wind-100m": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "wind-250m": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "wind-950hpa": {
                        size: ta,
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "wind-850hpa": {
                        size: ta
                    },
                    "wind-700hpa": {
                        size: ta
                    },
                    "wind-500hpa": {
                        size: ta
                    },
                    "wind-300hpa": {
                        size: ta
                    },
                    gust: {},
                    "gust-ac": {
                        start: mapOpts.iconAccumulationStart
                    },
                    snow: {
                        start: Date.UTC(2017, 9, 1, 0)
                    },
                    "new-snow-ac": {
                        start: mapOpts.iconAccumulationStart
                    },
                    dew: {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    freezing: {},
                    wave: {
                        af: "icon_water",
                        nd: 180,
                        size: Ga,
                        start: mapOpts["icon-waterTimelineStart"],
                        end: mapOpts["icon-waterTimelineEnd"],
                        Cd: mapOpts["icon-waterUpdated"],
                        Bd: 720
                    },
                    "wind-wave": {
                        af: "icon_water",
                        nd: 180,
                        size: Ga,
                        start: mapOpts["icon-waterTimelineStart"],
                        end: mapOpts["icon-waterTimelineEnd"],
                        Cd: mapOpts["icon-waterUpdated"],
                        Bd: 720
                    },
                    "wind-wave-period": {
                        af: "icon_water",
                        nd: 180,
                        size: Ga,
                        start: mapOpts["icon-waterTimelineStart"],
                        end: mapOpts["icon-waterTimelineEnd"],
                        Cd: mapOpts["icon-waterUpdated"],
                        Bd: 720
                    },
                    swell: {
                        af: "icon_water",
                        nd: 180,
                        size: Ga,
                        start: mapOpts["icon-waterTimelineStart"],
                        end: mapOpts["icon-waterTimelineEnd"],
                        Cd: mapOpts["icon-waterUpdated"],
                        Bd: 720
                    },
                    "swell-period": {
                        af: "icon_water",
                        nd: 180,
                        size: Ga,
                        start: mapOpts["icon-waterTimelineStart"],
                        end: mapOpts["icon-waterTimelineEnd"],
                        Cd: mapOpts["icon-waterUpdated"],
                        Bd: 720
                    }
                }
            },
            hrrr: {
                name: "HRRR",
                start: mapOpts.hrrrTimelineStart,
                end: mapOpts.hrrrTimelineEnd,
                Cd: mapOpts.hrrrUpdated,
                Bd: 60,
                source: ["NOAA"],
                oe: ["http://www.noaa.gov"],
                sf: "USA",
                size: Qa,
                nd: 60,
                wd: {
                    "clouds-total": {},
                    "clouds-low": {},
                    "clouds-middle": {},
                    "clouds-high": {},
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    "rain-ac": {
                        start: mapOpts.hrrrAccumulationStart
                    },
                    pressure: {},
                    cape: {},
                    cin: {},
                    helicity: {},
                    dew: {},
                    "temperature-2m": {},
                    feel: {
                        start: Date.UTC(2019, 1, 15, 0)
                    },
                    "temperature-5cm": {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {
                        start: mapOpts.hrrrAccumulationStart
                    },
                    humidity: {},
                    snow: {},
                    "new-snow-ac": {
                        start: mapOpts.hrrrAccumulationStart
                    },
                    freezing: {}
                }
            },
            nbm: {
                name: "NBM",
                start: mapOpts.nbmTimelineStart,
                end: mapOpts.nbmTimelineEnd,
                Cd: mapOpts.nbmUpdated,
                Bd: 60,
                source: ["NOAA"],
                oe: ["http://www.noaa.gov"],
                sf: "USA",
                size: Qa,
                nd: 60,
                wd: {
                    "clouds-total": {},
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    "rain-ac": {
                        start: mapOpts.nbmAccumulationStart
                    },
                    "temperature-2m": {},
                    feel: {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {
                        start: mapOpts.nbmAccumulationStart
                    },
                    humidity: {}
                }
            },
            icon_eu: {
                name: "ICON",
                start: mapOpts["icon-euTimelineStart"],
                end: mapOpts["icon-euTimelineEnd"],
                Cd: mapOpts["icon-euUpdated"],
                Bd: 180,
                source: ["DWD"],
                oe: ["http://www.dwd.de"],
                sf: "EU",
                size: {
                    width: 1097,
                    height: 657,
                    Fd: 400,
                    Ed: 240,
                    re: "7 km",
                    Te: 275,
                    Se: 220,
                    pe: 6,
                    Ce: 45,
                    De: -23.5,
                    ae: 70.5,
                    Be: 29.5
                },
                nd: 60,
                wd: {
                    "clouds-total": {},
                    "clouds-low": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "clouds-middle": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "clouds-high": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    "rain-ac": {
                        start: mapOpts["icon-euAccumulationStart"]
                    },
                    pressure: {},
                    "temperature-2m": {},
                    feel: {
                        start: Date.UTC(2019, 1, 15, 0)
                    },
                    "temperature-5cm": {
                        start: Date.UTC(2018, 1, 10, 0)
                    },
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {
                        start: mapOpts["icon-euAccumulationStart"]
                    },
                    snow: {},
                    "new-snow-ac": {
                        start: mapOpts["icon-euAccumulationStart"]
                    },
                    humidity: {
                        start: Date.UTC(2018, 2, 1, 0)
                    },
                    freezing: {},
                    wave: {
                        af: "icon_eu_water",
                        size: Ha,
                        nd: 180,
                        start: mapOpts["icon-eu-waterTimelineStart"],
                        end: mapOpts["icon-eu-waterTimelineEnd"],
                        Cd: mapOpts["icon-eu-waterUpdated"],
                        Bd: 720
                    },
                    "wind-wave": {
                        af: "icon_eu_water",
                        size: Ha,
                        nd: 180,
                        start: mapOpts["icon-eu-waterTimelineStart"],
                        end: mapOpts["icon-eu-waterTimelineEnd"],
                        Cd: mapOpts["icon-eu-waterUpdated"],
                        Bd: 720
                    },
                    "wind-wave-period": {
                        af: "icon_eu_water",
                        size: Ha,
                        nd: 180,
                        start: mapOpts["icon-eu-waterTimelineStart"],
                        end: mapOpts["icon-eu-waterTimelineEnd"],
                        Cd: mapOpts["icon-eu-waterUpdated"],
                        Bd: 720
                    },
                    swell: {
                        af: "icon_eu_water",
                        size: Ha,
                        nd: 180,
                        start: mapOpts["icon-eu-waterTimelineStart"],
                        end: mapOpts["icon-eu-waterTimelineEnd"],
                        Cd: mapOpts["icon-eu-waterUpdated"],
                        Bd: 720
                    },
                    "swell-period": {
                        af: "icon_eu_water",
                        size: Ha,
                        nd: 180,
                        start: mapOpts["icon-eu-waterTimelineStart"],
                        end: mapOpts["icon-eu-waterTimelineEnd"],
                        Cd: mapOpts["icon-eu-waterUpdated"],
                        Bd: 720
                    }
                }
            },
            icon_de: {
                name: "ICON",
                start: mapOpts["icon-deTimelineStart"],
                end: mapOpts["icon-deTimelineEnd"],
                Cd: mapOpts["icon-deUpdated"],
                Bd: 180,
                source: ["DWD"],
                oe: ["http://www.dwd.de"],
                sf: "DE",
                size: {
                    width: 1215,
                    height: 746,
                    Fd: 405,
                    Ed: 249,
                    re: "1.4 km",
                    Te: 243,
                    Se: 187,
                    pe: 7,
                    Ce: 20.36,
                    De: -3.96,
                    ae: 58.06,
                    Be: 43.18,
                    le: "0hg00900r00d00n00e00n00b00q00700u0010qm00900r00k00g00q00a00t00700t00700r00a00m00g00e0pa00e00l00u00506100200s00g00c00q0010mf00f00j09600300p00d00d00p0010ke00e00l0bz00c00d0k30dy00e00a0ib0f200200m0h200i00g0g000d00a0g40h900200l00i0040ea0j400700e0e10jz00f0060c80l600500g0bz0m00ay0n100b0090a40nb00100j08y0p100b0080860p900200h0710qx00f00406a0r600500d05a0so0520sw04u0sx03w0tv03v0tw03u0tx02x0ut02x0us02j0v90250vm0240vo01j0w80150wn0130wm00t0ww00e0xd00d0xe0080xk0030xo0030xp0020xo0030xm0060xk0080xj0070xl0050xm0050xn0050xm0070xi0080xh0090xj0080xj0090xh00b0xe00f0xb00h0xb00g0xb00f0xd00d0xe00e0xd00f0xa00h0x900h0xa00h0xa00i0xa00i0x900j0x900j0x600m0x300n0x400m0x600m0x500n0x400o0x400p0x100q0wz00s0wy00s0x000r0x000s0x000s0wz00r0x000q0wy00u0wx00v0ww00w0wv00x0wv00x0wu00x0wu00w0wt00y0ws0100wr0110wr00z0ws00y0wt00y0wu00y0wr0120wn0150wm0160wm0150wm0140wo0120wp0130wn0150wk0170wk0160wl0160wl0170wl0170wk0180wj0190wg01c0we01c0wf01b0wh01b0wg01c0wf01c0wg01a0wf01b0we01e0wd01g0wc01g0wb01h0wb01h0wa01g0wa01g0w901i0w901j0w801l0w601m0w601m0w501l0w601k0w501m0w401o0w301p0w301o0w301n0w501m0w501n0w201q0w001s0vz01t0vy01t0vy01s0w001q0w101r0w001t0vw01v0vv01v0vw01u0vy01u0vx01v0vw01w0vw01w0vt01z0vq0200vs01y0vt01z0vs0200vs01z0vs01y0vs01z0vq0210vq0220vp0230vp0240vn0250vm0240vn0230vm0250vl0270vk0280vk0260vl0250vn0240vn0250vk0290vg02c0vg02c0vf02c0vg02a0vh0290vi02a0vg02c0vd02f0vc02g0vc02g0vb02f0va02g0v902j0v902j0v802j0v802j0v902h0va02h0v902j0v602m0v502n0v402p0v302n0v402m0v602l0v502n0v202q0v002q0v202o0v302o0v402o0v302p0v202q0uz02u0uw02v0uw02u0ux02t0uz02t0uy02u0uy02t0ux02t0uw02u0uw02w0uw02w0uv02x0uv02x0uu02y0ut02x0us02y0us0300ur0310ur0310uq0320up0330up0320un0330um0340uo0340un0350um0350un0330uo0330un0350ul0370uj0390ui03a0ui0390ui0380uk0360ul0370ui03a0uf03d0uf03b0ug03a0ui0390ui03b0ug03c0ue03e0ub03h0ua03g0uc03e0ud03e0ud03f0ud03f0ub03h0u803k0u703k0u703j0u803i0ua03i0u903j0u903i0u703k0u503l0u603m0u603m0u503n0u503n0u403o0u203o0u103p0u203p0u203q0u203q0u103p0u203o0u303o0u203q0tz03t0tz03t0ty03u0tx03u0ty03s0tz03s0ty03u0tv03x0tu03w0tv03w0tw03u0tx03v0tx03v0tv03x0ts0400tr0410tq0400tr03z0tt03y0tt03z0ts0400tq0420tn0450tm0450tn0430to0420tq0420tp0430tn0440tl0450tm0450tm0460tm0460tl0470tk0480tj0480ti0480th04a0ti0490ti04a0th04b0th0490ti0480ti0490tg04c0tf04d0tf04d0te04e0td04e0te04c0te04c0te04e0tc04g0tb04h0ta04i0ta04i0t904h0tb04f0ta04i0t704l0t704k0t704j0t804i0t704l0t504n0t404o0t404o0t304p0t204o0t404m0t404n0t204q0t104r0t004r0t104p0t204o0t304p0t204q0sz04t0sx04v0sx04v0sw04u0sx04t0sz04s0sz04t0sx04v0su04y0st04z0st04y0st04x0su04w0sw04w0su04y0sr0500sr04z0ss04z0st04y0st04z0ss0500sr0510sp0530sm0540so0520sp0530so0530sp0530so0540sm0560sk0570sj0570sl0560sl0560sl0570sl0560sl0550sk0570sj0590si05a0si05a0sh05a0sh05b0sh0590sh05a0sf05c0sf05d0se05d0se05d0sf05b0sg05b0sg05c0sd05f0sb05h0sb05g0sb05h0sa05g0sc05e0sd05f0sb05h0s805k0s705k0s805k0s705k0s705j0s905i0s805k0s605m0s405m0s505l0s705k0s705l0s605m0s605m0s305o0s205q0s105p0s205o0s405o0s305p0s205p0s205q0rz05t0rx05u0ry05s0rz05s0s005r0s005s0rz05s0ry05s0rx05u0rx05v0rx05u0rx05v0rx05v0rw05w0ru05w0ru05w0ru05x0ru05y0ru05y0rt05x0ru05w0rw05w0rt05y0rs0600rr0610rq0620rq0610rq0600rr05z0rs0600rp0630ro0640rn0650rm0660rm0640rn0630ro0630rn0650rk0680rk0660rl0660rl0650rn0650rm0660rk0680ri06a0rg06b0rh0690ri0690rh06a0rf06d0re06e0re06e0rd06e0rd06e0re06c0re06d0rd06f0rb06g0rb06g0rc06e0rd06e0rd06f0rd06f0ra06h0r906j0r806k0r706j0r906h0ra06h0ra06i0r906j0r606m0r506n0r406n0r406m0r606k0r706l0r606m0r406n0r306n0r406n0r406n0r406o0r406o0r306p0r206p0r006r0qz06r0r106q0r106r0r006s0r006r0r006s0qy06u0qv06v0qw06u0qy06t0qy06u0qx06v0qx06t0qx06t0qx06u0qw06w0qv06x0qv06x0qu06y0qt06y0qu06w0qu06w0qt06z0qs0700qr0700qs06y0qt06y0qt06y0qt06z0qr0710qp0720qp0730qo0730qp0710qq0710qr0700qp0730qn0750qm0760ql0770ql0750qm0740qn0740qn0750ql0770qj0770qk0760ql0760qm0760ql0770qk0780qi0790qh07b0qg07a0qh0790qi07a0qi0790qi07a0qh07b0qe07e0qc07f0qd07d0qe07c0qf07d0qf07d0qe07d0qd07d0qd07d0qd07f0qd07f0qc07g0qa07h0q807k0q707k0q807i0q907i0qa07h0qa07i0q907j0q607m0q407n0q507l0q607l0q607l0q707l0q607l0q507m0q407m0q407n0q507n0q407o0q307o0q407o0q307o0q107p0q107q0q107q0q207q0q107r0q107r0q007r0pz07s0py07s0py07t0pz07t0py07t0py07t0pz07r0q007r0py07u0pw07v0pw07w0pw07w0pv07x0pu07w0pw07u0pw07v0pv07x0pt07z0pt07y0pt07z0ps07z0pt07y0pt07x0ps07z0pr0810pq0820pq0820pp0830po0820pq0800pq0810pp0830pn0840pn0840po0830po0820pq0820pp0820po0840pl0870pk0880pk0860pl0850pm0850pn0850pl0870pj0880pi08a0ph08b0ph0890pi0880pk0870pk0880pi08a0pg08a0pg08a0pi0890pi08a0pg08c0pd08f0pc08f0pd08f0pc08e0pd08d0pf08c0pf08d0pc08g0pa08i0pa08h0pa08h0pa08h0pb08f0pc08g0pa08h0p908i0p808j0p908h0pa08i0p908i0pa08i0p908j0p708l0p408m0p608k0p708k0p708l0p708k0p708l0de00900o00a00n00909o08n0bn00a00n00g00c00n00a00n00a00l00h00d00k00707r08p0ap00i00e00r00603k00400p00800j00f00b06q08o09x00k00807800400m00g00905r08n09500j00909100500j00j00404v08n08800k00c0ar00900e04n08n07e00c00g0ck00f00703s08o07c0dm00400h03k08n06l0f800c00902p08n05t00b00h0fh00300i02g08o05t0h200c00701p08p05300g0080ha00400g01h08q0510ir00e00500q08q04900o0040iy00600d00k08q0470kh00d08q03g0lf00508r03f0ub02s00m0010uc02r0v101y00900i0v301w0vv01w0vw0170wk0160rk"
                },
                nd: 60,
                wd: {
                    "clouds-total": {},
                    "clouds-low": {},
                    "clouds-middle": {},
                    "clouds-high": {},
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    "rain-ac": {
                        start: mapOpts["icon-deAccumulationStart"]
                    },
                    "temperature-2m": {},
                    feel: {},
                    "temperature-5cm": {},
                    "wind-10m": {},
                    gust: {},
                    "gust-ac": {
                        start: mapOpts["icon-deAccumulationStart"]
                    },
                    snow: {},
                    "new-snow-ac": {
                        start: mapOpts["icon-deAccumulationStart"]
                    },
                    humidity: {},
                    freezing: {}
                }
            },
            worad: {
                name: "WORAD",
                start: mapOpts.woradTimelineStart,
                end: mapOpts.woradTimelineEnd,
                Cd: mapOpts.woradUpdated,
                Bd: 60,
                source: ["NOAA",
                    "EUMETSAT", "DWD", "Rainviewer.com"
                ],
                oe: ["http://www.noaa.gov", "https://www.eumetsat.int", "https://www.dwd.de", "https://www.rainviewer.com/sources.html"],
                g: [{
                    F: "eurad",
                    ef: 0
                }, {
                    F: "usrad",
                    ef: 0
                }],
                size: xa,
                nf: "icon",
                nd: 10,
                wd: {
                    radar: {
                        end: Math.min(mapOpts.woradUpdated, mapOpts.euradUpdated, mapOpts.usradUpdated),
                        hj: mapOpts.gfsTimelineEnd
                    }
                }
            },
            eurad: {
                name: "EURAD",
                start: mapOpts.euradTimelineStart,
                end: mapOpts.euradTimelineEnd,
                Cd: mapOpts.euradUpdated,
                Bd: 10,
                source: "DWD Meteofrance \u010cHM\u00da Metoffice SHMI KNMI SHM\u00da IMGW AEMET Rainviewer.com NOAA EUMETSAT".split(" "),
                oe: "https://www.dwd.de https://www.meteofrance.fr http://www.chmi.cz https://www.metoffice.gov.uk https://www.smhi.se https://www.knmi.nl http://www.shmu.sk http://www.imgw.pl http://www.aemet.es/ https://www.rainviewer.com/sources.html http://www.noaa.gov https://www.eumetsat.int".split(" "),
                sf: "EU",
                size: {
                    width: 1645,
                    height: 985,
                    Fd: 600,
                    Ed: 360,
                    re: "3 km",
                    Te: 275,
                    Se: 250,
                    pe: 6,
                    Ce: 45,
                    De: -23.5,
                    ae: 70.5,
                    Be: 29.5
                },
                nf: "icon_eu",
                nd: 60,
                wd: {
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    radar: {
                        nd: 10,
                        end: mapOpts.euradUpdated
                    }
                }
            },
            usrad: {
                name: "USRAD",
                start: mapOpts.usradTimelineStart,
                end: mapOpts.usradTimelineEnd,
                Cd: mapOpts.usradUpdated,
                Bd: 10,
                source: ["NOAA"],
                oe: ["http://www.noaa.com"],
                sf: "USA",
                size: Qa,
                nf: "hrrr",
                nd: 60,
                wd: {
                    "rain-1h": {
                        variant: "typed"
                    },
                    "rain-3h": {
                        variant: "typed",
                        nd: 180
                    },
                    radar: {
                        nd: 10,
                        size: {
                            width: 2699,
                            height: 1589,
                            Fd: 600,
                            Ed: 350,
                            re: "2 km",
                            Te: 260,
                            Se: 270,
                            pe: 7,
                            Ce: -60.9365,
                            De: -134.0955,
                            ae: 52.6133,
                            Be: 21.1405,
                            le: "yac05l1w00891uq0891ts0a91ru0bx1r20bx1qe0dc1oy0eo1ob0eo1nq0fx1mh0h01lz0h01lh0i31kc0j31jw0j31jh0k01ih0kx1i20kx1hn0lt1gq0mm1gd0mm1g10nf1f50o61et0o61ef0oz1dn0po1db0po1cz0qf1c60r31bw0r31bm0rr1au0sf1ak0sf1aa0t119m0to19b0to1920u918c0ux1820ux17t0vi1750w216x0w216q0wl1620x615t0x615k0xp14z0y914q0y914j0yr13w0za13p0za13h0zu12v10c12n10c12f10u11v11a11p11a11j11r10x12910q12910j12r0zz1360zt1360zl13o0z21430yw1430yq14i0y71500xz1500xt15f0xb15u0x515u0wz1690wh16o0wb16o0w51730vn17i0vh17i0vb17x0ut18c0un18c0uh18r0tz1960tt1960to19i0t819x0t219x0sw1ac0sg1ao0sb1ao0s51b30ro1bf0rk1bf0re1bu0qy1c60qt1c60qo1ci0q81cx0q21cx0py1d90pi1dl0pe1dl0p81e00os1ec0on1ec0oi1eo0o41f00nz1f00nu1fc0ng1fo0nb1fo0n61g00ms1gc0mn1gc0mi1go0m41h00lz1h00lu1hc0lg1ho0lb1ho0l61i00ks1ic0kn1ic0ki1io0k41iy0k11iy0jy1j90ji1jl0je1jl0ja1jx0iu1k80ir1k80io1ki0ia1ku0i51ku0i21l30ho1lf0hk1lf0hg1lr0h21m00gz1m00gu1mc0gh1ml0ge1ml0ga1mx0fw1n60ft1n60fo1ni0fb1nr0f81nr0f41o30eq1oc0en1oc0ek1ol0e61ox0e21ox0dz1p60dn1pf0dk1pf0dg1pr0d21q00cz1q00cw1q90ci1qk0cf1qk0cc1qu0bz1r30bw1r30bt1rc0bh1rl0be1rl0ba1rv0ay1s60at1s60aq1sf0ae1so0ab1so0a81sx09w1t609t1t609q1tf09e1to09b1to0981tx08w1u608t1u608q1uf08e1uo08b1uo0881ux07w1v607t1v607q1vf07e1vo07b1vo0781vx06w1w606t1w606q1wf06e1wo06b1wo0681wx05w1x605t1x605q1xf05f1xl05e1xl05b1xu04z1y304w1y304t1y904n1yf04k1yf04h1yl04b1yr0481yr0451yx03y1z403v1z403s1za03m1zi03h1zi03c1zq0361zw0331zw03020202u20802r20802n20g02g20m02d20m02a20s02221001z21001w21601q21c01n21c01k21k01b21r01821r01521x01022200x22200x22300y22000z22000z22001021x01221x01221x01421u01521u01521u01621r01821r01821r01821q01921q01b21o01b21m01d21m01e21n01c21l01e21l01g21i01h21i01h21i01i21f01j21g01j21g01k21e01n21c01n21c01n21c01o21901q21901q21901s21601t21601t21601u21301w21301w21301w21201x21201z21101y21001z21002020x02220x02220x02420u02320w02320w02520s02820r02820r02820r02a20o02b20o02b20o02c20l02e20l02e20l02g20i02h20i02h20j02g20i02h20i02i20f02k20f02k20f02m20c02n20c02n20c02o20902p20a02p20a02q20902s20602t20602t20602u20302w20302w20302w20202x20202z20102y20002z2000301zx0321zx0321zx0341zu0331zw0331zw0351zs0381zr0381zr0381zr03a1zo03b1zo03b1zo03c1zl03e1zl03e1zl03e1zk03f1zk03h1zj03g1zi03h1zi03i1zf03k1zf03k1zf03k1ze03n1zc03n1zc03n1zc03o1z903q1z903q1z903s1z603t1z603t1z603t1z603t1z603u1z303w1z303w1z303y1z003z1z003z1z003z1yy0421yx0421yx0421yx0441yu0451yu0451yu0451ys0471ys0481yr0481yr0481yr04a1yo04b1yo04b1yo04c1yl04d1ym04d1ym04e1yl04g1yi04h1yi04h1yi04i1yf04k1yf04k1yf04k1yf04k1yf04m1yc04n1yc04n1yc04o1y904q1y904q1y904q1y904s1y604t1y604t1y604u1y304w1y304w1y304w1y304w1y304y1y004z1y004z1y00501xx0521xx0521xx0521xx0541xu0551xu0551xu0561xr0581xr0581xr0581xr0581xr05a1xo05b1xo05b1xo05c1xl05e1xl05e1xl05e1xl05g1xi05h1xi05h1xi05h1xg05j1xg05k1xf05k1xf05k1xf05m1xc05n1xc05n1xc05n1xa05q1x905q1x905q1x905s1x605t1x605t1x605t1x605t1x605u1x305w1x305w1x305y1x005z1x005z1x005z1x00601wx0621wx0621wx0621ww0631ww0651wu0651wu0651wu0661wr0681wr0681wr0681wr06a1wo06b1wo06b1wo06c1wl06e1wl06e1wl06e1wl06e1wl06g1wi06h1wi06h1wi06h1wg06k1wf06k1wf06k1wf06m1wc06n1wc06n1wc06n1wc06n1wc06o1w906q1w906q1w906s1w606t1w606t1w606t1w606u1w306w1w306w1w306w1w306w1w306y1w006z1w006z1w00701vx0721vx0721vx0721vx0741vu0751vu0751vu0751vu0751vu0761vr0781vr0781vr0781vq07b1vo07b1vo07b1vo07c1vl07e1vl07e1vl07e1vl07e1vl07g1vi07h1vi07h1vi07h1vg07k1vf07k1vf07k1vf07m1vc07n1vc07n1vc07n1vc07n1vc07o1v907q1v907q1v907q1v907s1v607t1v607t1v607t1v407v1v407w1v307w1v307w1v307y1v007z1v007z1v007z1v00801ux0821ux0821ux0821ux0821ux0841uu0851uu0851uu0851us0881ur0881ur0881ur08a1uo08b1uo08b1uo08b1uo08b1uo08c1ul08e1ul08e1ul08e1ul08g1ui08h1ui08h1ui08h1ui08h1ui08i1uf08k1uf08k1uf08m1uc08n1uc08n1uc08n1uc08o1u908q1u908q1u908q1u908q1u908s1u608t1u608t1u608t1u608u1u308w1u308w1u308w1u308w1u308y1u008z1u008z1u008z1u00901tx0921tx0921tx0941tu0951tu0951tu0951tu0951tu0961tr0981tr0981tr0981tr09a1to09b1to09b1to09b1to09b1to09c1tl09e1tl09e1tl09e1tl09g1ti09h1ti09h1ti09h1ti09h1ti09i1tf09k1tf09k1tf09k1tf09m1tc09n1tc09n1tc09n1tc09n1tc09o1t909q1t909q1t909s1t609t1t609t1t609t1t609u1t309w1t309w1t309w1t309w1t309y1t009z1t009z1t009z1t00a01sx0a21sx0a21sx0a21sx0a21sx0a41su0a51su0a51su0a51su0a61sr0a81sr0a81sr0a81sr0a81sr0aa1so0ab1so0ab1so0ab1so0ac1sl0ae1sl0ae1sl0ae1sl0ae1sl0ag1si0ah1si0ah1si0ah1si0ai1sf0ak1sf0ak1sf0ak1sf0ak1sf0am1sc0an1sc0an1sc0an1sc0ao1s90aq1s90aq1s90aq1s90aq1s90as1s60at1s60at1s60at1s60au1s30aw1s30aw1s30aw1s30aw1s30ay1s00az1s00az1s00az1s00b01rx0b21rx0b21rx0b21rx0b21rx0b41ru0b51ru0b51ru0b51ru0b61rr0b81rr0b81rr0b81rr0b81rr0ba1ro0bb1ro0bb1ro0bb1ro0bc1rl0be1rl0be1rl0be1rl0be1rl0bg1ri0bh1ri0bh1ri0bh1ri0bi1rf0bk1rf0bk1rf0bk1rf0bk1rf0bm1rc0bn1rc0bn1rc0bn1rc0bo1r90bq1r90bq1r90bq1r90bq1r90bq1r90bs1r60bt1r60bt1r60bt1r60bt1r60bu1r30bw1r30bw1r30bw1r30by1r00bz1r00bz1r00bz1r00bz1r00c01qx0c21qx0c21qx0c21qx0c41qu0c51qu0c51qu0c51qu0c51qu0c61qr0c81qr0c81qr0c81qr0ca1qo0cb1qo0cb1qo0cb1qo0cb1qo0cc1qn0cc1ql0ce1ql0ce1ql0ce1ql0ce1ql0cg1qi0ch1qi0ch1qi0ch1qi0ci1qf0ck1qf0ck1qf0ck1qf0ck1qf0cm1qc0cn1qc0cn1qc0cn1qc0co1q90cq1q90cq1q90cq1q90cq1q90cs1q60ct1q60ct1q60ct1q60ct1q60ct1q60cu1q30cw1q30cw1q30cw1q30cy1q00cz1q00cz1q00cz1q00cz1q00d01px0d21px0d21px0d21px0d41pu0d51pu0d51pu0d51pu0d51pu0d61pt0d61pr0d81pr0d81pr0d81pr0d81pr0da1po0db1po0db1po0db1po0dc1pl0de1pl0de1pl0de1pl0de1pl0dg1pi0dh1pi0dh1pi0dh1pi0di1ph0di1ph0di1pf0dk1pf0dk1pf0dk1pf0dm1pc0dn1pc0dn1pc0dn1pc0dn1pc0do1p90dq1p90dq1p90dq1p90ds1p60dt1p60dt1p60dt1p60dt1p60dt1p60du1p30dw1p30dw1p30dw1p30dw1p30dy1p00dz1p00dz1p00dz1p00e01ox0e21ox0e21ox0e21ox0e21ox0e21ox0e41ou0e51ou0e51ou0e51ou0e51ou0e61or0e81or0e81or0e81or0ea1oo0eb1oo0eb1oo0eb1oo0eb1oo0eb1oo0ec1ol0ee1ol0ee1ol0ee1ol0ee1ol0eg1oi0eh1oi0eh1oi0eh1oi0ei1oh0ei1oh0ei1of0ek1of0ek1of0ek1of0em1oc0en1oc0en1oc0en1oc0en1oc0eo1o90eq1o90eq1o90eq1o90eq1o90eq1o90es1o60et1o60et1o60et1o60eu1o30ew1o30ew1o30ew1o30ew1o30ey1o10ey1o00ez1o00ez1o00ez1o00ez1o00f01nx0f21nx0f21nx0f21nx0f41nv0f41nv0f41nu0f51nu0f51nu0f51nu0f61nr0f81nr0f81nr0f81nr0f81nr0fa1no0fb1no0fb1no0fb1no0fb1no0fb1no0fc1nl0fe1nl0fe1nl0fe1nl0fg1ni0fh1ni0fh1ni0fh1ni0fh1ni0fh1ni0fi1nf0fk1nf0fk1nf0fk1nf0fk1nf0fm1nc0fn1nc0fn1nc0fn1nc0fn1nc0fn1nc0fo1n90fq1n90fq1n90fq1n90fs1n60ft1n60ft1n60ft1n60ft1n60ft1n60fu1n30fw1n30fw1n30fw1n30fw1n30fy1n00fz1n00fz1n00fz1n00fz1n00fz1n00g01mx0g21mx0g21mx0g21mx0g41mv0g41mv0g41mu0g51mu0g51mu0g51mu0g61mr0g81mr0g81mr0g81mr0g81mr0ga1mp0ga1mo0gb1mo0gb1mo0gb1mo0gb1mo0gc1ml0ge1ml0ge1ml0ge1ml0ge1ml0ge1ml0gg1mi0gh1mi0gh1mi0gh1mi0gi1mf0gk1mf0gk1mf0gk1mf0gk1mf0gk1mf0gm1mc0gn1mc0gn1mc0gn1mc0gn1mc0go1mb0go1m90gq1m90gq1m90gq1m90gq1m90gs1m60gt1m60gt1m60gt1m60gt1m60gt1m60gu1m30gw1m30gw1m30gw1m30gy1m10gy1m10gy1m00gz1m00gz1m00gz1m00h01lx0h21lx0h21lx0h21lx0h21lx0h21lx0h41lu0h51lu0h51lu0h51lu0h51lu0h61lt0h61lr0h81lr0h81lr0h81lr0h81lr0ha1lo0hb1lo0hb1lo0hb1lo0hb1lo0hb1lo0hc1ll0he1ll0he1ll0he1ll0hg1lj0hg1lj0hg1li0hh1li0hh1li0hh1li0hi1lh0hi1lh0hi1lf0hk1lf0hk1lf0hk1lf0hm1lc0hn1lc0hn1lc0hn1lc0hn1lc0hn1lc0ho1l90hq1l90hq1l90hq1l90hq1l90hs1l70hs1l60ht1l60ht1l60ht1l60ht1l60hu1l30hw1l30hw1l30hw1l30hw1l30hw1l30hy1l00hz1l00hz1l00hz1l00hz1l00hz1l00i01kx0i21kx0i21kx0i21kx0i41kv0i41kv0i41ku0i51ku0i51ku0i51ku0i61kt0i61kt0i61kr0i81kr0i81kr0i81kr0ia1ko0ib1ko0ib1ko0ib1ko0ib1ko0ib1ko0ic1kl0ie1kl0ie1kl0ie1kl0ie1kl0ie1kl0ig1ki0ih1ki0ih1ki0ih1ki0ih1ki0ih1ki0ii1kf0ik1kf0ik1kf0ik1kf0ik1kf0im1kd0im1kc0in1kc0in1kc0in1kc0in1kc0io1kb0io1k90iq1k90iq1k90iq1k90iq1k90is1k70is1k60it1k60it1k60it1k60it1k60iu1k30iw1k30iw1k30iw1k30iw1k30iw1k30iy1k00iz1k00iz1k00iz1k00iz1k00iz1k00j01jx0j21jx0j21jx0j21jx0j21jx0j21jx0j41ju0j51ju0j51ju0j51ju0j51ju0j51ju0j61jr0j81jr0j81jr0j81jr0ja1jp0ja1jp0ja1jo0jb1jo0jb1jo0jb1jo0jc1jn0jc1jn0jc1jl0je1jl0je1jl0je1jl0jg1jj0jg1jj0jg1ji0jh1ji0jh1ji0jh1ji0ji1jh0ji1jh0ji1jf0jk1jf0jk1jf0jk1jf0jm1jd0jm1jd0jm1jc0jn1jc0jn1jc0jn1jc0jo1jb0jo1jb0jo1j90jq1j90jq1j90jq1j90js1j70js1j70js1j60jt1j60jt1j60jt1j60ju1j50ju1j50ju1j30jw1j30jw1j30jw1j30jy1j10jy1j10jy1j00jz1j00jz1j00jz1j00k01iz0k01iz0k01ix0k21ix0k21ix0k21ix0k41iv0k41iv0k41iu0k51iu0k51iu0k51iu0k61it0k61it0k61ir0k81ir0k81ir0k81ir0ka1ip0ka1ip0ka1io0kb1io0kb1io0kb1io0kb1io0kb1io0kc1il0ke1il0ke1il0ke1il0ke1il0ke1il0kg1ii0kh1ii0kh1ii0kh1ii0kh1ii0kh1ii0ki1if0kk1if0kk1if0kk1if0kk1if0kk1if0km1ic0kn1ic0kn1ic0kn1ic0kn1ic0kn1ic0ko1ib0ko1i90kq1i90kq1i90kq1i90kq1i90ks1i70ks1i60kt1i60kt1i60kt1i60kt1i60ku1i50ku1i30kw1i30kw1i30kw1i30kw1i30ky1i10ky1i00kz1i00kz1i00kz1i00kz1i00l01hz0l01hx0l21hx0l21hx0l21hx0l21hx0l21hx0l41hu0l51hu0l51hu0l51hu0l51hu0l51hu0l61hr0l81hr0l81hr0l81hr0l81hr0l81hr0la1hp0la1hp0la1ho0lb1ho0lb1ho0lb1ho0lc1hn0lc1hn0lc1hl0le1hl0le1hl0le1hl0lg1hj0lg1hj0lg1hi0lh1hi0lh1hi0lh1hi0lh1hi0lh1hi0li1hf0lk1hf0lk1hf0lk1hf0lk1hf0lk1hf0lm1hd0lm1hc0ln1hc0ln0of04l0oc0ln0n906u0n90ln0n906u0n90lo0mf08i0me0lo0lo09x0lo0lq0lo09x0lo0lq0l50b30l10lq0kk0c60kj0lq0kk0c60kj0ls0k10d60k00ls0jj0e30jk0lt0jj0e30jk0lt0j40f00j20lt0io0fu0io0lt0io0fu0io0lt0ic0gl0i90lu0hw0hc0hv0lw0hw0hc0hv0lw0hk0i30hg0lw0h60ir0h60lw0h60ir0h60lw0gw0jf0gr0lz0gi0k00gg0m10gi0k00gg0m10g70ko0g20m20fv0l90fr0m40fv0l90fr0m40fm0lu0fe0m60f90mf0f30m80f90mf0f30m80f00mz0er0m90eq0ni0ef0mc0eq0ni0ef0mc0ei0o00e30mg0e40ok0du0mh0e40ok0du0mh0dx0p30dg0mj0dm0pk0d90mk0dm0pk0d90mk0dg0q00cw0mn0d60qi0cm0mp0d60qi0cm0mq0cx0r00cb0mr0co0rf0c30mt0co0rf0c30mt0ch0rx0bp0mw0c80sc0bi0mx0c80sc0bi0mz0c00sr0b70n10br0t60b00n20br0t60b00n20bl0tl0ao0n50bc0u00ag0n70bc0u00ag0n80b50uf0a60n90aw0uu09y0nb0aw0uu09y0nb0aq0v909o0nc0ah0vo09f0nf0ah0vo09f0nf0ac0w00960nj0a10wf08z0nk0a10wf08z0nk09v0wu08o0nm09o0x608g0np09o0x608g0np09i0xl0860nr0990xx0800nt0990xx0800nt0950y907r0nu08w0yo07i0nx08w0yo07i0nx08r0z00790nz08k0zc0730o008k0zc0730o208d0zo06u0o408610006o0o508610006o0o508010d06e0o807s10r0660oa07s10r0660ob07n11305x0oc07f11f05r0oe07f11f05r0oe07b11p05i0oh07512005c0oi07512005c0ok06y12c0530om06r12o04x0on06r12o04x0on06m13004n0oq06f13c04g0os06f13c04g0os06c13l0490ou06313x0430ow06313x0430ow05z14903u0ox05t14i03o0p005t14i03o0p005o14u03f0p405f1560390p505f1560390p505c15f0310p705415r02u0pa05415r02u0pa05116002n0pb04u16c02g0pd04u16c02g0pe04q16l0290pf04i16x0220pi04i16x0220pi04f17601u0pk04917f01q0pl04917f01q0pn04317r01g0pp03x18001c0pq03x18001c0pq03u1890130pt03m18l00x0pv03m18l00x0pw03i18u00q0px03c19300l0pz03c19300l0pz03919c00c0q203219o0060q303219o0060q302z20202r20802r20802o20b02i20h02i20h02f20l02620t02620t02320w01x21201x21201u21501o21b01o21d01j21g01d21m01d21m01a21p01421v01421w01021z00u22500u22500r22800n22c00n22c00k22h00c22n00c22n00922q00322w003mkr"
                        },
                        end: mapOpts.usradUpdated
                    }
                }
            },
            silam: {
                name: "SILAM",
                start: mapOpts.silamTimelineStart,
                end: mapOpts.silamTimelineEnd,
                Cd: mapOpts.silamUpdated,
                Bd: 1440,
                source: ["FMI"],
                oe: ["http://silam.fmi.fi/"],
                size: {
                    width: 1800,
                    height: 897,
                    re: "16 km",
                    pe: 5,
                    Te: 225,
                    Se: 260,
                    ae: 89.6,
                    Be: -89.6
                },
                nf: "gfs",
                nd: 180,
                wd: {
                    co: {},
                    no2: {},
                    o3: {},
                    pm10: {},
                    pm25: {},
                    so2: {},
                    dust: {}
                }
            },
            silam_eu: {
                name: "SILAM",
                start: mapOpts["silam-euTimelineStart"],
                end: mapOpts["silam-euTimelineEnd"],
                Cd: mapOpts["silam-euUpdated"],
                Bd: 1440,
                source: ["FMI"],
                oe: ["http://silam.fmi.fi/"],
                sf: "EU",
                size: {
                    width: 700,
                    height: 420,
                    Fd: 700,
                    Ed: 420,
                    re: "8 km",
                    pe: Infinity,
                    Ce: 44.95,
                    De: -24.95,
                    ae: 71.95,
                    Be: 30.05
                },
                nf: "gfs",
                nd: 180,
                wd: {
                    co: {},
                    no2: {},
                    o3: {},
                    pm10: {},
                    pm25: {},
                    so2: {},
                    dust: {}
                }
            },
            goes: {
                name: "GOES",
                start: mapOpts.goesTimelineStart,
                end: mapOpts.goesUpdated,
                Cd: mapOpts.goesUpdated,
                Bd: 10,
                source: ["NOAA/CIRA"],
                oe: ["http://www.nesdis.noaa.gov"],
                size: {
                    ti: !0,
                    width: 6300,
                    height: 7413,
                    Fd: 860,
                    Ed: 1012,
                    re: "2 km",
                    Te: 256,
                    Se: 256,
                    pe: 4,
                    Ce: -11,
                    De: -180,
                    ae: 70,
                    Be: -70
                },
                nf: "icon",
                nd: 10,
                wd: {
                    satellite: {
                        hj: mapOpts.gfsTimelineEnd
                    }
                }
            },
            goes16: {
                name: "GOES16",
                start: mapOpts.goesTimelineStart,
                end: mapOpts.goesUpdated,
                Cd: mapOpts.goesUpdated,
                Bd: 10,
                source: ["NOAA/CIRA"],
                oe: ["http://www.nesdis.noaa.gov"],
                size: {
                    ti: !0,
                    width: 9E3,
                    height: 10191,
                    Fd: 500,
                    Ed: 566,
                    re: "1 km",
                    Te: 256,
                    Se: 256,
                    pe: 6,
                    Ce: -32,
                    De: -135,
                    ae: 55,
                    Be: -45
                },
                nf: "icon",
                nd: 10,
                wd: {
                    satellite: {}
                }
            },
            himawari: {
                name: "HIMAWARI",
                start: mapOpts.goesTimelineStart,
                end: mapOpts.goesUpdated,
                Cd: mapOpts.goesUpdated,
                Bd: 10,
                source: ["JMA"],
                oe: ["http://www.jma.go.jp"],
                size: {
                    ti: !0,
                    width: 5100,
                    height: 9478,
                    Fd: 520,
                    Ed: 966,
                    re: "2 km",
                    Te: 256,
                    Se: 256,
                    pe: 4,
                    Ce: 180,
                    De: 73,
                    ae: 70,
                    Be: -70
                },
                nf: "icon",
                nd: 10,
                wd: {
                    satellite: {}
                }
            },
            meteosat: {
                name: "METEOSAT",
                start: mapOpts.goesTimelineStart,
                end: mapOpts.goesUpdated,
                Cd: mapOpts.goesUpdated,
                Bd: 10,
                source: ["EUMETSAT"],
                oe: ["https://www.eumetsat.eu"],
                size: {
                    ti: !0,
                    width: 2232,
                    height: 4530,
                    Fd: 500,
                    Ed: 1014,
                    re: "4 km",
                    Te: 256,
                    Se: 256,
                    pe: 4,
                    Ce: 78,
                    De: -20,
                    ae: 70.03,
                    Be: -70
                },
                nf: "icon",
                nd: 10,
                wd: {
                    satellite: {}
                }
            },
            ecmwf: {
                name: "ECMWF",
                start: mapOpts.ecmwfTimelineStart,
                end: mapOpts.ecmwfUpdated,
                Cd: mapOpts.ecmwfUpdated,
                Bd: 1440,
                source: ["ECMWF"],
                oe: ["https://www.ecmwf.int/"],
                size: {
                    width: 1440,
                    height: 721,
                    Fd: 1440,
                    Ed: 721,
                    re: "22 km",
                    pe: Infinity
                },
                nd: 180,
                wd: {
                    "temperature-2m": {},
                    gust: {},
                    "rain-3h": {
                        variant: "typed"
                    },
                    "wind-10m": {}
                }
            }
        },
        gModels = "icon gfs ecmwf gem icon_eu worad eurad usrad hrrr nbm icon_de goes goes16 meteosat himawari silam silam_eu".split(" "),
        Ra = {
            Qn: "icon gfs ecmwf gem worad goes silam".split(" "),
            g: [{
                F: "eurad",
                ef: 4
            }, {
                F: "usrad",
                ef: 4
            }, {
                F: "hrrr",
                ef: 4
            }, {
                F: "icon_eu",
                ef: 5
            }, {
                F: "silam_eu",
                ef: 4
            }, {
                F: "goes16",
                ef: 7
            }, {
                F: "meteosat",
                ef: 0
            }, {
                F: "himawari",
                ef: 0
            }]
        },
        lb = mapOpts.iconAccumulationStart,
        Ia = ["temperature-2m", "rain-3h"],
        ma = [{
            id: "temperature",
            kind: "altitude",
            f: [{
                    id: "temperature-5cm",
                    gd: 1,
                    file: "teplota_surface",
                    label: "5cm"
                }, {
                    id: "temperature-2m",
                    gd: 2,
                    file: "teplota_2_m",
                    label: "2m",
                    ff: !0,
                    $f: !0
                }, {
                    id: "temperature-950hpa",
                    gd: 5,
                    file: "teplota_95000_pa",
                    o: "950hpa",
                    label: "950hpa"
                }, {
                    id: "temperature-925hpa",
                    gd: 6,
                    file: "teplota_92500_pa",
                    o: "925hpa",
                    label: "925hpa"
                }, {
                    id: "temperature-900hpa",
                    gd: 7,
                    file: "teplota_90000_pa",
                    o: "900hpa",
                    label: "900hpa"
                }, {
                    id: "temperature-850hpa",
                    gd: 8,
                    file: "teplota_85000_pa",
                    o: "850hpa",
                    label: "850hpa",
                    ff: !0
                }, {
                    id: "temperature-800hpa",
                    gd: 9,
                    file: "teplota_80000_pa",
                    o: "800hpa",
                    label: "800hpa"
                },
                {
                    id: "temperature-750hpa",
                    gd: 10,
                    file: "teplota_75000_pa",
                    o: "750hpa",
                    label: "750hpa"
                }, {
                    id: "temperature-700hpa",
                    gd: 11,
                    file: "teplota_70000_pa",
                    o: "700hpa",
                    label: "700hpa",
                    ff: !0
                }, {
                    id: "temperature-650hpa",
                    gd: 12,
                    file: "teplota_65000_pa",
                    o: "650hpa",
                    label: "650hpa"
                }, {
                    id: "temperature-600hpa",
                    gd: 13,
                    file: "teplota_60000_pa",
                    o: "600hpa",
                    label: "600hpa"
                }, {
                    id: "temperature-500hpa",
                    gd: 14,
                    file: "teplota_50000_pa",
                    o: "500hpa",
                    label: "500hpa",
                    ff: !0
                }, {
                    id: "temperature-300hpa",
                    gd: 15,
                    file: "teplota_30000_pa",
                    o: "300hpa",
                    label: "300hpa",
                    ff: !0
                }, {
                    id: "temperature-200hpa",
                    gd: 16,
                    file: "teplota_20000_pa",
                    o: "200hpa",
                    label: "200hpa"
                }, {
                    id: "temperature-10hpa",
                    gd: 17,
                    file: "teplota_1000_pa",
                    o: "10hpa",
                    label: "10hpa"
                }, {
                    id: "freezing",
                    gd: 18,
                    file: "nulova_izoterma",
                    description: "freezing"
                }
            ]
        }, {
            id: "feel",
            file: "teplota_pocit",
            description: "feel"
        }, {
            id: "rain",
            kind: "accumulation",
            f: [{
                id: "rain-1h",
                file: "srazky_1h",
                Ng: {
                    typed: ["srazky_1h", "srazky_type_1h"]
                }
            }, {
                id: "rain-3h",
                file: "srazky_3h",
                Ng: {
                    typed: ["srazky_3h", "srazky_type_3h"]
                },
                $f: !0
            }, {
                id: "rain-ac",
                file: "srazky_ac",
                Eh: !0
            }]
        }, {
            id: "radar",
            file: "srazky_dbz",
            Uf: !0,
            mg: 240
        }, {
            id: "satellite",
            file: "rgba",
            ug: !0,
            Uf: !0,
            mg: 240
        }, {
            id: "clouds",
            kind: "clouds",
            f: [{
                id: "clouds-total",
                file: "oblacnost",
                $f: !0
            }, {
                id: "clouds-low",
                file: "oblacnost_low"
            }, {
                id: "clouds-middle",
                file: "oblacnost_middle"
            }, {
                id: "clouds-high",
                file: "oblacnost_high"
            }]
        }, {
            id: "wind",
            kind: "altitude",
            f: [{
                id: "wind-10m",
                gd: 2,
                file: ["vitr_u_10_m", "vitr_v_10_m"],
                label: "10m",
                ff: !0,
                $f: !0
            }, {
                id: "wind-100m",
                gd: 3,
                file: ["vitr_u_100_m", "vitr_v_100_m"],
                o: "100m",
                label: "100m"
            }, {
                id: "wind-250m",
                gd: 4,
                file: ["vitr_u_250_m", "vitr_v_250_m"],
                o: "250m",
                label: "250m"
            }, {
                id: "wind-950hpa",
                gd: 5,
                file: ["vitr_u_95000_pa", "vitr_v_95000_pa"],
                o: "950hpa",
                label: "950hpa"
            }, {
                id: "wind-925hpa",
                gd: 6,
                file: ["vitr_u_92500_pa", "vitr_v_92500_pa"],
                o: "925hpa",
                label: "925hpa"
            }, {
                id: "wind-900hpa",
                gd: 7,
                file: ["vitr_u_90000_pa", "vitr_v_90000_pa"],
                o: "900hpa",
                label: "900hpa"
            }, {
                id: "wind-850hpa",
                gd: 8,
                file: ["vitr_u_85000_pa", "vitr_v_85000_pa"],
                o: "850hpa",
                label: "850hpa",
                ff: !0
            }, {
                id: "wind-800hpa",
                gd: 9,
                file: ["vitr_u_80000_pa", "vitr_v_80000_pa"],
                o: "800hpa",
                label: "800hpa"
            }, {
                id: "wind-750hpa",
                gd: 10,
                file: ["vitr_u_75000_pa", "vitr_v_75000_pa"],
                o: "750hpa",
                label: "750hpa"
            }, {
                id: "wind-700hpa",
                gd: 11,
                file: ["vitr_u_70000_pa", "vitr_v_70000_pa"],
                o: "700hpa",
                label: "700hpa",
                ff: !0
            }, {
                id: "wind-650hpa",
                gd: 12,
                file: ["vitr_u_65000_pa", "vitr_v_65000_pa"],
                o: "650hpa",
                label: "650hpa"
            }, {
                id: "wind-600hpa",
                gd: 13,
                file: ["vitr_u_60000_pa", "vitr_v_60000_pa"],
                o: "600hpa",
                label: "600hpa"
            }, {
                id: "wind-500hpa",
                gd: 14,
                file: ["vitr_u_50000_pa", "vitr_v_50000_pa"],
                o: "500hpa",
                label: "500hpa",
                ff: !0
            }, {
                id: "wind-300hpa",
                gd: 15,
                file: ["vitr_u_30000_pa", "vitr_v_30000_pa"],
                o: "300hpa",
                label: "300hpa",
                ff: !0
            }, {
                id: "wind-200hpa",
                gd: 16,
                file: ["vitr_u_20000_pa", "vitr_v_20000_pa"],
                o: "200hpa",
                label: "200hpa"
            }, {
                id: "wind-10hpa",
                gd: 17,
                file: ["vitr_u_1000_pa", "vitr_v_1000_pa"],
                o: "10hpa",
                label: "10hpa"
            }]
        }, {
            id: "gust",
            kind: "maximum",
            f: [{
                id: "gust",
                file: "vitr_naraz"
            }, {
                id: "gust-ac",
                file: "vitr_naraz_ac",
                Eh: !0
            }]
        }, {
            id: "pressure",
            file: "tlak"
        }, {
            id: "storm",
            kind: "storm",
            f: [{
                id: "cape",
                file: "cape",
                description: "cape"
            }, {
                id: "cape-shear",
                file: "cape_shear",
                description: "cape-shear"
            }, {
                id: "shear",
                file: "shear",
                description: "shear"
            }, {
                id: "cin",
                file: "cin",
                description: "cin"
            }, {
                id: "li",
                file: "li",
                description: "li"
            }, {
                id: "helicity",
                file: "helicity",
                description: "helicity"
            }]
        }, {
            id: "humidity",
            kind: "humidity",
            f: [{
                id: "humidity",
                gd: 1,
                file: "vlhkost",
                label: "2m",
                $f: !0
            }, {
                id: "humidity-900hpa",
                gd: 7,
                file: "vlhkost_90000_pa",
                o: "900hpa",
                label: "900hpa"
            }, {
                id: "humidity-850hpa",
                gd: 8,
                file: "vlhkost_85000_pa",
                o: "850hpa",
                label: "850hpa"
            }, {
                id: "humidity-700hpa",
                gd: 11,
                file: "vlhkost_70000_pa",
                o: "700hpa",
                label: "700hpa"
            }, {
                id: "dew",
                file: "dew_point",
                description: "dew"
            }]
        }, {
            id: "wave",
            kind: "wave",
            f: [{
                id: "wave",
                file: "swh",
                o: "wave-total"
            }, {
                id: "wind-wave",
                file: "shww",
                o: "wave-wind"
            }, {
                id: "wind-wave-period",
                file: "mpww",
                o: "wave-wind"
            }, {
                id: "swell",
                file: "shts",
                o: "wave-swell"
            }, {
                id: "swell-period",
                file: "mpts",
                o: "wave-swell"
            }]
        }, {
            id: "snow",
            kind: "snow",
            f: [{
                id: "snow",
                file: "snih"
            }, {
                id: "new-snow-ac",
                file: "novy_snih_ac",
                Eh: !0
            }]
        }, {
            id: "air",
            kind: "air",
            f: [{
                id: "pm25",
                file: "pm25",
                description: "pm25"
            }, {
                id: "pm10",
                file: "pm10",
                description: "pm10"
            }, {
                id: "no2",
                file: "no2",
                description: "no2"
            }, {
                id: "so2",
                file: "so2",
                description: "so2"
            }, {
                id: "o3",
                file: "o3",
                description: "o3"
            }, {
                id: "dust",
                file: "dust",
                description: "dust"
            }, {
                id: "co",
                file: "co",
                description: "co"
            }]
        }],
        Ja = {
            "10m": {
                kind: "wind",
                ve: 2,
                xe: "vitr_u_10_m",
                ye: "vitr_v_10_m"
            },
            "100m": {
                kind: "wind",
                ve: 2,
                xe: "vitr_u_100_m",
                ye: "vitr_v_100_m"
            },
            "250m": {
                kind: "wind",
                ve: 2,
                xe: "vitr_u_250_m",
                ye: "vitr_v_250_m"
            },
            "950hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_95000_pa",
                ye: "vitr_v_95000_pa"
            },
            "925hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_92500_pa",
                ye: "vitr_v_92500_pa"
            },
            "900hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_90000_pa",
                ye: "vitr_v_90000_pa"
            },
            "850hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_85000_pa",
                ye: "vitr_v_85000_pa"
            },
            "800hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_80000_pa",
                ye: "vitr_v_80000_pa"
            },
            "750hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_75000_pa",
                ye: "vitr_v_75000_pa"
            },
            "700hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_70000_pa",
                ye: "vitr_v_70000_pa"
            },
            "650hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_65000_pa",
                ye: "vitr_v_65000_pa"
            },
            "600hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_60000_pa",
                ye: "vitr_v_60000_pa"
            },
            "500hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_50000_pa",
                ye: "vitr_v_50000_pa"
            },
            "300hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_30000_pa",
                ye: "vitr_v_30000_pa"
            },
            "200hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_20000_pa",
                ye: "vitr_v_20000_pa"
            },
            "10hpa": {
                kind: "wind",
                ve: 5,
                xe: "vitr_u_1000_pa",
                ye: "vitr_v_1000_pa"
            },
            "wave-total": {
                kind: "wave",
                zg: Da,
                qg: "_water",
                oh: [],
                height: "shww",
                direction: "mdww",
                threshold: 1,
                g: {
                    height: "shts",
                    direction: "mdts",
                    oh: [1, 2],
                    threshold: 2,
                    rj: !0
                }
            },
            "wave-wind": {
                kind: "wave",
                zg: Da,
                qg: "_water",
                oh: [],
                height: "shww",
                direction: "mdww",
                threshold: 1
            },
            "wave-swell": {
                kind: "wave",
                zg: Da,
                qg: "_water",
                oh: [1, 2],
                height: "shts",
                direction: "mdts",
                threshold: 2,
                rj: !0
            }
        },
        na = {
            length: {
                mm: {
                    sd: 1,
                    precision: .1,
                    A: [0, 100, 200, 500, 1E3, 2E3, 4E3, 6E3, 8E3, 1E4, 15E3, 2E4, 3E4, 4E4, 5E4]
                },
                inch: {
                    sd: .0393700787,
                    precision: .01,
                    A: [0, 254, 508, 1016, 1524, 2032, 3048, 4064, 5080, 10160, 15240, 20320, 25400, 38100, 50800]
                }
            },
            blanket: {
                cm: {
                    sd: 1,
                    precision: 1,
                    A: [0, 1E3, 5E3, 1E4, 15E3, 2E4, 25E3, 3E4, 4E4, 5E4, 6E4, 8E4, 1E5, 15E4, 2E5]
                },
                inch: {
                    sd: .393700787,
                    precision: .1,
                    A: [0, 1016,
                        2540, 10160, 15240, 20320, 25400, 30480, 35560, 40640, 50800, 76200, 101600, 152400, 203200
                    ]
                }
            },
            height: {
                m: {
                    sd: 1,
                    precision: .1,
                    A: [0, 500, 1E3, 1500, 2E3, 2500, 3E3, 4E3, 5E3, 6E3, 8E3, 1E4, 12E3, 14E3]
                },
                ft: {
                    sd: 3.2808399,
                    precision: .1,
                    A: [0, 457, 609, 1219, 1828, 2438, 3048, 3962, 4876, 6096, 7924, 9753, 12192, 14630]
                }
            },
            time: {
                sec: {
                    sd: 1,
                    precision: 1,
                    A: [0, 2E3, 4E3, 6E3, 8E3, 1E4, 12E3, 14E3, 18E3, 2E4, 22E3]
                }
            },
            reflectivity: {
                dbz: {
                    sd: 1,
                    precision: 5,
                    A: [0, 5E3, 1E4, 15E3, 2E4, 25E3, 3E4, 35E3, 4E4, 45E3, 5E4, 55E3, 6E4]
                }
            },
            temperature: {
                "\u00b0C": {
                    sd: 1,
                    precision: 1,
                    A: [-4E4, -3E4, -2E4, -15E3, -1E4, -5E3, 0, 5E3, 1E4, 15E3, 2E4, 25E3, 3E4, 4E4, 5E4]
                },
                "\u00b0F": {
                    $i: function (a) {
                        return 9 * a / 5 + 32
                    },
                    precision: 1,
                    A: [-4E4, -28889, -23333, -17778, -12222, -6667, -1111, 4444, 1E4, 15556, 21111, 26667, 32222, 37778, 48889]
                }
            },
            speed: {
                "km/h": {
                    sd: 1,
                    precision: 1
                },
                "m/s": {
                    sd: 1 / 3.6,
                    precision: 1,
                    A: [0, 7200, 14400, 21600, 28800, 36E3, 43200, 50400, 64800, 79200, 93600, 108E3, 122400, 136800, 151200]
                },
                mph: {
                    sd: .62137119223,
                    precision: 1,
                    A: [0, 8047, 16093, 24140, 32187, 40234, 48280, 56327, 64374, 72420, 80467, 96561, 112654, 128748, 144841]
                },
                kt: {
                    sd: .539956803,
                    precision: 1,
                    A: [0, 9260, 18520, 27780, 37040, 46300, 55560, 64820, 74080, 83340, 92600, 101860, 111120, 129640, 148160]
                },
                bft: {
                    $i: function (a) {
                        return Math.round(Math.min(Math.pow(a / 3.0096, 2 / 3), 12))
                    },
                    precision: 0,
                    A: [1E3, 5E3, 11E3, 19E3, 28E3, 38E3, 49E3, 61E3, 74E3, 88E3, 102E3, 117E3, 118E3]
                }
            },
            "speed-shear": {
                "m/s": {
                    sd: 1,
                    precision: 1,
                    A: [5E3, 8E3, 11E3, 14E3, 17E3, 2E4, 23E3, 26E3, 29E3, 32E3, 35E3, 4E4, 5E4]
                }
            },
            energy: {
                "J/kg": {
                    sd: 1,
                    precision: 100,
                    A: [0, 2E5, 4E5, 6E5, 8E5, 1E6, 12E5, 14E5, 16E5, 18E5, 2E6, 25E5, 3E6, 4E6, 5E6]
                }
            },
            "energy-inverse": {
                "J/kg": {
                    sd: 1,
                    precision: 10,
                    A: [0, -2E4, -4E4, -6E4, -8E4, -1E5, -12E4, -14E4, -16E4, -18E4, -2E5, -25E4, -3E5, -4E5, -5E5]
                }
            },
            "energy-derived": {
                "m\u00b2/s\u00b2": {
                    sd: 1,
                    precision: 10,
                    A: [0, 2E4, 4E4, 6E4, 8E4, 1E5, 12E4, 14E4, 16E4, 18E4, 2E5, 25E4, 3E5, 4E5, 5E5]
                }
            },
            "energy-shear": {
                "m\u00b2/s\u00b2": {
                    sd: 1,
                    precision: 10,
                    A: [0, 1E5, 2E5, 3E5, 5E5, 7E5, 9E5, 11E5, 13E5, 15E5, 2E6, 25E5, 3E6]
                }
            },
            "temperature-index": {
                "\u00b0C": {
                    sd: 1,
                    precision: 1,
                    A: [-9E3, -8E3, -7E3, -6E3, -5E3, -4E3, -3E3, -2E3, -1E3, 0, 1E3, 2E3, 4E3, 8E3, 12E3]
                }
            },
            percents: {
                "%": {
                    sd: 1,
                    precision: 10,
                    A: [0, 1E4, 2E4, 3E4, 4E4, 5E4,
                        6E4, 7E4, 8E4, 9E4, 1E5
                    ]
                }
            },
            pressure: {
                hPa: {
                    sd: 1,
                    precision: 1
                },
                inHg: {
                    sd: .0295299830714,
                    precision: .1
                },
                mmHg: {
                    sd: .750061561303,
                    precision: 1
                }
            },
            "air-micrograms": {
                "\u00b5g/m\u00b3": {
                    sd: 1,
                    precision: 1,
                    A: [0, 5E3, 1E4, 2E4, 4E4, 6E4, 8E4, 1E5, 15E4, 2E5]
                }
            },
            "air-parts": {
                ppbv: {
                    sd: 1,
                    precision: 10,
                    A: [0, 1E5, 2E5, 4E5, 6E5, 8E5, 1E6, 15E5, 2E6, 25E5]
                }
            }
        },
        mb = {
            metric: {
                length: "mm",
                blanket: "cm",
                height: "m",
                temperature: "\u00b0C",
                speed: "km/h",
                pressure: "hPa"
            },
            imperial: {
                length: "inch",
                blanket: "inch",
                height: "ft",
                temperature: "\u00b0F",
                speed: "mph",
                pressure: "inHg"
            }
        },
        nb = ismobile ? "12px" : "13px",

        optLayer = {
            temperature: {
                min: -36E3,
                max: 5E4,
                step: 500,
                scale: "wq044uwq5p0ywqcohjwqi9dnwqnu9rwqnta7wqnsanwqnrb3wqnqbjwqnpbzwqnocfwqnncvwqnmdbwqni7zwqne2nwqn9q7wqn5kvwqn1fjwqmxa7wqmsxrwqmosfwq78j8wprsa1wpaxgdwovh76woln7vwoaeo3wo0koswnpc50wncpezwn1hgjwmouqiwmc80hwm2e16wlsk1vwlhbazwl7hbowkcl0wwjgacswile20whp36swhw50nwi371mwia8vhwihapcwitzljwj6oovwjjdl2wjw2h9wjxhg6wjywf3wjywmgwk0bldwjyxf7wjxjg5wjuqpiwjtcjcwjp5tnwjkywuwjfdmpwjb6pwwj8f5xwj491iwj1haewixb5zwj05hewj2zsuwj4fjtwj79v8wjbir1wjfrfqwjilr3wjmufswjo9l7wjpoqlwjppbkwjr4gywjobx6wjljdewjhc96wjejpewjsll2wk6ngpwkjaktwkxcggwlbeq6wlqvd7wm4xmxwmizpiwmx1s4wncimawnqkovwo4mrhwofvp8woppvewp0yt5wpaszbwpgeuvwpm0jawpq7uewpvtitwpvsqdwpvrqtwpvqydwpvpytwpvozawpvnzrwpu88owpu795wpu69mwpu5a4wpu43hwpu33ywpu24fwpu14xwpslduwpskebwpsjeswpsifawpshfrwpsgg8wpplxpwpmrf7wpjwpkwph271wpe7oiwpbd60wp8inhwp5o4ywovtdbwoncz0wodi7dwo3n8mwny0yrwntt28wno6sdwnikbewnebmhwna34own5ufrwn1lquxgurf8y0obpuyuhhe8zeb1ouzdzt55zdoklfzdbxa6zd0oqgzcxvlgzcv2ggzcs94bzcqujrzco1erzcl89rzciexmzcflsmzccsnszc9zbvzc7671zc5rfkzc2yaqzc04yszbxbtzzbuii1zbnh9gzbgg0vzb9esazb2djpzatxqozamwi3zafv9iza8u0x",
                opacity: .65
            },
            cape: {
                min: 0,
                max: 5E6,
                step: 1E5,
                scale: "037kp9f2lnd9kci6r5pc3wl4ubefnoub0k3rubait0ubq3dkubudequbhsn6ud0le8uem8naug7vp9uhe1x3uhz2gluhyywluhxg6xuhxc1quhvtc3uhvpe0uhkb4tuh8x2qug6w6euflt96uf4uomwwep8uxg4216xzutdxy9kkldytbby4zd0oqgzcwh0xzcs94azco1eszcjti5zcflsmzcbdwazc75zyzc2yapzbyqedzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .7
            },
            "cape-shear": {
                min: 0,
                max: 3E6,
                step: 5E4,
                scale: "037kp9a2syh9kcdxn1kccko3kcb7p4pbola8ub0k3rubix0puc1a4suci8haud0le8udennyudu4azue86kpuem8naufbjnmug0unzugoqwruhe1x3uhjnsnuhp9h2uhtgs6uhz2gluhyzhzuhywjeuhxf0cuhxc1quhufk6uhriviuhn7thuhkb4tuhg2fyuhafdruh66owuh0jmpugwaxuugqnoiugmf6ruggrxgugcjfpug6w6euq0uw4uzteu9v9ndjzv9hqosvjbpeivt49cow2y82dwcs6kzwmkqq8wwep8ux608jqxfkd33xp5wdzxyq14fxybz1ky7xi5cyhhmvsyr366oz0naq1za8u0x",
                opacity: .7
            },
            shear: {
                min: 5E3,
                max: 5E4,
                step: 1E3,
                scale: "037kp9f2lnd9hukf4vkci6r5mubr1xpc3wl4rtp7smubait0ubkg3vubudequcfhi1ud0le8uem8nbug7vp9uh46d5uhz2gluhyypjuhxg6xuhxe7wuhxc1quhxa2puhvtc3uhq2c0uhkb4tugwaxuug6w6eufx200uflt96ufdc2guf4uomuetlqqueicsuue1hs0udkmyaud3rxgucmwwmv6hh5mwabmsexe5sm9y80cv9zbuii1zbj9cxzb807tzavcb5zak361za8u0x",
                opacity: .7
            },
            cin: {
                min: -5E5,
                max: 0,
                step: 1E4,
                scale: "za8u0xzaegp1zak361zappu5zavcb5zb2djpzb807tzbdmotzbj9cxzbovtxzbuii1zbyqedzc2yapzc75zyzcbdwazcflsmzcjti5zco1eszcs94azcwh0xzd0oqgytbby4y9kkldxzutdxxg4216wwep8uuf4uomuflt96ug6w6euh8x2quhkb4tuhvpe0uhvtc3uhxc1quhxg6xuhyywluhz2gluhe1x3ug7vp9uem8naud0le8ubhsn6ubudequbq3dkubait0ub0k3rubefnopc3wl4kci6r5f2lnd9037kp9",
                opacity: .7
            },
            li: {
                min: -9E3,
                max: 12E3,
                step: 1E3,
                scale: "za8u0xzbuii1zcflm9zd0oqgzexjkmzfzl2ezhd00tzhoi83zhq52xzhrrclzg0kl9zctaa8zbn2aqzbis9kzb37p0zat8zrzb74jozbpad4zbw9f5zbs0b1zad8j4z9l10k",
                opacity: .6
            },
            helicity: {
                min: 0,
                max: 5E5,
                step: 1E4,
                scale: "037kp9f2lnd9kci6r5pc3wl4ubefnoub0k3rubait0ubq3dkubudequbhsn6ud0le8uem8naug7vp9uhe1x3uhz2gluhyywluhxg6xuhxc1quhvtc3uhvpe0uhkb4tuh8x2qug6w6euflt96uf4uomwwep8uxg4216xzutdxy9kkldytbby4zd0oqgzcwh0xzcs94azco1eszcjti5zcflsmzcbdwazc75zyzc2yapzbyqedzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .7
            },
            wind: {
                min: 0,
                max: 14E4,
                step: 500,
                scale: "f2lnd9fmkuc1g6lfo4gqkmmwhajtlnhukf4vi4k0irioj7hij8iegajsizsdkci6r5l6gz3mmady9en4cqlvo89propc83hxq65h2tra3ut2se0tyvt7zmbbubwlh4ubv7axubsekaubr070ubpm0tubo7umublf3zubk0xsubimkiubfttvubefnoubd1okubbnphuba9qdub8vr9ub7hzaub6406ub4q12ub3c1yub1y2vub0k3rub1z2dub1znnub3em9ub4trzub68qmub694sub7oaiub9394ub93ueubait0ubbxrlubdcq6ubervwubg6uhubj0diubkfc3ubluaoubn9geubooezubq3dkubq3kjubribxubriq0ubriwyubsxodubsxvcubsy2aubsygdubud7rubudequbsz1bubrknwubq6hkubos45ubosb6ubndxrublzkcubkle0ubj70lubhsn6ubnewzubt1dxubynnquc49xkuc9wehuce43uucjqdoucpcnhucuz4fud0le8ud67v3udbubyudhgstudn39oudu4azudzqruue5d8pueazpkuegm6fuem8nauerv45uexhl0uf341vuf8qiquffrk2ufldttufr0aoufwmrjug298eug7vp9ugc3louggbb0ugkj7fugoqwrugsyt6ugx6pluh1eexuh5mbcuh9u0ouhe1x3uhguuvuhi987uhl25yuhmgjauhp9h2uhqnueuhtgs6uhuv5huhxo39uhz2gluhz22duhz1o5uhz1h1uhz12tuhz0oluhz0aduhyzw5uhyzp1uhyzatuhyywluhyyiduhyy46uhyxpyuhyxbruhywxjuhxhrruhxhdkuhxgzcuhxgl5uhxg6xuhxfsquhxfeiuhxf0buhxem3uhxe7wuhxdmkuhxd8duhxcu5uhxcfyuhxc1quhxbnjuhxb9buhxav4uhxagwuhxa2puhvuwxuhvuiquhvu4iuhvtqbuhvtc3uhvsxwuhvsjouhvs5huhvrr9uhvrd2uhvqyuuhvqknuhvq6fuhvps8uhvpe0uhua8auhsv2kuhsuhauhrfbkuhq0czuhol79uhn61juhn5g9uhlqajuhkb4tuhivz3uhhgtduhhgf7uhg19huhem3suhd6y2uhbrscuhbre6uhac8guh8x2quh4oz5uh1vg0ugxnjiugtffxugqlwsugmdt7ugi5pmugdxt4ugb49zug6w6eug5hlxug2oh0ug19peufygkhufx200ufu8v3ufsuamufq0ykufome3uflt96upjzoauzi63dv9exy1v9dizcvjbplkvt9w0ow382frwd4uafwn30piwx174mwwydzpwwwz84wwu638wwsrbnwwpy6qwwn51twwlqa8wwix5cwwhidrwwep8uwwahjgww4v9mww0nk7wvwfutwvs85fwvmlohwvidz3wve69owv8jzuwv4cagwv2xpxwv04kxwuyptawuvwoawuui3rwuroyswuqae8wunh25wum2hlwuj9cmx4hg60xee87uxocf18xy9732xy7sioy84krlyi2rdvyrzjmtz1xq93zbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .7
            },
            "rain-1h": {
                min: 0,
                max: 5E4,
                step: 100,
                scale: "037kp9deo32lhulub5km9eifnnwk3iqfk4asr9hk1tsdfzr2t7dfi2u1c9tjuv9pkkuvb4q4uvdyn8uvfdsruvi7pvuvjmvfuvl20zuvnvy3uvpb3muvs50quvtk6auvs5svuvqrfguvpd94uvnyvpuvnz2quvmkpbuvl6bwuvjs5kuvids5uvgzequvs85euw3h37uweptvuwpykkux17icuxcg90uxnozpuxyxqduya6o6uylfeuuyr1vpuywockuz2atfuz7xaauzeybmuzkklduzq728uzvtj3v01fzyv072gtv0bad8v0fi2kv0jpyzv0nxobv0s5kqv0wdh5v10l6hv14t2wv190s8v1d8onv1g187v1hf7bv1k7xyv1llx2v1oegmv1psfqv1skzav1tz5hv1wrp1v1y5o5v1y5h1v1y52uv1y4vqv1y4hiv1y4afv1y43bv1y3p3v1y3hzv1y33sv1y2wov1y2pkv1y2bdv1y249v1y1q1v1y1iyv1wmrev1wmd6v1wm62v1wlrvv1wlkrv1wldnv1wkzgv1wkscv1wke4v1wk71v1wjzxv1wjlpv1wjelv1wj0ev1witav1wim6v1wif2v1wif3v1wi7zv1wi0vv1whtrv1whmnv1whfkv1whfkv1wh8gv1wh1cv1wgu8v1wgn5v1wgn5v1wgg1v1wg8xv1wg1tv1wfuqv1wfnmv1wfnmv1wfgiv1wf9ev1wf2bv1wev7v1wev7v1v03nv1uzwjv1uzpgv1uzicv1uzb8v1uzb8v1uz44v1uyx1v1uypxv1uyitv1uybpv1uybpv1uy4mv1uxxiv1uxqev1uxjav1uxjav1uxc7v1ux53v1uwxzv1uwqvv1uwjrv1uwjsv1uwcov1uw5kv1uvygv1uvyhv1uvrdv1th6yv1tgzuv1tgzvv1tgsrv1tglnv1tglov1s1u4v1s1u5v1s1n1v1s1fxv1s1fyv1s18uv1qmofv1qmhbv1qmhcv1qma8v1qm34v1qm35v1p7blv1p7bmv1p74iv1p74jv1p6xfv1p6qbv1p6qcv1nrysv1nrytv1nrrpv1nrklv1nrkmv1nrdiv1mct3v1mclzv1mcm0v1mcewv1mc7sv1mc7tv1kxg9v1kxgav1kx96v1kx22v1kx23v1kwuzv1jiakv1ji3gv1ji3hv1jhwdv1jhp9v1jhpav1jhi6v1i2xrv1i2qnv1i2qov1i2jkv1i2jkv1i2chv1gnkxv1gnkyv1gnduv1gnduv1gn6rv1gn6rv1f8f8v1f884v1f885v1f811v1f811v1f7tyv1dt9iv1dt2fv1dt2fv1dsvcv1dso8v1dso8v1dsh5v1cdwpv1cdpmv1cdpmv1cdiiv1cdijv1cdbfv1ayjwv1ayjwv1ayctv1ayctv1ay5pv1ay5qv19je6v19j73v19j73v19izzv19j00v19iswv1848hv1841dv1841ev183uav16p9uv16p2qv15ai9v15ai9v13vqpv13vqpv12gz4v12gz4v112eov1127kv0znn3v0znn3v0y8vjv0wub3v0wub2v0vfjiv0vfjiv0u0z2v0u0rxv0sm7hv0sm0dv0r7fxv0r7fwv0psocv0psocv0oe3wv0mzccv0mzcbv0lkrvv0lkkrv0k60bv0k5t6v0ir8qv0ir8qv0hch6v0hch5v0fxwpv0ej55v0ej55v0d4kov0d4dkv0bpt4v0bpt4v0ab1jv0ab1jv08w9zv08w9zv07hpiv07hiev062xyv062xyv04odiv04odhv04odhv04odhv039t1v039t0v039t0v01v8kv01v8kv01v8jv00go3v00ggzv00ggzv00ggyuzz1wiuzz1wiuzz1wiuzxnc1uzxnc1uzxnc1uzw8rluzw8rkuzw8rkuzw8rkuzuu74uzuu74uzuu73uztfmnuztfmnuztfmnuzs126uzs126uzs126uzs126uzqmhpuzqmhpuzqmaluzp7q5uzp7q4uzp7q4uznt5ouznt5ouznt5nuznt5nuzmel7uzmel7uzmel6uzl00quzl00quzjlgav9j6myv9hs2hv9hrvdvjfyopvjfyhlvjejx4vte53svtcqjcvtbbrsw3ax5jw39idzw39idzwd7p7bwd7p06wd6afqwn4h1ywn4h1ywn32adwn32adwx18wlwx18wlwwzu50x6zfisx6y0ycx6wm6sxgw7kkxgusszxgusszxqszf7xqszf7xqrknmy0r61ey0pr9uy0ocpeyanxw1yamjblyamjblykkpxtykkpxsykjb68ykhwlsyuhhsgyug37zyug30vz4e9u7z4e9n3z4cv2mzecg9azeb1ouze9n4eze9n4dze88jxze6tzgze6tzgze5fezze40ujze40uize2ma2ze17pmze17plzdzt55zdyekozdyekozdx007zdvlfrzdvlfrzdu6vazdssauzdssatzdrdqdzdpz5wzdpz5wzdoklfzdoklfzdn5tvzdlr9ezdlr9ezdkcoxzdiy4hzdiy4gzdhjk0zdg4zjzdg4zjzdeqf3zddbumzddbumzdbxa5zdaippzdaipozd9458zd7pkszd7pkrzd6b0bzd4wfuzd4wfuzd3hvdzd23axzd23awzd0oqgzcza60zcza5zzcxvljzcxvljzcwgtzzcv29izcv29izctnp2zctnp1zcs94lzcquk5zcquk4zcpfskzcpfskzco184zcmmnnzcmmnnzcl837zcl836zcjtiqzcier6zcier5zch06pzch06pzcflm9zce71szce71szccshczccshbzcbdprzc9z5bzc9z5azc8kkuzc8kkuzc760ezc5rfxzc5rfxzc4codzc4coczc2y3wzc1jjgzc1jjfzc04yzzc04yzzbyqejzbxbmyzbxbmyzbvx2izbvx2hzbuii1",
                opacity: .8
            },
            "rain-ac": {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "037kp9deo32lhulub5qfk4asuv9pkkuvtk6auvqrfguvnyvpuvmkpbuvjs5kuvgzequw3h37uwpykkuxcg90uxyxqduylfeuuywockuz7xaauzkklduzvtj3v072gtv0fi2kv0nxobv0wdh5v14t2wv1d8onv1hf7bv1llx2v1psfqv1tz5hv1y5o5v1y4vqv1y43bv1y33sv1y2bdv1y1iyv1wm62v1wldnv1wke4v1wjlpv1witav1wi0vv1wh8gv1wgg1v1wfnmv1wev7v1uzb8v1uyitv1uxqev1uwxzv1uw5kv1tgzuv1s1u4v1s18uv1qm34v1p74jv1nrytv1mct3v1mc7tv1kx23v1jhwdv1i2qnv1gnkxv1gn6rv1f811v1dsvcv1cdpmv1ayjwv1ay5qv19j00v183uav13vqpv1127kv0wub2v0sm7hv0psocv0lkkrv0hch6v0d4kov0ab1jv062xyv04odhv01v8kv00ggyuzxnc1uzw8rkuztfmnuzs126uzp7q4uznt5nuzl00qvjfyopvtbbrswd7p06wn32adx6y0ycxqszf7y0ocpeykkpxsyug30vzeb1ouze9n4eze9n4dze88jxze6tzgze6tzgze5fezze40ujze40uize2ma2ze17pmze17plzdzt55zdyekozdyekozdx007zdvlfrzdvlfrzdu6vazdssauzdssatzdrdqdzdpz5wzdpz5wzdoklfzdoklfzdn5tvzdlr9ezdlr9ezdkcoxzdiy4hzdiy4gzdhjk0zdg4zjzdg4zjzdeqf3zddbumzddbumzdbxa5zdaippzdaipozd9458zd7pkszd7pkrzd6b0bzd4wfuzd4wfuzd3hvdzd23axzd23awzd0oqgzcza60zcza5zzcxvljzcxvljzcwgtzzcv29izcv29izctnp2zctnp1zcs94lzcquk5zcquk4zcpfskzcpfskzco184zcmmnnzcmmnnzcl837zcl836zcjtiqzcier6zcier5zch06pzch06pzcflm9zce71szce71szccshczccshbzcbdprzc9z5bzc9z5azc8kkuzc8kkuzc760ezc5rfxzc5rfxzc4codzc4coczc2y3wzc1jjgzc1jjfzc04yzzc04yzzbyqejzbxbmyzbxbmyzbvx2izbvx2hzbuii1",
                opacity: .8
            },
            radar: {
                min: 0,
                max: 6E4,
                step: 1E3,
                scale: "037kp93f2pal6qxtvxa2syh9deo32leinvkmfmno2ngqm1t4hulub5jsdf3qm036pno7ucovqfk4asrjh60wsnfmbgtrcnuguv9pkkuvfdlsuvjmvfuvpawnuvtk6auvqrmiuvnz2quvjryiuvgzequw93czux17icuxtbgluylfeuuyzhhguzeybmuzt0e7v072gtv0ibekv0s5kqv13eihv1d8onv1irllv1mvqzv1senwv1witav1tmbqv1qpn2v1mel1v1jhwdv16sm7v0vhpev0isf8v062xyw3oz1cx799p6yas5lgzeb1ouzdzt55zdoklfzdbxa6zd0oqgzee63uzft28szh6jm5zik0zj",
                opacity: .8
            },
            pressure: {
                min: 94E4,
                max: 1054E3,
                step: 300,
                scale: "zhw1ymzhyui8zi08hdzi3183zi5trpzi8mbbzia0agzicsu2ziflkszigzjxzijs3jzijrb3zijqinzijpq7zijoxrzijo5bzijncvzijmkfzijlrzzijkzjzijk73zijgu7zijdhbzija4fzij6rjzij3enzij01rziiwovziitbzziipz3ziimm7yydtkrye7lyuy42eb6xjw6p9wzrdntwfl61wvvgd0gvba5ejv14xqvugyq4yuguifjugqaq4ugm30pughvbaugdnlvug9fwgug5871ug10hmufwss7ufsl2sufodkhufirhpufejzeuf8xwmuf4qebuez44fueuwm4uepajcuel311uefgy9ueb98uue71jfue2tu0udym4ludvsznudrl34udnddpudj5oaudexyvudaq9gucy3ciuclg8huc8tbjubw67iubjjakub6w6iuau99luahm5jua4z8mu9sc4ku9v5npu9xz6uua0sq0ua3m95ua6fzeua99ijuac31ouaewkuuahq3zuakjn4uaq6pfuauf06ub022hub4akcub9xmnubfkhtubjszoubpg1zubtocqubzbf1ubzbm9uc0q6suc0qe0uc0ql7uc25cvuc25czuc25k6uc25reuc3kbxuc3kj5uc3kqauc26cyuc26k3uc0s6suc0sdxubzdthubze0mubxznbubxzufubwlh4ubv7axubsekaubr070ubpm0tubo7umublf3zubk0xsubimkiubfttvubefnoubd1okubbnphuba9qdub8vr9ub7hzaub6406ub4q12ub3c1yub1y2vub0k3rub1z2dub1znnub3em9ub4trzub68qmub694sub7oaiub9394ub93ueubait0ubbxrlubdcq6ubervwubg6uhubj0diubkfc3ubluaoubn9geubooezubq3dkubq3kjubribxubriq0ubriwyubsxodubsxvcubsy2aubsygdubud7rubudequbsz1bubrknwubq6hkubos45ubosb6ubndxrublzkcubkle0ubj70lubhsn6ubnewzubt1dxubynnquc49xkuc9wehuce43uucjqdoucpcnhucuz4fud0le8ud67v3udbubyudhgstudn39oudu4azudzqruue5d8pueazpkuegm6fuem8nauerv45uexhl0uf341vuf8qiquffrk2ufldttufr0aoufwmrjug298eug7vp9ugc3louggbb0ugkj7fugoqwrugsyt6ugx6pluh1eexuh5mbcuh9u0ouhe1x3uhguuvuhi987uhl25yuhmgjauhp9h2uhqnueuhtgs6uhuv5huhxo39uhz2gluhz22duhz1o5uhz1h1uhz12tuhz0oluhz0aduhyzw5uhyzp1uhyzatuhyywluhyyiduhyy46uhyxpyuhyxbruhywxjuhxhrruhxhdkuhxgzcuhxgl5uhxg6xuhxfsquhxfeiuhxf0buhxem3uhxe7wuhxdmkuhxd8duhxcu5uhxcfyuhxc1quhxbnjuhxb9buhxav4uhxagwuhxa2puhvuwxuhvuiquhvu4iuhvtqbuhvtc3uhvsxwuhvsjouhvs5huhvrr9uhvrd2uhvqyuuhvqknuhvq6fuhvps8uhvpe0uhua8auhsv2kuhsuhauhrfbkuhq0czuhol79uhn61juhn5g9uhlqajuhkb4tuhivz3uhhgtduhhgf7uhg19huhem3suhd6y2uhbrscuhbre6uhac8guh8x2quh4oz5uh1vg0ugxnjiugtffxugqlwsugmdt7ugi5pmugdxt4ugb49zug6w6eug5hlxug2oh0ug19peufygkhufx200ufu8v3ufsuamufq0ykufome3uflt96ufkeaiufizbtufg5spufequ0ufdc2gufbx3sufai53uf7olzuf69nauf4uomup1mxhuyztjov8wlskv8v70zvirz9uvsoripw2my4wwcjqdswmhwzzwwep8uwwahjgww4v9mww0nk7wvwfutwvs85fwvmlohwvidz3wve69owv8jzuwv4cagwv2xpxwv04kxwuyptawuvwoawuui3rwuroyswuqae8wunh25wum2hlwuj9cmwuhus8wuf1gawudmvwwuatjywu9ezkwu6lupwu5737wu2dydwu0z6vwty621wtsjdxwtmwwxwtha8twtbnrtwt613pwsyzv5wstde5wsnqq1wsi491wschkx",
                opacity: .7
            },
            clouds: {
                min: 0,
                max: 99E3,
                step: 9900,
                scale: "ixmsick2u8d7ky22n6lt9x49mohrlcntp793oox1q7r6w7i7tys5bzwqo35rzik0zj",
                opacity: .65
            },
            humidity: {
                min: 0,
                max: 99E3,
                step: 1E3,
                scale: "hzqgxphzqgxphzqgxphzqgxphzqgxpi9q2bhi9q2bhi9q2bhi9q2bhijpnp9ijpnp9ijpnp9ijpnp9ijpnp9itp931itp931itp931itp931j3ougtj3ougtj3ougtj3ougtj3ougtjdofuljdofuljdofuljdofuljno18djno18djno18djno18djxnmm5jxnmm5jxnmm5jxnmm5jxnmm5k7n7zxk7n7zxk7n7zxk7n7zxkhmtdpkho8cjkrqn9mkrs28gl1t2s7lbvhp9lbwwo4llxx0qllzbzllw1qwnm62r9am64684mg6lcbmg80b5mq90nsn0bfkun0cujonaduwbnaf9v5nkhozcnuipbynuk4ato4mj7vo4ny6qoeoyjcoordgfoossf9oytsz0p8utbmp8xmuxpiyn7jpsy8lbq2xtz3qcxfcvqwwm4fr6w7i7rgvsvzrqve9rsaul1bsku6f3sutrsvt4td6ntosjy7tys5bzu8rqpruirc3jv2qiv3vcq48vvmppmnvwpb0fwgohrzwqo35rx0nojjxan9xbxumgovy4m22nyelngfyol8u7z8kflrzik0zj",
                opacity: .7
            },
            freezing: {
                min: 0,
                max: 6E6,
                step: 1E5,
                scale: "037kp9huhl71nodbchthxtbszb74jozat8zrzb37p0zbis9kzbn2aqzbahj6zctaa8zeexjazg0kl9zh6qt3zhrnslzhq52xzhq0xqzhoi83zhoea0zhd00tzh1lyqzgukc0zgm4bxzgf2p7zg6mp4zfzl2ezfvdd0zfr5ghzfmxr3zfipukzfei56zexmc3zegqj0zdygcmzdhkjjzd0oqgzcwh0xzcs94azco1eszcjti5zcflsmzce788zcbdwazc9zbwzc75zyzc5rfkzc2yapzc1jj7zbyqedzbxbmvzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .6
            },
            snow: {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "02ycnsnqxb7atif4knthr5jrth1ryfw8nu7yza833pzaqb3xzb74jozat133zadj22zb1eplzbpad4zbqojazbth9xzbuv8zzbw9f5zbnstozbfc87zb5gv5zax09ozasrrnzaoj9mzalpj6zahh15zad8j4za7lguza1yejz9wb55z9qo2uz9l10kzaab1jzazl2izbov3izce54hzd3f5gzdbukazdk9z4zdrb0lzdzqffze85u9zedrx1zehzfczenli4zert0fzexfabzf1msmzf78vezfbgdpzfh2ghzfl9yszfpho7zftpdmzfxx31zg24sgzg6chvzgak7azgerwpzgizm4zgn7bjzgrf0yzgrgluzgq3tdzgq5e9zgq769zgq8r5zgovrkzgoxjkzgoz4gzgnmbzzgnnwvzgma4uzgkwjxzgjirwzgi4zvzgi5zfzggs7ezgfefdzge0nczgcn2fzgb9aezgconbzgfikpzggxxmzgjrv0zgl77xzgo15bzgpgi8zgsafmzgtpsjzgwjx1zgxz9yzgzemvzh28k9zh3nx6zh6hukzh7x7hzhar4vzhc6hszhf0f6zhgfs3zhgfz7zhgfz7zhgg6bzhhuqszhhuxwzhhuxwzhhv50zhhv50zhhvc4zhj9wlzhja3pzhja3pzhjaatzhjahxzhjahxzhkp9izhkp9izhkpgmzhkpgmzhkpnqzhkpnqzhm4fbzhm4fbzhm4mfzhm4tjzhm4tjzhm50nzhm50nzhnjs8zhnjs8zhnjzczhnjzczhnk6gzhnk6gzhoyy1zhoyy1zhoz55zhozc9zhozc9zhozjdzhqe3uzhqeayzhqeayzhqei2zhqei2zhqep6zhrt9nzhrtgrzhrtgrzhrtnvzhrtnvzht8fgzht8fgzhun71zhun71zhun71zhw1ymzhw1ymzhxgq7zhxgq7zhxgq7zhyvhszhyvhszi0a9dzi0a9dzi0a9dzi1p0yzi1p0yzi33sjzi33sjzi33sjzi4ik4zi4ik4zi5xbpzi5xbpzi5xbpzi7c3azi7c3azi8quvzi8quvzi8quvzia5mgzia5mgzibke1zibke1zibke1zicz5mzicz5mziedx7ziedx7ziedx7zifsoszifsoszih7gdzih7gdzih7gdziim7yziim7yzik0zjzik0zj",
                opacity: .6
            },
            wave: {
                min: 0,
                max: 14E3,
                step: 100,
                scale: "037kp98yuky5huhl71jsg5uhlqeqp1nodbchosaapepw7a2cr04985se0tyvthxtbsulrzy2vpnkxpx3hcxry7cxxezb74jozb4clhzb1kn9zaysw6zaw0xyzat8zrzbfs1lzc3pnuzcq8ikzdcrkdze0p6nzen88hzf9raazfwa50zgk7r9zh6qt3zh84dzzhawjbzhca48zhf29kzhgg1kzhhtmgzhklrszhlzcpzhori1zhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgysmpzgvzaozgt5ymzgqcmlzgnjakzgjbe3zggi22zgdoq0zgavdzzg821yzg58pxzg2fdwzfzm1uzfwsptzftzdszfprhbzfmy5azfk4t8zfhbh7zfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcza5zzcwgtzzcv29izcs94lzcquk4zco184zcmmnnzcjtiqzcier5zcflm9zce71szcbdprzc9z5azc760ezc5rfxzc2y3wzc1jjfzbyqejzbxbmyzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .6
            },
            "wind-wave": {
                min: 0,
                max: 14E3,
                step: 100,
                scale: "037kp98yuky5huhl71jsg5uhlqeqp1nodbchosaapepw7a2cr04985se0tyvthxtbsulrzy2vpnkxpx3hcxry7cxxezb74jozb4clhzb1kn9zaysw6zaw0xyzat8zrzbfs1lzc3pnuzcq8ikzdcrkdze0p6nzen88hzf9raazfwa50zgk7r9zh6qt3zh84dzzhawjbzhca48zhf29kzhgg1kzhhtmgzhklrszhlzcpzhori1zhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgysmpzgvzaozgt5ymzgqcmlzgnjakzgjbe3zggi22zgdoq0zgavdzzg821yzg58pxzg2fdwzfzm1uzfwsptzftzdszfprhbzfmy5azfk4t8zfhbh7zfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcza5zzcwgtzzcv29izcs94lzcquk4zco184zcmmnnzcjtiqzcier5zcflm9zce71szcbdprzc9z5azc760ezc5rfxzc2y3wzc1jjfzbyqejzbxbmyzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .6
            },
            swell: {
                min: 0,
                max: 14E3,
                step: 100,
                scale: "037kp98yuky5huhl71jsg5uhlqeqp1nodbchosaapepw7a2cr04985se0tyvthxtbsulrzy2vpnkxpx3hcxry7cxxezb74jozb4clhzb1kn9zaysw6zaw0xyzat8zrzbfs1lzc3pnuzcq8ikzdcrkdze0p6nzen88hzf9raazfwa50zgk7r9zh6qt3zh84dzzhawjbzhca48zhf29kzhgg1kzhhtmgzhklrszhlzcpzhori1zhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgysmpzgvzaozgt5ymzgqcmlzgnjakzgjbe3zggi22zgdoq0zgavdzzg821yzg58pxzg2fdwzfzm1uzfwsptzftzdszfprhbzfmy5azfk4t8zfhbh7zfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcza5zzcwgtzzcv29izcs94lzcquk4zco184zcmmnnzcjtiqzcier5zcflm9zce71szcbdprzc9z5azc760ezc5rfxzc2y3wzc1jjfzbyqejzbxbmyzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .6
            },
            "wind-wave-period": {
                min: 0,
                max: 2E4,
                step: 1E3,
                scale: "037kp9huhl71thxtbszat8zrzbis9kzbemwdzbahj6ze9bgdzh6qt3zhgg1kzhq52xzhq0xqzhoi83zhir80zhd00tzgoztuzfzl2ezei4wfzd0oqgzcflm9zbuii1",
                opacity: .6
            },
            "swell-period": {
                min: 0,
                max: 2E4,
                step: 1E3,
                scale: "037kp9huhl71thxtbszat8zrzbis9kzbemwdzbahj6ze9bgdzh6qt3zhgg1kzhq52xzhq0xqzhoi83zhir80zhd00tzgoztuzfzl2ezei4wfzd0oqgzcflm9zbuii1",
                opacity: .6
            },
            no2: {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "wj2w9gwkn7x8wli7dtwmd6nawmitigwmogdmwmu38swnp2i9woin7awpm2grwqo35rwqo2ykwqmoe1wqmo6uwql9mbwql9f4wql97xwqjunewqjug7wqifvowqifohwqifh9wqh0wpwqh0phwqflxtwqflxpwqflqgwqe6yswqe6rkwqcs70wqcrzswqbd83wq9ygewq8jopwq74x0wq5q5cwq4b6jwq2weuwq1hn5wq02vgwpyo3rwpynwhwpx9bvwpx94kwpvucuwpvucowpvu5ewpufdowpuf6dwpt0lrwpt0ehwpt0ecwpt073wpt06zwpszzqwpszzlwprlf0wprl7rwprl7nwprl0ewprl09wpsyzjwpsyecwpuckqwpubzjwpvpytwpvp6ewpvodzwpu8tzwpu81kwpu795wpu6gqwpu5obwpu4oswpu3wdwpu33ywpu2bjwpu1j4wpslz5wpsl6qwpskebwpsjlwwpsithwpsi12wpsh8nwpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lquwwydzpx6wklwxgtcusxqrjgzy0obpuyal3ypykjakwyug2tsz4e9fzzeb1ouze88jxze6tzgze40ujze17pmzdzt55zdx007zdu6vazdssatzdpz5wzdoklfzdlr9ezdiy4hzdhjk0zdeqf3zdbxa6zdaipozd7pkrzd4wfuzd3hvdzd0oqgzcza5yzcza5xzcxvlfzcwh0xzcv2ggzcv29azctnoszcs94azcqujtzcqujrzcpfz9zco1eszcmmuazcmmu8zcl89rzcjti5zciexnzciexlzch0d4zcflsmzce787zce788zccsgpzcbdwazc9zbvzc9zbwzc8krhzc75zyzc5rfjzc5rfkzc4cv4zc2yapzc1jj6zc1jj7zc04yszbyqedzbxbtyzbxbmvzbvx2gzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .65
            },
            o3: {
                min: 0,
                max: 3E5,
                step: 2E3,
                scale: "th7d1wtr6yfnu16jtfu16k0iub4qtuul4c7luv3xldv53j68vf34k0vf34jzvp1bdbvz0wy6w90ibywj03ppwszp3hx2zaocx2xw3wxcxhhnxmx2vfxwwogay6w9u2ygvv7tygugndyqu288z0tnm0zat8zrzb4iiozbfs1lzbr1khzc3pnuzcez6rzcq8ikzd1i1hzdcrkdzdo13aze0p6nzebypkzen88hzeyhrdzf9raazfl0t7zfwa50zg8y8dzgk7r9zgvha6zh6qt3zh84s7zh9ik7zhawjbzhcaigzhdohkzhf29kzhgg8ozhgfnczhhtmgzhj7egzhkldkzhlzcpzhndbtzhor3tzhq52xzhq3wbzhq2pozhq1byzhq05bzhpyypzhoj7mzhoi10zhogn9zhofgnzhoea0zhljykzhk4eozhha39zhfuc9zhd07xzha5whzh8q5hzh5vu2zh4ga6zh1lyqzgvzaozgqcmlzgjbe3zgdoq0zg821yzg2fdwzfwsptzfprhbzfk4t8zfei56zf62c7zexmc3zep6j4zegqj0ze8aq1zdygcmzdq0cizdhkjjzd94jfzd0oqgzcza5zzcxvljzcv29izctnp2zcs94lzcquk4zcpfskzcmmnnzcl837zcjtiqzcier5zch06pzce71szccshczcbdprzc9z5azc8kkuzc5rfxzc4codzc2y3wzc1jjfzc04yzzbxbmyzbvx2izbuii1zbrp5zzbqalizbnh9gzbknxfzbj9cxzbgg0vzbf1gezbc84czb9esbzb807tzb56vrzb2djqzb0yz8zay5n7zavcb5zatxqnzar4emzaob2kzamwi3zak361zaioljzafv9izad1xgzabnczza8u0x",
                opacity: .6
            },
            so2: {
                min: 0,
                max: 2E5,
                step: 1E3,
                scale: "wj2w9gwkn7x8wli7dtwmd6nawmitigwmogdmwmu38swnp2i9woin7awpm2grwqo35rwqo2ykwqmoe1wqmo6uwql9mbwql9f4wql97xwqjunewqjug7wqifvowqifohwqifh9wqh0wpwqh0phwqflxtwqflxpwqflqgwqe6yswqe6rkwqcs70wqcrzswqbd83wq9ygewq8jopwq74x0wq5q5cwq4b6jwq2weuwq1hn5wq02vgwpyo3rwpynwhwpx9bvwpx94kwpvucuwpvucowpvu5ewpufdowpuf6dwpt0lrwpt0ehwpt0ecwpt073wpt06zwpszzqwpszzlwprlf0wprl7rwprl7nwprl0ewprl09wpsyzjwpsyecwpuckqwpubzjwpvpytwpvp6ewpvodzwpu8tzwpu81kwpu795wpu6gqwpu5obwpu4oswpu3wdwpu33ywpu2bjwpu1j4wpslz5wpsl6qwpskebwpsjlwwpsithwpsi12wpsh8nwpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lquwwydzpx6wklwxgtcusxqrjgzy0obpuyal3ypykjakwyug2tsz4e9fzzeb1ouze88jxze6tzgze40ujze17pmzdzt55zdx007zdu6vazdssatzdpz5wzdoklfzdlr9ezdiy4hzdhjk0zdeqf3zdbxa6zdaipozd7pkrzd4wfuzd3hvdzd0oqgzcza5yzcza5xzcxvlfzcwh0xzcv2ggzcv29azctnoszcs94azcqujtzcqujrzcpfz9zco1eszcmmuazcmmu8zcl89rzcjti5zciexnzciexlzch0d4zcflsmzce787zce788zccsgpzcbdwazc9zbvzc9zbwzc8krhzc75zyzc5rfjzc5rfkzc4cv4zc2yapzc1jj6zc1jj7zc04yszbyqedzbxbtyzbxbmvzbvx2gzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .65
            },
            pm10: {
                min: 0,
                max: 3E5,
                step: 2E3,
                scale: "wj2w9gwjpfbrwkbye2wkzw7ywlnu1uwmd6nawmk8a0wmr9pnwn6rjiwnupdewoin7awpdmgqwq8lj1wqmoe1wql97xwqifohwqflxtwqe6rkwq9ygewq4b6jwpyo3rwpx9bvwpvucuwpvu5ewpuf6dwpt0ehwpt073wpszzqwprlf0wprl7nwprl09wpsyzjwpsyecwpuckqwpubzjwpvpytwpvp6ewpvodzwpu8tzwpu81kwpu795wpu6gqwpu5obwpu4oswpu3wdwpu33ywpu2bjwpu1j4wpslz5wpsl6qwpskebwpsjlwwpsithwpsi12wpsh8nwpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lquwwydzpx6wklwxgtcusxqrjgzy0obpuyal3ypykjakwyug2tsz4e9fzzeb1ouze6tzgze17pmzdx007zdssatzdoklfzdiy4hzdeqf3zdaipozd4wfuzd0oqgzcza5yzcxvlfzcwh0xzcv29bzctnotzcs94azcqujszcpfzazco1eszcmmu9zcl89rzcjti5zciexnzch0d4zcflsmzce787zccsgpzcbdwazc9zbvzc8krgzc75zyzc5rfjzc4cv4zc2yapzc1jj7zc04yszbyqedzbxbtyzbvx2gzbuii1zbrp5zzbovtxzbm2ozzbj9cxzbgg0vzbdmotzbatcrzb807tzb56vrzb2djpzay5n7zavcb5zasj67zappu5zamwi3zak361zah9tzzaegp1zabnczza8u0x",
                opacity: .65
            },
            pm25: {
                min: 0,
                max: 2E5,
                step: 2E3,
                scale: "wj2w9gwkn7x8wmd6nawmln1lwmu38swnp2i9woin7awpm2grwqo35rwql9f4wqifohwqflxpwqcrzswq5q5cwpyo3rwpvucowpt0ehwpszzlwprl09wpucrrwpvpytwpvodzwpu81kwpu6gqwpu4oswpu33ywpu1j4wpsl6qwpsjlwwpsi12wpsgg8wppm4swpo6dswplc9hwpjwihwph271wpe7vlwpcsbpwp9y0awp8igewp5o4ywoymi8woq6i5woj4vfwoaovcwo3n8mwnzfj8wnv7mpwnqzxbwnms0swnikbewnfqe1wnbhw8wn8o60wn4fo7wn1lqux6wklwxqrjgzyal3ypyug2tszeb1ouze6tzgze17pmzdx007zdssatzdoklfzdiy4hzdeqf3zdaipozd4wfuzd0oqgzcza5xzcwh0xzcv29azcs94azcqujrzco1eszcmmu8zcjti5zciexlzcflsmzce788zcbdwazc9zbwzc75zyzc5rfkzc2yapzc1jj7zbyqedzbxbmvzbuii1zbovtxzbj9cxzbdmotzb807tzb2djpzavcb5zappu5zak361zaegp1za8u0x",
                opacity: .65
            },
            co: {
                min: 0,
                max: 3E6,
                step: 2E4,
                scale: "08ggfx2gd7i54y9jy5766b0d9o2ngdbvzeiledvqylglsi0tj3ougtlbllj1nthxz1nt2fjmnsmx47ns8tgcnrtb0xnrdslinrhwrbnrkmconroqbcnrrfwpnrvk2inrsqqhnrpxegnrn49jnrkaxhnrhhlgnreo9fnrbuxenr91shnr68ggnr3f4fnr0lsenqxsgcnquzbfnqs5zenqpcndnql4qwnqibevnqfi9ynqcoxwnq9vlvnq729unq48xtnq1fswnpymgvnpvt4unpszstnpq6grnpndbunpkjztnphqnsnpgc3bnpexivnpc46unpapmenp9b1xnp7whgnp6hpwnp3okznp2a0jnp0vg2nozgohnoy241nov8z4notueonosfn3nor12mnopmi6nomtd9nolelpnok018noilgrnoh6wbnoedkanocyzunobkfdno8r3bno7ciuno4j6sno1purno0ba9nnxhy7nnw3dqnnta1onnqgpnnnp255nnm8t3nnjfh2nni0wknnf7kjnnce8hnnaznznn86bynn5czwnn3yffnn153dnmzqivnmwx6unmu3usnmspabnmpvy9nwo2rlnwmo75o6kv0hogkge9oqin7lp0gu0xpaf0u9padm9tpkbt35pu9zwhq49la9qe7s3lqo5ywxqy45q9qy2r5tr80xz5rhz4shrryq69s1wwzlsbv3sxsbtp8hslrw1tsvq2v5t5o9ohtfnv29tpm1vktzk8owtziu4gu9h0xsujf7r4utdekgv3bldsvdb6rkvd9s74vn7z0gvx65tsw74cn4wh2jggwr0q9sx10bnkx0yx34xax3wgxkvapsxuthj4y4rocgyepv5syepv5syoo1z4yym8sgz8kfls",
                opacity: .9
            },
            dust: {
                min: 0,
                max: 2E6,
                step: 2E4,
                scale: "08ggfx766b0dedvqyllbllj1sjb1h9zh0w1pzgwmdbzgtrghzgphs3zgl83pzggymfzge3ihzg9tu3zg5kcszg1aoezfyfkgzfu636zfpweszflmqezfirtkzfei56zfaa8ozf62c7zf1u8lzexmc3zetefmzep6j4zekymmzegqj0zecimjze8aq1ze2o93zdygcmzdu890zdq0cizdlsg1zdhkjjzddcn1zd94jfzd4wmyzd0oqgzcwgtzzcs94lzco184zcjtiqzcflm9zcbdprzc760ezc2y3wzbyqejzbuii1zbt3xkzbrp5zzbrp5zzbqalizbovtxzbnh9gzbm2ozzbknxfzbknxezbj9cxzbhulczbgg0vzbf1gfzbf1gezbdmotzbc84czbatjvzb9esbzb807uzb807tzb6lg8zb56vrzb3sbbzb2djqzb2djpzb0yz8zazk7nzay5n7zawr2qzavcb5zavcb4zatxqnzasiz3zar4emzappu5zaob2kzaob2jzamwi3zalhxmzak361zaiolkzaioljzah9tzzafv9izaegp1zad1xgzabnczzabnczzaa8leza8u0x",
                opacity: .6
            }
        };
    optLayer["temperature-950hpa"] = optLayer["temperature-925hpa"] = optLayer["temperature-900hpa"] = optLayer["temperature-850hpa"] = optLayer["temperature-800hpa"] = optLayer["temperature-750hpa"] = optLayer["temperature-700hpa"] = optLayer["temperature-650hpa"] = optLayer["temperature-600hpa"] = optLayer["temperature-500hpa"] = optLayer["temperature-300hpa"] = optLayer["temperature-200hpa"] = optLayer["temperature-10hpa"] = optLayer["temperature-2m"] = optLayer.feel = optLayer["temperature-5cm"] = optLayer.dew = {
        pf: "temperature"
    };
    optLayer["wind-950hpa"] = optLayer["wind-925hpa"] = optLayer["wind-900hpa"] = optLayer["wind-850hpa"] = optLayer["wind-800hpa"] = optLayer["wind-750hpa"] = optLayer["wind-700hpa"] =
        optLayer["wind-650hpa"] = optLayer["wind-600hpa"] = optLayer["wind-500hpa"] = optLayer["wind-300hpa"] = optLayer["wind-200hpa"] = optLayer["wind-10hpa"] = {
            pf: "wind"
        };
    optLayer["wind-250m"] = optLayer["wind-100m"] = optLayer["wind-10m"] = {
        pf: "wind"
    };
    optLayer["humidity-900hpa"] = optLayer["humidity-850hpa"] = optLayer["humidity-700hpa"] = {
        pf: "humidity"
    };
    optLayer.gust = optLayer["gust-ac"] = {
        pf: "wind"
    };
    optLayer["rain-3h"] = {
        pf: "rain-1h"
    };
    optLayer["clouds-low"] = optLayer["clouds-middle"] = optLayer["clouds-high"] = optLayer["clouds-total"] = {
        pf: "clouds"
    };
    optLayer["new-snow-ac"] = {
        pf: "snow"
    };
    optLayer.cape.u = function (a) {
        return 1E5 * a
    };
    optLayer.cape.h = "energy";
    optLayer.cape.xd = !1;
    optLayer["cape-shear"].u =
        function (a) {
            return 5E4 * a
        };
    optLayer["cape-shear"].h = "energy-shear";
    optLayer["cape-shear"].xd = !1;
    optLayer.shear.u = function (a) {
        return 2E3 * a
    };
    optLayer.shear.h = "speed-shear";
    optLayer.shear.xd = !1;
    optLayer.cin.u = function (a) {
        return -1E4 * a
    };
    optLayer.cin.h = "energy-inverse";
    optLayer.cin.xd = !1;
    optLayer.cin.Di = !0;
    optLayer.li.u = function (a) {
        return 1E3 * (a - 128)
    };
    optLayer.li.h = "temperature-index";
    optLayer.li.xd = !1;
    optLayer.li.Di = !0;
    optLayer.helicity.u = function (a) {
        return 4E3 * a
    };
    optLayer.helicity.h = "energy-derived";
    optLayer.helicity.xd = !1;
    optLayer.wave.u = function (a) {
        return a / 10 * 1E3
    };
    optLayer.wave.h = "height";
    optLayer.wave.xd = !1;
    optLayer.wave.Xe = !0;
    optLayer["wind-wave"].u =
        function (a) {
            return a / 10 * 1E3
        };
    optLayer["wind-wave"].h = "height";
    optLayer["wind-wave"].xd = !1;
    optLayer["wind-wave"].Xe = !0;
    optLayer["wind-wave-period"].u = function (a) {
        return 1E3 * a
    };
    optLayer["wind-wave-period"].h = "time";
    optLayer["wind-wave-period"].xd = !1;
    optLayer["wind-wave-period"].Xe = !0;
    optLayer.swell.u = function (a) {
        return a / 10 * 1E3
    };
    optLayer.swell.h = "height";
    optLayer.swell.xd = !1;
    optLayer.swell.Xe = !0;
    optLayer["swell-period"].u = function (a) {
        return 1E3 * a
    };
    optLayer["swell-period"].h = "time";
    optLayer["swell-period"].xd = !1;
    optLayer["swell-period"].Xe = !0;
    optLayer.clouds.u = function (a) {
        return 1E3 * Math.min(a, 100)
    };
    optLayer.clouds.Kk = !0;
    optLayer.clouds.h = "percents";
    optLayer.clouds.xd = !1;
    optLayer.clouds.ie = "#000";
    optLayer.humidity.u = function (a) {
        return 1E3 * Math.min(a, 100)
    };
    optLayer.humidity.Kk = !0;
    optLayer.humidity.h = "percents";
    optLayer.humidity.xd = !1;
    optLayer.humidity.ie = "#000";
    optLayer["rain-1h"].u = function (a) {
        a -= 10;
        0 > a && (a = 0);
        return 1E3 * (240 < a ? 780 + 100 * (a - 10 - 230) : 90 < a ? 80 + 5 * (a - 10 - 80) : 10 > a ? a / 10 : a - 10)
    };
    optLayer["rain-1h"].u.typed = function (a, b) {
        a -= 10;
        0 > a && (a = 0);
        return 1E3 * (240 < a ? 780 + 100 * (a - 10 - 230) : 90 < a ? 80 + 5 * (a - 10 - 80) : 10 > a ? a / 10 : a - 10) + ((15 <= b ? 35 <= b ? 45 <= b ? 65 <= b ? 8 : 0 : 16 : 32 : 0) << 24)
    };
    optLayer["rain-1h"].Dg = function (a,
        b, c) {
        if (65 == c) return (" mm" == b ? this.Je(a / 1E3) + " cm" : this.Je(a / 100) + b) + " (" + u.type.snow + ")";
        var d = "";
        33 == c ? d = " (" + u.type.storm + ")" : 17 == c && (d = " (" + u.type.fog + ")");
        return this.Je(a / 1E3) + b + d
    };
    optLayer["rain-3h"].u = optLayer["rain-1h"].u;
    optLayer["rain-ac"].u = optLayer["rain-1h"].u;
    optLayer["rain-1h"].h = "length";
    optLayer["rain-3h"].h = "length";
    optLayer["rain-ac"].h = "length";
    optLayer["rain-ac"].Tf = {
        mm: {
            precision: 1,
            A: [0, 1E3, 2E3, 4E3, 6E3, 1E4, 15E3, 2E4, 25E3, 3E4, 4E4, 5E4, 6E4, 7E4, 8E4, 9E4, 1E5, 15E4, 2E5]
        },
        inch: {
            precision: .01,
            A: [0, 1016, 2032, 3048, 5080, 10160, 15240, 20320, 25400,
                38100, 50800, 63500, 76200, 88900, 101600, 114300, 127E3, 152400, 203200
            ]
        }
    };
    optLayer.radar.u = function (a) {
        return 1E3 * a
    };
    optLayer.radar.h = "reflectivity";
    optLayer.radar.xd = !1;
    optLayer.snow.h = "blanket";
    optLayer.snow.u = function (a) {
        0 != a && (a -= 10, 0 > a && (a = 0));
        200 < a ? a = 50 * (a - 200) : 20 < a && (a = 2 * (a - 20));
        return 1E3 * a
    };
    optLayer.snow.xd = !1;
    optLayer.freezing.u = function (a) {
        return 1E5 * a
    };
    optLayer.freezing.h = "height";
    optLayer.freezing.Tf = {
        m: {
            sd: 1,
            precision: 100,
            A: [0, 2E5, 4E5, 6E5, 8E5, 1E6, 12E5, 14E5, 16E5, 18E5, 2E6, 25E5, 3E6, 4E6, 5E6]
        },
        ft: {
            sd: 3.2808399,
            precision: 100,
            A: [0, 182880, 365760, 548640, 731520,
                914400, 1066800, 1219200, 1524E3, 1828800, 2133600, 2438400, 3048E3, 3962400, 4876800
            ]
        }
    };
    optLayer.freezing.xd = !1;
    optLayer.temperature.u = function (a) {
        return 1E3 * (a - 128)
    };
    optLayer.temperature.h = "temperature";
    optLayer.temperature.xd = !1;
    optLayer.temperature.Di = !0;
    optLayer.pressure.u = function (a) {
        return 1E3 * (a + 900)
    };
    optLayer.pressure.h = "pressure";
    optLayer.pressure.xd = !1;
    optLayer.wind.u = function (a, b) {
        return 2E3 * Math.sqrt((a - 127) * (a - 127) + (b - 127) * (b - 127))
    };
    optLayer.wind.h = "speed";
    optLayer.wind.xd = !1;
    optLayer["wind-950hpa"].u = optLayer["wind-925hpa"].u = optLayer["wind-900hpa"].u = optLayer["wind-850hpa"].u = optLayer["wind-800hpa"].u =
        optLayer["wind-750hpa"].u = optLayer["wind-700hpa"].u = optLayer["wind-650hpa"].u = optLayer["wind-600hpa"].u = optLayer["wind-500hpa"].u = optLayer["wind-300hpa"].u = optLayer["wind-200hpa"].u = optLayer["wind-10hpa"].u = function (a, b) {
            return 5E3 * Math.sqrt((a - 127) * (a - 127) + (b - 127) * (b - 127))
        };
    optLayer.gust.u = function (a) {
        return 3600 * a
    };
    optLayer.gust.h = "speed";
    optLayer.gust.xd = !1;
    optLayer.co.u = function (a) {
        return 2E4 * a
    };
    optLayer.co.h = "air-parts";
    optLayer.co.xd = !0;
    optLayer.co.xd = !0;
    optLayer.no2.u = function (a) {
        return 1E3 * a
    };
    optLayer.no2.h = "air-micrograms";
    optLayer.no2.xd = !0;
    optLayer.no2.Dg = function (a, b) {
        return this.Je(a / 1E3) + b + " (" + u.qd[5E4 > a ? "good" : 1E5 >
            a ? "moderate" : 2E5 > a ? "unhealthySensitive" : 4E5 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    optLayer.o3.u = function (a) {
        return 2E3 * a
    };
    optLayer.o3.h = "air-micrograms";
    optLayer.o3.xd = !0;
    optLayer.o3.Tf = {
        "\u00b5g/m\u00b3": {
            sd: 1,
            precision: 1,
            A: [0, 4E4, 6E4, 8E4, 1E5, 12E4, 14E4, 16E4, 2E5, 3E5]
        }
    };
    optLayer.o3.Dg = function (a, b) {
        return this.Je(a / 1E3) + b + " (" + u.qd[1E5 > a ? "good" : 13E4 > a ? "moderate" : 24E4 > a ? "unhealthySensitive" : 38E4 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    optLayer.pm10.u = function (a) {
        return 2E3 * a
    };
    optLayer.pm10.h = "air-micrograms";
    optLayer.pm10.xd = !0;
    optLayer.pm10.Tf = {
        "\u00b5g/m\u00b3": {
            sd: 1,
            precision: 1,
            A: [0, 2E4, 4E4, 6E4, 8E4, 1E5, 12E4, 16E4, 2E5, 3E5]
        }
    };
    optLayer.pm10.Dg = function (a, b) {
        return this.Je(a / 1E3) + b + " (" + u.qd[4E4 > a ? "good" : 7E4 > a ? "moderate" : 9E4 > a ? "unhealthySensitive" : 18E4 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    optLayer.pm25.u = function (a) {
        return 2E3 * a
    };
    optLayer.pm25.h = "air-micrograms";
    optLayer.pm25.xd = !0;
    optLayer.pm25.Tf = {
        "\u00b5g/m\u00b3": {
            sd: 1,
            precision: 1,
            A: [0, 1E4, 2E4, 3E4, 4E4, 6E4, 8E4, 1E5, 16E4, 2E5]
        }
    };
    optLayer.pm25.Dg = function (a, b) {
        return this.Je(a / 1E3) + b + " (" + u.qd[2E4 > a ? "good" : 35E3 > a ? "moderate" : 45E3 > a ? "unhealthySensitive" : 9E4 >
            a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    optLayer.so2.u = function (a) {
        return 1E3 * a
    };
    optLayer.so2.h = "air-micrograms";
    optLayer.so2.xd = !0;
    optLayer.so2.Dg = function (a, b) {
        return this.Je(a / 1E3) + b + " (" + u.qd[5E4 > a ? "good" : 12E4 > a ? "moderate" : 35E4 > a ? "unhealthySensitive" : 5E5 > a ? "unhealthy" : "veryUnhealthy"] + ")"
    };
    optLayer.dust.u = function (a) {
        return 2E4 * a
    };
    optLayer.dust.h = "air-micrograms";
    optLayer.dust.xd = !0;
    optLayer.dust.Tf = {
        "\u00b5g/m\u00b3": {
            sd: 1,
            precision: 1,
            A: [0, 5E4, 1E5, 15E4, 2E5, 4E5, 6E5, 8E5, 1E6, 15E5, 2E6]
        }
    };

    var ua = {
            Tj: Infinity,
            Nl: -Infinity,
            sm: function (a) {
                var b = 2 < a.zoom ? 5 < a.zoom ?
                    8 < a.zoom ? 3 : 2 : 1 : 0;
                return mapOpts.root + "?p=" + a.lat.toFixed(b) + ";" + a.lon.toFixed(b) + ";" + a.zoom + "&l=" + a.pd + (a.time < ua.Tj || a.time > ua.Nl ? "&t=" + a.time.format("yyyyMMdd/HHmm") : "") + ("auto" != a.F ? "&m=" + a.F : "") + ("normal" != a.Ig ? "&w=" + a.Ig : "")
            },
            tm: function (a, b) {
                var c = [];
                gLayers[b].o && c.push("l=" + b);
                "normal" != a && c.push("w=" + a);
                return c.length ? "./?" + c.join("&") : "./"
            },
            parse: function (a) {
                var b = {},
                    c = {
                        p: "",
                        l: ""
                    };
                a.replace(/^[^#?]+/, "").replace(/[?#&]([^=]+)=([^#&]+)/g, function (a, b, r) {
                    c[b] = decodeURIComponent(r)
                });
                a = c.p.replace(/[;,]/g,
                    "/").split("/");
                b.lat = +a[0];
                b.lon = +a[1];
                a[2] && (b.zoom = +a[2]);
                a = c.l.replace(/[;,\/]/g, "-");
                b.pd = a;
                if (a = c.t) b.time = new Date(Date.UTC(+a.slice(0, 4), a.slice(4, 6) - 1, +a.slice(6, 8), +a.slice(9, 11), +a.slice(11, 13) || 0));
                c.w && (b.Ig = c.w);
                c.m && (b.F = c.m);
                return b
            }
        },
        oa = {
            ar: {
                code: "ar",
                label: "????????",
                file: !0
            },
            cs: {
                code: "cs",
                label: "??esky",
                file: !0
            },
            de: {
                code: "de",
                label: "deutsch",
                file: !0
            },
            en: {
                code: "en",
                label: "english",
                Ue: "We are sorry, but your browser lacks the support of integral part of this application (HTML <a href=\"https://en.wikipedia.org/wiki/Canvas_element\">element <code>&lt;canvas></code></a>). It's impossible to animate wind without it. If you don't want or can't upgrade your current browser to newer version, you can try different one:",
                W: "Search for location???",
                Xa: "Searching for ???{q}??????",
                Ya: "Searching for ???{q}??? in OpenStreetMap???",
                Ua: "Lat.: {lat} / Lon.: {lon} / {place}",
                Wa: "Not found.",
                Qd: "Searching failed, please try again later.",
                Za: "Type at least {length} characters.",
                Va: "Find my position",
                Ta: "My location",
                V: "About",
                qc: "Help",
                rc: "Settings",
                K: "Zoom in",
                H: "Zoom out",
                c: {
                    temperature: "Temperature",
                    rain: "Precipitation",
                    clouds: "Clouds",
                    wind: "Wind speed",
                    gust: "Wind gusts",
                    pressure: "Air pressure",
                    snow: "Snow cover",
                    freezing: "Freezing level",
                    humidity: "Humidity",
                    wave: "Waves",
                    storm: "Thunderstorms",
                    radar: "Radar",
                    feel: "Perceived temperature",
                    air: "Air quality",
                    satellite: "Satellite"
                },
                f: {
                    cape: "CAPE",
                    "10m": "10 m above ground",
                    "2m": "2 m above ground",
                    "850hpa": "850 hPa, 1500 m",
                    "700hpa": "700 hPa, 3000 m",
                    "500hpa": "500 hPa, 5500 m",
                    "300hpa": "300 hPa, 9000 m",
                    "rain-1h": "1 hour",
                    "rain-3h": "3 hours",
                    "rain-ac": "from {time}",
                    shear: "Wind shear",
                    "wind-wave": "Wind wave height",
                    swell: "Swell wave height",
                    wave: "Significant wave height",
                    "swell-period": "Swell wave period",
                    "wind-wave-period": "Wind wave period",
                    "clouds-low": "Low clouds",
                    "clouds-middle": "Middle clouds",
                    "clouds-high": "High clouds",
                    "clouds-total": "Total cloud cover",
                    cin: "CIN",
                    li: "Lifted index",
                    helicity: "Helicity (SRH)",
                    "950hpa": "950 hPa, 500 m",
                    "925hpa": "925 hPa, 750 m",
                    "900hpa": "900 hPa, 1000 m",
                    "800hpa": "800 hPa, 2000 m",
                    "750hpa": "750 hPa, 2500 m",
                    "650hpa": "650 hPa, 3600 m",
                    "600hpa": "600 hPa, 4200 m",
                    "200hpa": "200 hPa, 12000 m",
                    "rain-1h-type": "1 hour",
                    "rain-3h-type": "3 hours",
                    "100m": "100 m above ground",
                    "5cm": "5 cm above ground",
                    dew: "Dew point",
                    "250m": "250 m above ground",
                    humidity: "Relative humidity",
                    "10hpa": "10 hPa, 30000 m",
                    "cape-shear": "CAPE*SHEAR",
                    gust: "1 hour",
                    "gust-ac": "from {time}",
                    "new-snow-ac": "New from {time}",
                    snow: "Total cover",
                    co: "CO ???? ????",
                    no2: "NO2 ???? ????",
                    o3: "O3 ????",
                    pm10: "PM10 ???? ????",
                    pm25: "PM2.5 ???? ????",
                    so2: "SO2 ???? ????",
                    dust: "Dust ????",
                    freezing: "Freezing level"
                },
                themeType: {
                    soft: "soft",
                    off: "off",
                    normal: "normal",
                    strong: "strong",
                    dark: "dark",
                    fast: "fast-motion"
                },
                Wb: {
                    altitude: "Altitude",
                    accumulation: "Accumulation",
                    storm: "Index",
                    wave: "Type",
                    clouds: "Type",
                    humidity: "Type",
                    maximum: "Maximum",
                    snow: "Type",
                    air: "Substance"
                },
                T: "custom",
                ra: "Wind animation",
                M: "Model",
                L: "Automatic",
                G: "Data: {model}, {source} (resolution {resolution})\nUpdated: {updated} (next update: {next} - prepare)\nCurrent time: {time} ({zone})",
                Oe: {
                    temperature: "For this output data, temperature is shown for {altitude}. The calculations take into account the terrain (elevation), but with lower resolution than in reality. Therefore the models cannot differentiate, for instance, the temperature on a mountain peak or on a city square scorched by the sun. The general rule is that the centres of large cities are 1 ??C to 3 ??C warmer than the surrounding area or natural landscapes. Significant temperature differences over a small area are primarily caused in the winter by an inversion. A short yet noticeable cooling can also occur after a local summer storm.",
                    rain: "This output data shows the total precipitation in mm for the previous 1 or 3 hours, or from a specific date (accumulated amount). The models do not differentiate more significant precipitation totals in certain mountainous areas or, on the contrary, faint drizzling from fog and low cloud cover. Forecasting precipitation totals for local storms is difficult. The numerical model does not allow for accurate calculations of the formation of local storm cells. In conversions to snowfall, 1 mm of precipitation equals roughly 1 cm of snowfall.",
                    clouds: "This output data shows cloud cover in percentages. Cloud patterns are very difficult to predict. The calculations also include forecasts for high cloud cover. 100% cloud cover signifies an overcast sky. If, however, the sky is overcast with cloud cover that is thin and the sun is shining through, it is still considered overcast, even though it may seem like a sunny day at first glance.",
                    wind: "The map illustrates the average wind speed at an altitude {altitude}. Models run by NOAA (GFS, HRRR) calculate with 1-minute mean. However, remaining models (ICON, GEM) calculate with 10-minute mean. This can cause differences between each models. The value of the highest 1-minute sustained wind is about 14% greater than a 10-minute sustained wind over the same period. The calculation does not take into account exposed areas (hilltops, open fields) where wind speed will be greater than that in a city or valley. Localised increases in windiness during storms are also not taken into account in model calculations.",
                    gust: "The map illustrates the maximum wind speed (so-called gusts) at 10 metres above the ground. The calculation does not take into account exposed areas (hilltops, open fields) where wind speed will be greater than that in a city or valley. Localised increases in windiness during storms are also not taken into account in model calculations.",
                    pressure: "Calculations illustrate air pressure values at sea level. The output data differentiates between pressure highs and lows as well as pressure gradients, which influence wind speed.",
                    cape: "When there is possibility of storm formation, it is recommended to monitor the values of the CAPE (this map shows surface based CAPE). It represents potential energy in the atmosphere. It helps to establish the level of atmospheric instability. The greater the values reached, the greater the likelihood of the formation of a storm. Values less than 300 are low, between 300 to 1000 are weak, 1000 to 2000 are moderate, and over 2000 are high, when the possibility of the occurrence of strong storms is highly likely. Storm formation is influenced by a number of other factors, however, CAPE is an important indicator.",
                    snow: "This data illustrates the anticipated height of snow cover. Prediction of snow cover development is very complex, and the values listed may differ from actual values reached (even by several centimetres). The calculations take into account the terrain (elevation), but with lower resolution than in reality. Therefore, the model cannot display the exact snow cover height in mountainous areas, where it differs greatly.",
                    freezing: "The altitude in metres at which the temperature dips below the freezing point is illustrated on the map. This altitude has a large influence on the state of precipitation. At altitudes above this level, precipitation generally occurs in solid states (snowflakes, ice crystals). At lower altitudes, on the contrary, precipitation occurs in a liquid state. This does not, however, always have to be the case. In some instances, snowfall may occur at lower altitudes as well. This is due to the fact that snow does not melt immediately at temperatures above the freezing point, but melts gradually. Therefore, primarily in low humidity, it can snow up to 400 m below this altitude. During temperature inversions, freezing precipitation may fall at this altitude.",
                    wave: "The application displays two types of waves: swells and wind waves. Waves travelling outside of their place of origin, and are thus not caused by local winds, are called swells.  Waves caused by winds in that specific location are called wind waves. In the application, wind waves are marked in white and swells are marked in black. This feature allows you to quickly find areas where high wind waves are travelling in a different direction from the swells. Significant wave height is the average height (trough to crest) of the one-third highest waves. Given the variability of wave height, the largest individual waves are likely to be somewhat less than twice the reported significant wave height for a particular day. Wave period is time interval between arrival of consecutive crests at a stationary point.",
                    li: "The lifted index (LI) is the temperature difference between an air parcel when it reaches the 500 hPa level and the actual temperature of the environmental air at 500 hPa. When the value is positive, the atmosphere is stable and when the value is negative, the atmosphere is unstable. Lifted Index maps are used to forecast the likelihood of thunderstorms. Values below 0 indicating instability and an increasing chance of thunderstorms. Lifted Index is generally scaled as follows: 6 or greater: very stable conditions (without thunderstorms), between 1 and 6: stable conditions, (thunderstorms not likely), between 0 and -2: slightly unstable (thunderstorms possible), between -2 and -6 : unstable (thunderstorms likely), less than -6:  very unstable (severe thunderstorms likely).",
                    cin: "Convective inhibition (CIN) is a measure that indicates the amount of the energy that needs to be overcome in order for convection (thunderstorms) to occur. This map shows surface based CIN. CIN can be weakened by daytime heating, frontal lifting or other lifting mechanisms. CIN is generally scaled as follows: 0 to -50: weak inhibition, -50 to -200: moderate inhibition, less than -200: strong inhibition.",
                    helicity: "SRH (Storm Relative Helicity) is a measure of the potential for cyclonic updraft rotation in right-moving supercells, and is calculated for the 3-km layers above ground level. Larger values (greater than 250 m<sup>2</sup>/s<sup>2</sup>) suggest an increased threat of tornadoes with supercells.",
                    shear: "This maps shows vertical wind shear, which is a change in wind speed with change in altitude. Our map calculate the change in wind throughout the 0-6km layer. Thunderstorms tend to become more organized and persistent as vertical shear increases. Values less than 10 m/s are low, between 10 m/s to 20 m/s are moderate, and over 20 m/s are high (enough for supercells). In weak shear environment (up to 10 or 15 m/s), mostly multicells are developing and significant organisation of thunderstorms is not easy. In stronger shear environment (above approx. 15 m/s) probability of supercell development is increasing.",
                    dew: "The dew point is the temperature to which air must be cooled to become saturated with water vapor. When further cooled, the airborne water vapor will condense to form liquid water (dew). When air cools to its dew point through contact with a surface that is colder than the air, water will condense on the surface. Dew point temperature is never greater than the air temperature because relative humidity cannot exceed 100%.",
                    humidity: "For this output data, relative humidity is shown for 2 m above ground. Humidity is the amount of water vapor present in the air. Relative humidity is expressed as a percentage (a higher percentage means that the air-water mixture is more humid).",
                    "cape-shear": "CAPE*SHEAR is one of the many thunderstorm parameters, it is combination of CAPE (Convection available potential energy) and wind shear. It is computed according to: square root(2*SBCAPE) * wind shear(0-6 km). It is targeted at forecasting organized thunderstorms, such as supercell. The deep-layer wind shear helps to organise convection (represented by CAPE) into long-lived cells. High values of CAPE*SHEAR (above 700) may indicate good condition for development of severe storms.",
                    radar: "This output data shows current intensities of precipitation based on real or predicted data sets. This output is using not only radars but also numerical models and satelite images to improve coverage over the oceans and some land areas. Intensities of precipitation are described by colours in range from blue for a weak precipitation rate, to red for a very strong precipitation rate. Strong colours (red) need to be interpreted carefully since they may indicate not only heavy rain or snow but also thunderstorms, hail, strong winds, or tornadoes.",
                    feel: "This map shows temperature equivalent perceived by humans, caused by the combined effects of sunshine, air temperature, relative humidity and wind speed. In humid conditions, the air feels much hotter. On the other hand, as airflow increases over the skin, more heat is removed and the air feels much cooler.",
                    satellite: "This layer shows current clouds visible from space. Images are taken by satellites from geostationary orbit and they are processed by the GeoColor algorithm. The clouds are displayed as they are visible from space. At night, image shows lights from the large cities. Fog and low clouds are shown in the light blue color at night.",
                    co: "Map shows concentration of carbon monoxide at 10 meters above ground. About half of the carbon monoxide in Earth's atmosphere is from the burning of fossil fuels and biomass (such as forest and bushfires). Most of the rest of carbon monoxide comes from chemical reactions with organic compounds emitted by human activities and plants. Carbon monoxide is a temporary atmospheric pollutant in some urban areas, chiefly from the exhaust of internal combustion engines.",
                    no2: "Map shows concentration of nitrogen dioxide at 10 meters above ground. Nitrogen dioxide is a prominent air pollutant. For the general public, the most prominent sources of NO2 are internal combustion engines burning fossil fuels (cars). Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center.",
                    o3: "Map shows concentration of ozone at 10 meters above ground (ground-level ozone). Low level ozone is an atmospheric pollutant. It is not emitted directly by car engines or by industrial operations, but formed by the reaction of sunlight on air containing hydrocarbons and nitrogen oxides that react to form ozone directly at the source of the pollution or many kilometers downwind. Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center.",
                    pm10: "Map shows concentration of coarse particulates with diameter between 2.5 and 10 micrometers at 10 meters above ground. Particulates are the most harmful form of air pollution due to their ability to penetrate deep into the lungs and blood streams. Some particulates occur naturally, originating from volcanoes, dust storms, forest and grassland fires. Human activities, such as the burning of fossil fuels in vehicles, stubble burning, power plants, road dust, wet cooling towers in cooling systems and various industrial processes, also generate significant amounts of particulates. Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center. Local air deterioration also occurs due to houses with stoves fueled by wood or coal. However, model is not aware about these sources.",
                    pm25: "Map shows concentration of fine particles with a diameter of 2.5 ??m or less at 10 meters above ground. Particulates are the most harmful form of air pollution due to their ability to penetrate deep into the lungs and blood streams. Some particulates occur naturally, originating from volcanoes, dust storms, forest and grassland fires. Human activities, such as the burning of fossil fuels in vehicles, stubble burning, power plants, road dust, wet cooling towers in cooling systems and various industrial processes, also generate significant amounts of particulates. Model has lower resolution than reality. Therefore model cannot differentiate, for instance, the pollution near a highway or in a city center. Local air deterioration also occurs due to houses with stoves fueled by wood or coal. However, model is not aware about these sources.",
                    so2: "Map shows concentration of sulfur dioxide at 10 meters above ground. Sulfur dioxide is a toxic gas responsible for the smell of burnt matches. It is released naturally by volcanic activity and is produced as a by-product of copper extraction and the burning of fossil fuels contaminated with sulfur compounds. Sulfur dioxide has significant impacts upon human health.",
                    dust: "Map shows concentration of dust at 10 meters above ground. Dust is made of fine particles of solid matter. On Earth, it generally consists of particles in the atmosphere that come from various sources such as soil, dust lifted by wind (an aeolian process), volcanic eruptions, and pollution."
                },
                na: "Play",
                oa: "Pause",
                ac: "Previous",
                "$b": "Next",
                Zb: "Change date",
                bc: "Today",
                Uc: "Show present-day forecast",
                b: "Settings",
                cb: "You can change the setting for the whole application or for the meteorological data here.",
                eb: "Language",
                gb: "Resolution",
                ib: "Reduced",
                hb: "Native",
                jb: "Restore default",
                Z: "Application settings",
                fb: "You can change the setting for the whole application here.",
                "$": "Animation settings",
                ob: "You can change the setting for the streamlines which show average wind speed and wind direction. High values may overload your browser if your computer is less powerful.",
                Bb: "Predefined settings",
                Cb: "Number of streamlines",
                Eb: "Few",
                Db: "Many",
                sb: "Motion speed",
                ub: "Low",
                tb: "High",
                Fb: "Average thickness of the streamlines",
                Hb: "Thin",
                Gb: "Wide",
                Ib: "Streamline thickness variation",
                Kb: "Same thickness",
                Jb: "Various thickness",
                vb: "Lifetime",
                xb: "Ephemeral",
                wb: "Persistent",
                yb: "Transparency",
                Ab: "Opaque",
                zb: "Transparent",
                pb: "Streamlines length",
                rb: "Short",
                qb: "Long",
                lb: "Color",
                mb: ["White", "Black", "Light", "Dark"],
                "$a": "Border color",
                ab: ["Automatic", "Black", "White"],
                X: "Weather map settings",
                bb: "You can change the setting for the weather map which shows selected meteorological variables.",
                Y: "Show values in grid",
                kb: {
                    length: "Precipitation units",
                    blanket: "Snow units",
                    height: "Height units",
                    temperature: "Temperature units",
                    speed: "Speed units",
                    pressure: "Pressure units"
                },
                Hc: "Weather map opacity",
                se: "Weather map interpolation",
                eg: "Font size",
                gg: "Small",
                fg: "Large",
                Pd: "Performance meter, optimum is 60 frames per second",
                aa: "Share",
                ka: "Share options",
                Ic: "Thank you for spreading word about our website. Pick what you want to share please:",
                N: "Weather Forecast Maps",
                Vb: "Link",
                Pc: "Screenshot",
                Tc: "Live screenshot",
                Jc: "Embed",
                Mb: "Animated GIF image",
                zd: "Video",
                Sc: "share on",
                ia: "Link to",
                ea: "position",
                Sb: "active layer",
                ha: "date and time",
                Ub: "animation settings",
                Tb: "scale",
                Pb: "Image format",
                Nb: "Cut",
                Ob: "Cut part of screen",
                Qb: "aspect ratio",
                Rb: "free",
                Rc: "golden",
                Qc: "Include information in the corner",
                ld: "upload to",
                zf: "There will be link to Ventusky, linking specifically to current",
                Lc: "Dimensions",
                Mc: "Target time",
                Nc: "current",
                kd: "tomorrow",
                Oc: "nearest weekend",
                Kc: "Lock",
                Xd: "Number of animation frames",
                Td: "Animation speed",
                Qf: "Video duration",
                Rf: "Create loop",
                uf: "You can create clean screenshot here, without user interface.",
                vf: "You are allowed to use this image wherever you want. We would appreciate if you put active hyperlink to Ventusky nearby.",
                wf: "Live screenshot is a fragment of HTML code for your web page, which can show the same animation you see here.",
                xf: "Generated code works independently, all needed data are <a href=\"https://en.wikipedia.org/wiki/Data_URI_scheme\" target=\"_blank\">inside</a> of it, nothing is downloaded from Ventusky (or from anywhere else), it's permanent imprint of selected state, similar to classic screenshot, but with animation algorithm inside. It's automatically adjustible to various widths, so you don't have to worry about mobile layout.",
                yf: "If you can't paste this code anywhere in your content management system or animation does not work afterwards, please contact your website administrator, we can't fix it.",
                Ih: "There will be a way to embed live Ventusky website into your web page. But it isn't ready yet, stay tuned.",
                Jh: "We don't recommend using animated GIFs in web environment, because their file size is huge. But here you can create infinite animation loop from current state (without anoying rewind stutter).",
                Kh: "For creating videofile inside your browser, we have to download huge <a href=\"https://en.wikipedia.org/wiki/FFmpeg\" target=\"_blank\">FFmpeg library</a> (18 MB) inside this page. If you think you and your browser can handle it, we can give it a try???",
                ba: "Create",
                Lb: "Cancel",
                P: "on",
                O: "off",
                md: "not available",
                fd: "demo",
                Cf: "Under construction???",
                sc: "New!",
                coords: "{lat} {lon}",
                Kf: "{deg}??{sign}",
                bi: "{deg}??{min}'{sign}",
                La: "E",
                Ka: "W",
                Ja: "N",
                Ia: "S",
                Aa: "north",
                Ba: "northeast",
                za: "east",
                Ea: "southeast",
                Da: "south",
                Fa: "southwest",
                Ga: "west",
                Ca: "northwest",
                wa: "night",
                sa: "astronomical twilight",
                va: "nautic twilight",
                ta: "civil twilight",
                ua: "day",
                ic: "high noon",
                xa: "rise",
                ya: "set",
                Yb: "hr.",
                la: "min.",
                ma: "to",
                C: "yyyy/MM/dd",
                Na: "MM/dd",
                Oa: "ddd|[MMM dd]",
                D: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                J: 1,
                I: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                U: [],
                Ma: "Current days",
                te: "HH:mm",
                Fg: "HH:mm",
                Gg: "HH[:mm]",
                R: !0,
                cc: "Change units to ???{unit}???",
                Pa: ".",
                location: "Location",
                B: "Timezone",
                Qa: "Meteogram",
                dc: "Wind waves",
                Xb: "Swell",
                Dc: "Swell wave direction",
                Ec: "Wind wave direction",
                qa: "Waves animation",
                tc: "Show isobar",
                uc: "Show time zones",
                vc: "Basemap",
                wc: "Show extreme values",
                xc: "Convective precipitation",
                yc: "rain showers, snow showers, thunderstorms",
                zc: "Freezing rain",
                Ac: "Hail",
                type: {
                    snow: "Snow",
                    fog: "Fog",
                    storm: "Thunderstorm"
                },
                Ra: "Global models",
                Sa: "Regional models",
                Bc: "Detailed weather forecast on",
                Bf: {
                    altitude: "{group}, {sublayer}",
                    accumulation: "{group} {sublayer}",
                    storm: "{sublayer}",
                    maximum: "{group} {sublayer}"
                },
                ud: "Show lat, lon grid",
                close: "Close",
                mc: "Edit",
                Gc: "Saved locations",
                rd: "Unable to download data",
                vd: "Connection restored",
                back: "Back",
                df: "App",
                lc: "Download App",
                ce: "Show scale",
                yd: "Weather station",
                Wd: "Convective cloud base",
                ee: "Sea currents",
                jd: "Premium layers",
                hd: "Buy premium",
                year: "year",
                pc: "Installation",
                "$c": "NE",
                Zc: "N",
                Yc: "E",
                cd: "SE",
                bd: "S",
                dd: "SW",
                ed: "W",
                ad: "NW",
                oc: "Gust",
                now: "Now",
                Cc: "Cloud base",
                Do: "Widget",
                gf: "Please, add some city in the app",
                Qo: "ddd dd",
                qd: {
                    good: "Good",
                    moderate: "Moderate",
                    unhealthySensitive: "Unhealthy for Sensitive Groups",
                    unhealthy: "Unhealthy",
                    veryUnhealthy: "Very Unhealthy",
                    hazardous: "Hazardous"
                },
                jc: "days",
                nc: "Forecast step",
                Vc: "Weather Warnings",
                fc: "Alarm clock",
                g: "Additional information",
                Ji: "Widget loading",
                Gl: "Tap to retry",
                Wc: "Dark background",
                Xc: "Light background",
                Fo: "Background based on daytime",
                gc: "America",
                hc: "Asia",
                Xf: "Name days",
                ec: "3D Globe",
                hl: "Only {model} layers are listed. To see all layers change model to AUTO in the Settings.",
                Id: "L",
                Hd: "H",
                Ag: "Pressure systems",
                bm: "Data Update",
                am: "Weather Update Notification",
                em: "Loading Weather Forecasts",
                dm: "Weather Forecast Update",
                Eo: "%1$d ??C ?? %2$s ?? %3$s",
                "$l": "List of location can be managed from the application",
                gm: "Weather icons",
                fm: "Solid",
                Xl: "Contour",
                Zl: "Show current time and current temperature",
                Yl: "Show current time",
                Wl: "Show colour temperature bar",
                kc: "days and nights",
                Kl: "HH[:mm]",
                Bn: "Forecast",
                kf: {}
            },
            "en-ca": {
                code: "en-ca",
                label: "english (CA)",
                J: 0,
                R: !0
            },
            "en-us": {
                code: "en-us",
                label: "english (US)",
                D: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                J: 0,
                te: "h:mm tt",
                Fg: "h:mm|[tt]",
                Gg: "h [tt]",
                Il: "AM",
                Jl: "PM",
                R: !1,
                location: "Location",
                B: "Timezone",
                Qa: "Meteogram",
                Kl: "HH[:mm] [tt]"
            },
            fr: {
                code: "fr",
                label: "fran??ais",
                file: !0
            },
            "fr-ca": {
                code: "fr-ca",
                label: "fran??ais (CA)",
                file: !0
            },
            hu: {
                code: "hu",
                label: "magyarul",
                file: !0
            },
            it: {
                code: "it",
                label: "italiano",
                file: !0
            },
            ja: {
                code: "ja",
                label: "?????????",
                file: !0
            },
            ko: {
                code: "ko",
                label: "?????????",
                file: !0
            },
            nl: {
                code: "nl",
                label: "nederlands",
                file: !0
            },
            pl: {
                code: "pl",
                label: "polski",
                file: !0
            },
            pt: {
                code: "pt",
                label: "portugu??s",
                file: !0
            },
            "pt-br": {
                code: "pt-br",
                label: "portugu??s (BR)",
                file: !0
            },
            ru: {
                code: "ru",
                label: "??????????????",
                file: !0
            },
            sk: {
                code: "sk",
                label: "slovensky",
                file: !0
            },
            uk: {
                code: "uk",
                label: "??????????????????????",
                file: !0
            },
            vi: {
                code: "vi",
                label: "Ti????ng Vi????t",
                file: !0
            },
            zh: {
                code: "zh",
                label: "??????",
                W: "????????????",
                Xa: "??????????????????{q}??????",
                Ya: "??????OpenStreetMap?????????{q}??????",
                Ua: "??????: {lat} / ??????: {lon} / {place}",
                Wa: "????????????",
                Qd: "?????????????????????????????????",
                Za: "???????????????{length}?????????",
                Va: "??????????????????",
                Ta: "????????????",
                V: "??????",
                qc: "??????",
                rc: "??????",
                K: "??????",
                H: "??????",
                c: {
                    temperature: "??????",
                    rain: "?????????",
                    clouds: "??????",
                    wind: "??????",
                    gust: "??????",
                    pressure: "??????",
                    snow: "?????????",
                    freezing: "????????????",
                    humidity: "??????",
                    wave: "??????",
                    storm: "??????",
                    radar: "????????????",
                    feel: "????????????",
                    air: "????????????",
                    satellite: "??????"
                },
                f: {
                    "10m": "??????10???",
                    "2m": "??????2???",
                    "850hpa": "850?????????1500???",
                    "700hpa": "700?????????3000???",
                    "500hpa": "500?????????5500???",
                    "300hpa": "300?????????9000???",
                    "rain-1h": "?????????",
                    "rain-3h": "???3?????????",
                    "rain-ac": "?????????{time}",
                    shear: "?????????",
                    "wind-wave": "????????????",
                    swell: "????????????",
                    wave: "???????????????",
                    "swell-period": "????????????",
                    "wind-wave-period": "????????????",
                    "clouds-low": "??????",
                    "clouds-middle": "??????",
                    "clouds-high": "??????",
                    "clouds-total": "?????????",
                    "950hpa": "950?????????500???",
                    "925hpa": "925?????????750???",
                    "900hpa": "900?????????1000???",
                    "800hpa": "800?????????2000???",
                    "750hpa": "750?????????2500???",
                    "650hpa": "650?????????3600???",
                    "600hpa": "600?????????4200???",
                    "200hpa": "200?????????12000???",
                    "rain-1h-type": "?????????",
                    "rain-3h-type": "???3?????????",
                    "100m": "??????100???",
                    "5cm": "??????100??????",
                    dew: "??????",
                    "250m": "??????250???",
                    humidity: "????????????",
                    gust: "?????????",
                    "gust-ac": "?????????{time}",
                    "new-snow-ac": "??? ?????????{time}",
                    snow: "???",
                    co: "???????????? (CO)",
                    no2: "???????????? (NO2)",
                    o3: "?????? (O3)",
                    so2: "???????????? (SO2)",
                    dust: "??????",
                    freezing: "????????????"
                },
                S: {
                    soft: "???",
                    off: "???",
                    normal: "??????",
                    strong: "???",
                    dark: "???",
                    fast: "????????????"
                },
                Wb: {
                    altitude: "??????",
                    accumulation: "??????",
                    storm: "??????",
                    wave: "??????",
                    clouds: "??????",
                    humidity: "??????",
                    maximum: "??????",
                    snow: "??????",
                    air: "??????"
                },
                T: "?????????",
                ra: "?????????",
                M: "??????",
                L: "??????",
                G: "??????: {model}, {source} (?????????{resolution})\n?????? {updated} (???????????????: {next} - ??????)\n????????????: {time} ({zone})",
                na: "??????",
                oa: "??????",
                ac: "?????????",
                "$b": "?????????",
                Zb: "????????????",
                bc: "??????",
                Uc: "????????????????????????",
                b: "??????",
                cb: "????????????????????????????????????????????????????????????",
                eb: "??????",
                gb: "?????????",
                ib: "??????",
                hb: "??????",
                jb: "??????????????????",
                Z: "????????????",
                fb: "?????????????????????????????????????????????",
                "$": "????????????",
                ob: "????????????????????????????????????????????????????????????",
                Bb: "???????????????",
                Cb: "?????????",
                Eb: "???",
                Db: "???",
                sb: "????????????",
                ub: "???",
                tb: "???",
                Fb: "??????????????????",
                Hb: "???",
                Gb: "???",
                Ib: "??????????????????",
                Kb: "????????????",
                Jb: "????????????",
                vb: "????????????",
                xb: "??????",
                wb: "??????",
                yb: "?????????",
                Ab: "?????????",
                zb: "????????????",
                pb: "????????????",
                rb: "???",
                qb: "???",
                lb: "??????",
                mb: ["??????", "??????", "??????", "??????"],
                "$a": "????????????",
                ab: ["??????", "??????", "??????"],
                X: "???????????????",
                bb: "???????????????????????????????????????????????????",
                Y: "???????????????????????????",
                kb: {
                    length: "????????????",
                    blanket: "????????????",
                    height: "????????????",
                    temperature: "????????????",
                    speed: "????????????",
                    pressure: "????????????"
                },
                Hc: "??????????????????",
                Pd: "??????????????????????????????60???",
                aa: "??????",
                ka: "????????????",
                Ic: "?????????????????????????????????????????????????????????????????????",
                N: "??????????????????",
                Vb: "?????????",
                Pc: "??????",
                Tc: "????????????",
                Jc: "??????",
                Mb: "GIF??????",
                Sc: "?????????",
                ia: "?????????",
                ea: "??????",
                Sb: "????????????",
                ha: "???????????????",
                Ub: "????????????",
                Tb: "??????",
                Pb: "????????????",
                Nb: "??????",
                Ob: "??????????????????",
                Qb: "?????????",
                Rb: "?????????",
                Rc: "????????????",
                Qc: "????????????????????????",
                ld: "?????????",
                Lc: "??????",
                Mc: "????????????",
                Nc: "??????",
                kd: "??????",
                Oc: "?????????",
                Kc: "??????",
                Xd: "????????????",
                Td: "????????????",
                ba: "??????",
                Lb: "??????",
                P: "???",
                O: "???",
                md: "?????????",
                fd: "??????",
                sc: "?????????",
                La: "???",
                Ka: "???",
                Ja: "???",
                Ia: "???",
                Aa: "???",
                Ba: "??????",
                za: "???",
                Ea: "??????",
                Da: "???",
                Fa: "??????",
                Ga: "???",
                Ca: "??????",
                wa: "??????",
                sa: "??????????????????",
                va: "??????????????????",
                ta: "??????????????????",
                ua: "??????",
                ic: "??????",
                xa: "???",
                ya: "???",
                Yb: "??????",
                la: "??????",
                ma: "???",
                C: "yyyy-MM-dd",
                Na: "MM-dd",
                Oa: "ddd|[MMM-dd]",
                D: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
                J: 1,
                I: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
                U: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
                Ma: "????????????",
                R: !0,
                cc: "??????????????????{unit}???",
                Pa: "???",
                location: "??????",
                B: "??????",
                Qa: "????????????",
                dc: "??????",
                Xb: "??????",
                Dc: "????????????",
                Ec: "????????????",
                qa: "????????????",
                tc: "???????????????",
                uc: "????????????",
                vc: "??????",
                wc: "????????????",
                xc: "???????????????",
                yc: "????????????????????????",
                zc: "??????",
                Ac: "??????",
                type: {
                    snow: "???",
                    fog: "???",
                    storm: "??????"
                },
                Ra: "????????????",
                Sa: "????????????",
                Bc: "???Ventusky.com???????????????????????????",
                Od: ["???", "???", "???", "???", "???", "???", "???"],
                close: "???",
                mc: "??????",
                Gc: "????????????",
                lc: "????????????",
                year: "???",
                pc: "??????",
                "$c": "??????",
                Zc: "???",
                Yc: "???",
                cd: "??????",
                bd: "???",
                dd: "??????",
                ed: "???",
                ad: "??????",
                oc: "??????",
                now: "??????",
                Cc: "??????",
                qd: {
                    good: "????????????)",
                    moderate: "????????????)",
                    unhealthySensitive: "?????????????????????)",
                    unhealthy: "?????????????????????)",
                    veryUnhealthy: "?????????????????????)",
                    hazardous: "?????????????????????)"
                },
                Ha: "zh",
                jc: "???",
                nc: "????????????",
                Vc: "????????????",
                fc: "??????",
                g: "????????????",
                Wc: "???????????????",
                Xc: "????????????",
                gc: "??????",
                hc: "??????",
                ec: "?????????",
                Ag: "????????????",
                kc: "???????????????"
            },
            "zh-tw": {
                code: "zh-tw",
                label: "??????",
                file: !0
            },
            es: {
                code: "es",
                label: "espa??ol",
                file: !0
            },
            ro: {
                code: "ro",
                label: "rom??n??",
                file: !0
            },
            tr: {
                code: "tr",
                label: "t??rk??e",
                file: !0
            },
            sv: {
                code: "sv",
                label: "svenska",
                file: !0
            },
            nb: {
                code: "nb",
                label: "norsk",
                file: !0
            },
            lv: {
                code: "lv",
                label: "latvie??u",
                file: !0
            },
            lt: {
                code: "lt",
                label: "lietuvi??",
                file: !0
            },
            hr: {
                code: "hr",
                label: "hrvatski",
                file: !0
            },
            fi: {
                code: "fi",
                label: "suomi",
                file: !0
            },
            et: {
                code: "et",
                label: "estonian",
                file: !0
            },
            el: {
                code: "el",
                label: "????????????????",
                file: !0
            },
            bg: {
                code: "bg",
                label: "??????????????????",
                file: !0
            },
            ca: {
                code: "ca",
                label: "catal??",
                file: !0
            },
            da: {
                code: "da",
                label: "dansk",
                file: !0
            },
            id: {
                code: "id",
                label: "indonesia",
                file: !0
            },
            sl: {
                code: "sl",
                label: "sloven????ina",
                file: !0
            },
            sr: {
                code: "sr",
                label: "srpski",
                file: !0
            },
            he: {
                code: "he",
                label: "??????????",
                file: !0
            },
            th: {
                code: "th",
                label: "?????????",
                file: !0
            },
            fa: {
                code: "fa",
                label: "??????????",
                file: !0
            },
            mn: {
                code: "mn",
                label: "????????????",
                file: !0
            }
        };
    try {
        Da = function (a) {
                for (var b = a.target; b && "aside" != b.id && "i" != b.id;) b = b.parentNode;
                b || a.preventDefault()
            },
            doc.addEventListener("gesturestart", Da), doc.addEventListener("touchmove", Da, {
                passive: !1
            })
    } catch (a) {}

    var util = {
        Gk: function (a, b) {
            for (var c = a.length, d = [], f = 0; f < a.length; f++)(function (f) {
                util.loadImg(a[f], function (a) {
                    d[f] = a;
                    c--;
                    c || b(d)
                })
            })(f)
        },
        loadImg: function (url, callback) {
            var img = new Image;
            img.onload = function () {
                this.onload = null;
                var a = util.mo;
                a.width = this.width;
                a.height = this.height;
                var c = a.getContext("2d");
                c.drawImage(this, 0, 0);
                try {
                    var e = c.getImageData(0, 0, a.width, a.height).data
                } catch (d) {
                    e = []
                }
                a = new Uint8Array(e.length / 4);
                for (c = 0; c < e.length; c +=
                    4) a[c / 4] = e[c + 1];
                callback(a)
            };
            if ("crossOrigin" in img) img.crossOrigin = "Anonymous", img.src = url;
            else if (win.URL) {
                var d = new XMLHttpRequest;
                d.onload = function () {
                    var a = URL.createObjectURL(this.response),
                        b = img.onload;
                    img.onload = function () {
                        b.apply(this, arguments);
                        URL.revokeObjectURL(a)
                    };
                    img.src = a
                };
                d.open("GET", url, !0);
                d.responseType = "blob";
                d.send()
            } else img.src = url
        },
        Sh: {},
        ak: function (a) {
            util.Sh[a] || util.We(a, function (b) {
                util.Sh[a] = b
            })
        },
        We: function (a, b) {
            if (util.Sh[a]) setTimeout(function () {
                b(util.Sh[a])
            }, 1);
            else {
                var c = win.XMLHttpRequest ? new XMLHttpRequest :
                    new ActiveXObject("Microsoft.XMLHTTP");
                try {
                    c.open("GET", a, !0)
                } catch (d) {
                    b("");
                    return
                }
                c.onreadystatechange = function () {
                    4 == c.readyState && b(c.responseText)
                };
                c.onerror = function () {
                    b("")
                };
                try {
                    c.send("")
                } catch (d) {
                    b("")
                }
            }
        }
    };
    util.setTransform = function (a) {
        if ("undefined" == typeof a.transform || "undefined" != typeof a.OTransform) {
            var b = "undefined" == typeof a.OTransform ? "undefined" == typeof a.WebkitTransform ? "undefined" == typeof a.MozTransform ? "undefined" == typeof a.msTransform ? null : "msTransform" : "MozTransform" : "WebkitTransform" :
                "OTransform";
            return function (a, d) {
                a.style[b] = d
            }
        }
        return function (a, b) {
            a.style.transform = b + " translate3d(0, 0, 0)"
        }
    }(doc.documentElement.style);
    util.Pj = function (a) {
        var b = "undefined" == typeof a.transformOrigin ? "undefined" == typeof a.OTransformOrigin ? "undefined" == typeof a.WebkitTransformOrigin ? "undefined" == typeof a.MozTransformOrigin ? "undefined" == typeof a.msTransformOrigin ? null : "msTransformOrigin" : "MozTransformOrigin" : "WebkitTransformOrigin" : "OTransformOrigin" : "transformOrigin";
        return function (a, d) {
            a.style[b] =
                d
        }
    }(doc.documentElement.style);
    util.El = function (a) {
        var b = "undefined" == typeof a.transition ? "undefined" == typeof a.lg ? "undefined" == typeof a.WebkitTransition ? "undefined" == typeof a.MozTransition ? null : "MozTransition" : "WebkitTransition" : "OTransition" : "transition";
        return function (a, d) {
            a.style[b] = d
        }
    }(doc.documentElement.style);
    util.createElement = function (tag, b) {
        var element = doc.createElement(tag || "div");
        if (b) {
            for (var d in b) {
                if ("parent" == d) b[d].appendChild(element);
                else if ("style" == d) element.style.cssText = b[d];
                else if ("children" == d) {
                    for (var i = 0; i < b[d].length; i++) {
                        element.appendChild("object" != typeof b[d][i] ? doc.createTextNode(b[d][i]) : b[d][i]);
                    }
                } else try {
                    element[d] = b[d]
                } catch (r) {}
            }
        }
        return element
    };
    util.Um = function (a) {
        var b = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (a)
            for (var c in a)
                if ("parent" == c) a[c].appendChild(b);
                else if ("children" == c)
            for (var d = 0; d < a[c].length; d++) b.appendChild("object" != typeof a[c][d] ? doc.createTextNode(a[c][d]) : a[c][d]);
        else b.setAttribute(c, a[c]);
        return b
    };
    util.getElementById = function (a) {
        return doc.getElementById(a)
    };
    util.mo = util.createElement("canvas");
    (function (a, b, c) {
        a.fe || (a.fe = function (a, b) {
            return this.length <
                a ? Array(a - this.length + 1).join(b ? String(b).charAt(0) : " ") + this : String(this)
        });
        a.lg || (a.lg = function (a, b) {
            return this.length < a ? this + Array(a - this.length + 1).join(b ? String(b).charAt(0) : " ") : String(this)
        });
        c.format = function (a) {
            var b = this;
            return a.replace(/(\\?)(d+|M+|y+|H+|h+|m+|s+|t+)/g, function (a, c, d) {
                c && (c = a.slice(0, 2), d = a.slice(2));
                var g = d.length;
                switch (d.charAt(0)) {
                    case "d":
                        d = 2 >= g ? b.getUTCDate().toString().fe(g, "0") : 3 == g ? (u.Od || [])[b.getUTCDay()] || u.D[b.getUTCDay()].slice(0, 2) : u.D[b.getUTCDay()];
                        break;
                    case "M":
                        a = b.getUTCMonth();
                        d = 2 >= g ? (a + 1).toString().fe(g, "0") : 3 == g ? u.U[a] || u.I[a].slice(0, 3) : u.I[a];
                        break;
                    case "y":
                        a = b.getUTCFullYear(g);
                        2 >= g && (a %= 100);
                        d = a.toString().fe(g, "0");
                        break;
                    case "H":
                        d = b.getUTCHours().toString().fe(g, "0");
                        break;
                    case "h":
                        d = (b.getUTCHours() % 12 || 12).toString().fe(g, "0");
                        break;
                    case "t":
                        d = (12 > b.getUTCHours() ? u.Il : u.Jl).slice(0, g);
                        break;
                    case "m":
                        d = b.getUTCMinutes().toString().fe(g, "0");
                        break;
                    case "s":
                        d = b.getUTCSeconds().toString().fe(g, "0")
                }
                return c + d
            }).replace(/\\(.)/g, "$1")
        }
    })(String.prototype,
        Array.prototype, Date.prototype, Number.prototype);
    util.Ad = function (a, b) {
        var c;
        a = (a || "").replace(/\{([^\}\:]+)(?:\:([^\}]+))?\}/g, function (a, d, e) {
            return d in b ? Array.isArray(b[d]) ? (c || (c = {}), c[d] = b[d], a) : b[d].format && e ? b[d].format(e) : b[d] : ""
        });
        if (!c) return a;
        var d = [a],
            f;
        for (f in c) {
            for (var r = [], e = 0; e < c[f].length; e++)
                for (var J = 0; J < d.length; J++) r.push(d[J].replace(new RegExp("{" + f + "}", "g"), c[f][e]));
            d = r
        }
        return d
    };
    util.gh = function (a) {
        return String(a).charAt(0).toUpperCase() + String(a).slice(1)
    };
    util.gl = function (a,
        b) {
        return String(Math.round(a * b) / b).replace(/\-/, "\u2212").replace(/\./, u.Pa)
    };
    util.coords = function (a, b) {
        return util.Ad(u.coords, {
            lat: util.xk(a.lat, b),
            lon: util.yk(a.lon, b)
        })
    };
    util.Kf = function (a, b, c) {
        return c ? util.Ad(u.bi, {
            deg: Math.floor(a),
            min: (Math.round(a % 1 * 60) + "").fe(2, "0"),
            sign: b
        }) : util.Ad(u.Kf, {
            deg: Math.round(a),
            sign: b
        })
    };
    util.xk = function (a, b) {
        return 0 > a ? util.Kf(-a, u.Ia, b) : util.Kf(a, u.Ja, b)
    };
    util.yk = function (a, b) {
        return 0 > a ? util.Kf(-a, u.Ka, b) : util.Kf(a, u.La, b)
    };
    util.timeZone = function (a, b) {
        var c = "UTC" + (a ? (0 > a ? "+" : "-") + (new Date(Math.abs(6E4 * a))).format("HH:mm") :
            "");
        return u.kf[c + (b ? "d" : "s")] || u.kf[c] || c.replace(/-/, "\u2212")
    };
    util.Fh = function (a, b) {
        a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        b && (a = a.replace(/"/g, "&quot;"));
        return a.replace(/[\u0080-\uFFFF]/g, function (a) {
            return "&#" + a.charCodeAt(0) + ";"
        })
    };
    win.Uint8Array && win.Int32Array && win.Float64Array || (win.Uint8Array = win.Int32Array = win.Float64Array = Array);
    Math.sign || (Math.sign = function (a) {
        return a ? 0 > a ? -1 : 1 : a
    });
    (function (a) {
        util.po = function () {
            return util.Ol(doc.documentElement, "s", void 0)
        };
        a.classList ? (util.om = function (b) {
                a.classList.add(b)
            },
            util.Zn = function (b) {
                a.classList.remove(b)
            }, util.Oi = function (a, c) {
                a.classList.add(c)
            }, util.Ej = function (a, c) {
                a.classList.remove(c)
            }, util.Ol = function (a, c, d) {
                var f = a.classList.contains(c);
                f ? !0 !== d && a.classList.remove(c) : !1 !== d && a.classList.add(c);
                return !!d === d ? d : !f
            }) : (util.om = function (a) {
            util.Oi(doc.documentElement, a)
        }, util.Zn = function (a) {
            util.Ej(doc.documentElement, a)
        }, util.Oi = function (a, c) {
            a.className += " " + c
        }, util.Ej = function (a, c) {
            a.className = a.className.replace(new RegExp("^|\\s" + c + "(?=\\s|$)", "g"), "")
        }, util.Ol = function (a, c, d) {
            var f = -1 < a.className.split(" ").indexOf(c);
            f ? !0 !== d && util.Ej(a, c) : !1 !== d && util.Oi(a, c);
            return !!d === d ? d : !f
        })
    })(doc.documentElement);
    util.hi = function (a) {
        return (doc.cookie.match(new RegExp(a + "=([^;]+)")) || [])[1]
    };
    util.Mf = function (a) {
        try {
            var b = localStorage.getItem(a)
        } catch (c) {
            return util.hi(a)
        }!b && (b = util.hi(a)) && (util.tf(a, b), util.Fj(a));
        return b
    };
    util.Mj = function (a, b) {
        doc.cookie = a + "=" + b + "; expires=" + (new Date(2035, 0, 1)).toGMTString() + "; path=/; SameSite=None" + ("https:" == location.protocol ? "; Secure" : "")
    };
    util.tf = function (a, b) {
        try {
            localStorage.setItem(a,
                b), util.Fj(a)
        } catch (c) {
            util.Mj(a, b)
        }
    };
    util.Fj = function (a) {
        doc.cookie = a + "=; expires=" + (new Date(1970, 0, 1)).toGMTString() + "; path=/; SameSite=None"
    };
    util.Yn = function () {
        try {
            localStorage.removeItem("dpr")
        } catch (a) {}
        util.Fj("dpr")
    };
    (function () {
        for (var a = 0, b = ["webkit", "moz"], c = 0; c < b.length && !win.requestAnimationFrame; ++c) win.requestAnimationFrame = win[b[c] + "RequestAnimationFrame"], win.cancelAnimationFrame = win[b[c] + "CancelAnimationFrame"] || win[b[c] + "CancelRequestAnimationFrame"];
        win.requestAnimationFrame || (win.requestAnimationFrame = function (b) {
            var c =
                (new Date).getTime(),
                r = Math.max(0, 16 - (c - a)),
                e = win.setTimeout(function () {
                    b(c + r)
                }, r);
            a = c + r;
            return e
        }, win.requestAnimationFrame.So = !0);
        win.cancelAnimationFrame || (win.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    })();
    util.Jk = function (a) {
        var b = oa.en,
            c;
        for (c in b)
            if (!(c in oa[a])) oa[a][c] = b[c];
            else if ("object" == typeof b[c])
            for (var d in b[c]) d in oa[a][c] || (oa[a][c][d] = b[c][d])
    };
    var u = function () {
        for (var a in oa) "en" != a && util.Jk(a);
        a = util.hi("lang") || mapOpts.lang;
        "zh-cn" == a && (a = "zh");
        "pt-BR" == a && (a = "pt-br");
        return oa[a] || oa.en
    }();
    "HTMLCanvasElement" in win ? /ve(\/)?nt(\\)?us(\/)?ky\.com$|^localhost$/.test(location.hostname) ? function (a) {
        a && a.parentNode.removeChild(a)
    }(util.getElementById("no-js")) : win.open(za, "_top") : (doc.body.className = "v", util.createElement("p", {
        innerHTML: u.Ue,
        parent: doc.body
    }), util.createElement("ul", {
        innerHTML: '\r\n      <li><a href="https://vivaldi.com/">Vivaldi</a>\r\n      <li><a href="https://www.palemoon.org/">Pale Moon</a>\r\n      <li><a href="https://www.opera.com/">Opera</a>\r\n    ',
        parent: doc.body
    }));


    /////////////////////////////////////////////////////////////////////////////////////
    // uiSearchBar
    var uiSearchBar = {};
    uiSearchBar.form = util.getElementById("header");
    uiSearchBar.input = uiSearchBar.form.q;
    uiSearchBar.ne = uiSearchBar.form.getElementsByTagName("ul")[0];
    uiSearchBar.ag = uiSearchBar.ne.getElementsByTagName("li")[0];
    uiSearchBar.Rd = function () {
        uiSearchBar.form.onsubmit = function () {
            clearTimeout(b);
            uiSearchBar.send(!0);
            return !1
        };
        uiSearchBar.input.autocomplete = "off";
        var a = !0;
        uiSearchBar.input.id = uiSearchBar.input.parentNode.htmlFor = "search-q";
        uiSearchBar.input.onfocus = function () {
            uiSearchBar.form.className = "m";
            clearTimeout(uiSearchBar.eh);
            uiSearchBar.show();
            this.value == this.defaultValue && (this.className = this.value = "");
            if (a) uiSearchBar.input.oninput();
            a = !1
        };
        uiSearchBar.input.onkeydown = function (a) {
            if (38 == a.keyCode || 40 == a.keyCode) {
                var b = uiSearchBar.Md.length + 1;
                uiSearchBar.Md.active &&
                    (uiSearchBar.ne.getElementsByTagName("a")[uiSearchBar.Md.active - 1].className = "");
                uiSearchBar.Md.active = (uiSearchBar.Md.active + a.keyCode - 39 + b) % b;
                uiSearchBar.Md.active && (uiSearchBar.ne.getElementsByTagName("a")[uiSearchBar.Md.active - 1].className = "k");
                return !1
            }
        };
        uiSearchBar.ne.className = "d";
        uiSearchBar.ne.onmouseout = function () {
            uiSearchBar.Md.active && (uiSearchBar.ne.getElementsByTagName("a")[uiSearchBar.Md.active - 1].className = "");
            uiSearchBar.Md.active = 0
        };
        uiSearchBar.input.onblur = function () {
            uiSearchBar.form.className = "";
            clearTimeout(b);
            "" == this.value.trim() && (this.value = this.defaultValue, this.className = "p");
            clearTimeout(uiSearchBar.eh);
            uiSearchBar.eh = setTimeout(uiSearchBar.Og, 200)
        };
        var b;
        uiSearchBar.input.oninput = function () {
            clearTimeout(b);
            !this.value.trim() && 0 < uiSearchBar.mf.length ? (uiSearchBar.Md = uiSearchBar.mf, uiSearchBar.Md.active = 0, uiSearchBar.Qj()) : 2 > this.value.trim().length ? (uiSearchBar.ne.insertBefore(uiSearchBar.ag, uiSearchBar.ne.firstChild), uiSearchBar.ag.textContent = util.Ad(u.Za, {
                length: 2
            })) : (this.value.trim() != uiSearchBar.Md.value && uiSearchBar.ne.insertBefore(uiSearchBar.ag, uiSearchBar.ne.firstChild), uiSearchBar.ag.textContent = util.Ad(u.Xa, {
                q: this.value
            }), b = setTimeout(function () {
                uiSearchBar.send()
            }, 400))
        };
        try {
            uiSearchBar.mf = JSON.parse(localStorage.getItem("search") || "[]")
        } catch (c) {}
    };
    uiSearchBar.Og = function () {
        uiSearchBar.ne.className = "d"
    };
    uiSearchBar.show = function () {
        uiSearchBar.ne.className =
            ""
    };
    uiSearchBar.Md = [];
    uiSearchBar.mf = [];
    uiSearchBar.bo = function () {
        try {
            localStorage.setItem("search", JSON.stringify(uiSearchBar.mf))
        } catch (a) {}
    };
    uiSearchBar.nm = function (a) {
        for (var b = 0; b < uiSearchBar.mf.length; b++)
            if (uiSearchBar.mf[b].lat == a.lat && uiSearchBar.mf[b].lon == a.lon) return;
        uiSearchBar.mf.unshift(a);
        5 < uiSearchBar.mf.length && (uiSearchBar.mf.length = 5);
        uiSearchBar.bo()
    };
    uiSearchBar.Qj = function () {
        for (; uiSearchBar.ne.firstChild;) uiSearchBar.ne.removeChild(uiSearchBar.ne.firstChild);
        if (uiSearchBar.Md.length)
            for (var a = 0; a < uiSearchBar.Md.length; a++)(function (a, c) {
                a = uiSearchBar.Md[c];
                var d = util.createElement("li");
                uiSearchBar.ne.appendChild(d);
                var f = util.createElement("a");
                f.href = "?lat=" + a.lat + "&lon=" + a.lon;
                f.onclick = function () {
                    uiSearchBar.Og();
                    uiAside.Dl(+a.lat, +a.lon, r.textContent);
                    k.Vg(+a.lat, +a.lon, +a.zoom || 5);
                    uiSearchBar.nm(a);
                    k.log("location", "search-result");
                    return !1
                };
                f.onmouseover = function () {
                    uiSearchBar.Md.active && (uiSearchBar.ne.getElementsByTagName("a")[uiSearchBar.Md.active - 1].className = "");
                    uiSearchBar.Md.active = c + 1;
                    f.className = "k"
                };
                f.onfocus = function () {
                    clearTimeout(uiSearchBar.eh)
                };
                f.onblur = function () {
                    clearTimeout(uiSearchBar.eh);
                    uiSearchBar.eh = setTimeout(uiSearchBar.Og, 200)
                };
                d.appendChild(f);
                var d = util.createElement("h3"),
                    r = util.createElement("b"),
                    e = a.address[a.type] || a.address.city || a.address.suburb || a.address.county || a.address.state;
                r.textContent =
                    e || a.address.country || "?";
                e && (d.textContent = a.address.country ? ", " + a.address.country : " ");
                f.appendChild(d);
                d.insertBefore(r, d.firstChild);
                d = util.createElement("span");
                f.appendChild(d);
                d.textContent = util.Ad(u.Ua, {
                    lat: util.xk(a.lat, !0),
                    lon: util.yk(a.lon, !0),
                    place: a.address.state || a.address.country || "N/A"
                })
            })(uiSearchBar.Md[a], a);
        else uiSearchBar.ne.appendChild(uiSearchBar.ag), uiSearchBar.ag.textContent = u.Wa
    };
    uiSearchBar.send = function (a) {
        function b(d, f) {
            clearTimeout(uiSearchBar.il);
            if (c == uiSearchBar.input.value.trim()) {
                try {
                    var r = JSON.parse(d || "[]")
                } catch (e) {
                    uiSearchBar.ag.textContent = util.Ad(u.Qd, {
                        q: c
                    });
                    return
                }
                uiSearchBar.Md = r;
                uiSearchBar.Md.value = c;
                uiSearchBar.Md.active = 0;
                uiSearchBar.Md.length || f ? uiSearchBar.Qj() : uiSearchBar.il = setTimeout(function () {
                    uiSearchBar.ag.textContent = util.Ad(u.Ya, {
                        q: c
                    });
                    k.log("searching-osm", c);
                    util.We(util.Ad("https://nominatim.openstreetmap.org/search?q={q}&format=json&polygon=0&addressdetails=1&limit=5&accept-language={lang}", {
                        q: encodeURIComponent(c),
                        lang: encodeURIComponent(u.code)
                    }), function (a) {
                        b(a, !0)
                    })
                }, a ? 20 : 750)
            }
        }
        var c = uiSearchBar.input.value.trim();
        2 > c.length || ("ventusky" == c.toLowerCase() ? (z.$j = !0, uiAside.close(), uiSearchBar.input.value = "") : (clearTimeout(uiSearchBar.il), k.log("searching",
            c), util.We(util.Ad(jb, {
            q: encodeURIComponent(c),
            lang: encodeURIComponent(u.code)
        }), function (a) {
            b(a, !1)
        })))
    };
    uiSearchBar.hn = function () {
        var a = this;
        a.className = "r k";
        k.log("location", "geolocate");
        navigator.geolocation.getCurrentPosition(function (b) {
            a.className = "r";
            uiAside.Dl(b.coords.latitude, b.coords.longitude, u.Ta);
            k.Vg(b.coords.latitude, b.coords.longitude, 7)
        }, function () {
            a.className = "r"
        })
    };
    navigator.geolocation && (uiSearchBar.geolocation = util.createElement("a", {
        className: "r",
        onclick: uiSearchBar.hn,
        parent: uiSearchBar.form
    }));
    uiSearchBar.xg = function () {
        uiSearchBar.input.value == uiSearchBar.input.defaultValue &&
            (uiSearchBar.input.value = u.W, uiSearchBar.input.className = "p");
        uiSearchBar.input.defaultValue = u.W;
        uiSearchBar.geolocation && (uiSearchBar.geolocation.title = u.Va);
        uiSearchBar.Qj()
    };
    uiSearchBar.Rd();

    /////////////////////////////////////////////////////////////////////////////////////
    // uiMenuLeft
    var uiMenuLeft = {};
    uiMenuLeft.pa = (new Date(mapOpts.now)).getTimezoneOffset();
    uiMenuLeft.Gi = -Math.ceil(uiMenuLeft.pa / 60);
    uiMenuLeft.oo = remainder(-uiMenuLeft.pa, 60);
    uiMenuLeft.Ml = (new Date((new Date(mapOpts.now)).getFullYear(), 0, 1)).getTimezoneOffset() != uiMenuLeft.pa;
    ua.Tj = (new Date(mapOpts.now)).setUTCHours(0, uiMenuLeft.pa, 0, 0);
    ua.Nl = (new Date(mapOpts.now)).setUTCHours(24, uiMenuLeft.pa, 0, -1);
    uiMenuLeft.Rd = function () {
        uiMenuLeft.Pm();
        uiMenuLeft.Tm();
        uiMenuLeft.Rm();
        uiMenuLeft.Sm();
        var a = [];
        a.push(["auto", {
            toString: function () {
                var a = "auto" == k.model ?
                    uiMenuLeft.modelName() : "";
                return u.L + (a ? " (" + a + ")" : "")
            }
        }]);
        a.push(["---global", {
            toString: function () {
                return u.Ra
            }
        }]);
        for (var b, c = 0; c < gModels.length; c++)
            if (!cfgModels[gModels[c]].hidden) {
                var d = cfgModels[gModels[c]].sf;
                d && !b && (a.push(["---regional", {
                    toString: function () {
                        return u.Sa
                    }
                }]), b = !0);
                a.push([gModels[c], cfgModels[gModels[c]].name + (d ? " (" + d + ")" : "")])
            }
        uiMenuLeft.Vh({
            className: "l",
            label: {
                toString: function () {
                    return u.M
                }
            },
            parent: doc.body,
            select: !0,
            id: "model",
            options: a,
            If: function (a) {
                k.Yi(a)
            },
            value: mapOpts.model
        });
        a = [];
        for (c = 0; c < sa.length; c++) a.push([sa[c], {
            value: sa[c],
            toString: function () {
                return u.S[this.value] ||
                    this.value
            }
        }]);
        uiSetting.link && a.push(["", {
            toString: function () {
                return u.T
            }
        }]);
        uiMenuLeft.Vh({
            className: "h",
            label: {
                toString: function () {
                    return "wave" == Ja[VisualField.o].kind ? u.qa : u.ra
                }
            },
            select: !0,
            parent: doc.body,
            id: "wind-type",
            options: a,
            If: function (a) {
                a ? k.He(a) : (uiSetting.nh && k.He(uiSetting.nh), uiSetting.He || uiSetting.showSetting())
            },
            value: "normal"
        });
        for (var f in na) {
            var a = [],
                c = 0,
                r;
            for (r in na[f]) a.push([r, r]), c++;
            if (!(2 > c))
                for (c = 0; c < a.length; c++) na[f][a[c][0]].wi = a[(c + 1) % a.length][0]
        }
        doc.addEventListener("keydown", function (a) {
            if ((("INPUT" != a.target.tagName || "text" != a.target.type) &&
                    "TEXTAREA" != a.target.tagName && "SELECT" != a.target.tagName || a.target.readOnly) && uiMenuLeft.qf[a.keyCode]) return uiMenuLeft.qf[a.keyCode](), !1
        }, !1);
        uiMenuLeft.K = util.createElement("a", {
            className: "z x",
            parent: doc.body
        });
        uiMenuLeft.H = util.createElement("a", {
            className: "z b",
            parent: doc.body
        });
        util.createElement("span", {
            id: "v",
            onclick: function () {
                uiMenuLeft.G.className = uiMenuLeft.G.className ? "" : "d"
            },
            parent: uiMenuLeft.Ud.model.od
        });
        uiMenuLeft.G = util.createElement(0, {
            id: "m",
            className: "d",
            children: [util.createElement(0), util.createElement("a", {
                className: "g",
                onclick: function () {
                    uiMenuLeft.G.className = "d"
                }
            })],
            parent: doc.body
        });
        uiMenuLeft.qf[77] = function () {
            for (var a = [], b = 0; b < gModels.length; b++) {
                var c =
                    cfgModels[gModels[b]].c[k.layer];
                if (c)
                    for (var d = +k.time, f = 0; f < c.length; f++)
                        if (d >= c[f].Vd && d <= c[f].timeEnd && 0 == d % c[f].Zd) {
                            a.push(gModels[b]);
                            break
                        }
            }
            a = a[(a.indexOf(k.sg()) + 1) % a.length];
            b = cfgModels[a].name;
            c = cfgModels.auto.c[k.layer];
            d = +k.time;
            for (f = 0; f < c.length; f++) c[f].Ug == a && d >= c[f].Vd && d <= c[f].timeEnd && 0 == d % c[f].Zd && (b = u.L + " (" + b + ")", a = "auto");
            k.Yi(a);
            uiMenuLeft.Ud.model.Ke(a);
            uiMenuLeft.hg(u.M, b)
        };
        uiMenuLeft.qf[80] = function () {
            var a = util.po();
            uiMenuLeft.hg(u.Uo || "Presentation mode", a ? u.P : u.O)
        };
        uiAside.Rd()
    };
    uiMenuLeft.modelName = function () {
        if ("auto" == k.model) {
            m = [];
            for (var a = {}, b = 0; b < k.arrModel.length; b++) {

                var c = cfgModels[k.arrModel[b]].name;
                a[c] || (a[c] = !0, m.push(c))
            }
            return m.join("+")
        }
        return cfgModels[k.model].name
    };
    uiMenuLeft.ig = 10;
    uiMenuLeft.Ll = 0;
    uiMenuLeft.Tm = function () {
        var a = util.createElement(0, {
            id: "k",
            parent: doc.body
        });
        uiMenuLeft.Dd = {};
        uiMenuLeft.Dd.od = a;
        uiMenuLeft.Dd.play = util.createElement("a", {
            className: "c u",
            children: ["", util.createElement("span")],
            onclick: function () {
                uiMenuLeft.Ch ? uiMenuLeft.stop(!0) : uiMenuLeft.play()
            },
            parent: a
        });
        uiMenuLeft.Dd.ql = util.createElement("a", {
            className: "c q",
            onclick: function () {
                uiMenuLeft.stop();
                for (var a = cfgModels[k.model].c[k.layer], b = +k.time, c = b, d = !1, f = 0; f < a.length; f++)
                    if (c = b - a[f].Zd, c >= a[f].Vd && c <= a[f].timeEnd) {
                        d = !0;
                        break
                    }
                d && k.Jf(c)
            },
            children: ["", util.createElement("span")],
            parent: a
        });
        uiMenuLeft.Dd.next = util.createElement("a", {
            className: "c t",
            onclick: function () {
                uiMenuLeft.stop();
                for (var a = cfgModels[k.model].c[k.layer], b = +k.time, c = b, d = !1, f = 0; f < a.length; f++)
                    if (c = b + a[f].Zd, c >= a[f].Vd && c <= a[f].timeEnd) {
                        d = !0;
                        break
                    }
                d && k.Jf(c)
            },
            children: ["", util.createElement("span")],
            parent: a
        });
        uiMenuLeft.qf[37] = function () {
            uiMenuLeft.Dd.ql.onclick();
            uiMenuLeft.hg((new Date(k.time - 6E4 * uiMenuLeft.pa)).format(u.te) + " \u2039\u2013")
        };
        uiMenuLeft.qf[39] = function () {
            uiMenuLeft.Dd.next.onclick();
            uiMenuLeft.hg("\u2013\u203a " + (new Date(k.time - 6E4 * uiMenuLeft.pa)).format(u.te))
        };
        uiMenuLeft.Dd.day = util.createElement("a", {
            className: "c w",
            children: ["", util.createElement("span")],
            onclick: function () {
                uiMenuLeft.stop();
                uiMenuLeft.jf.className = uiMenuLeft.jf.className ? "" : "d"
            },
            parent: a
        });
        uiMenuLeft.Dd.now = util.createElement("a", {
            className: "c e",
            style: "display: none",
            children: [""],
            onclick: function () {
                uiMenuLeft.stop();
                k.Jf(new Date(mapOpts.now))
            },
            parent: a
        });
        var b = util.createElement("span", {
            className: "j",
            onclick: function (a) {
                uiMenuLeft.stop();
                var b = this.getBoundingClientRect();
                a = Math.min(Math.max((a.clientX - b.left) / (b.right - b.left), 0), 1);
                a = Math.min(Math.max(a, 0), 1);
                k.Jf(864E5 * Math.floor((k.time - 6E4 * uiMenuLeft.pa) / 864E5) + 864E5 * a * (1 - uiMenuLeft.ig / 1440) + 6E4 * uiMenuLeft.pa)
            },
            parent: a
        });
        Ma(b, function (a) {
            function c(a) {
                var d = b.getBoundingClientRect();
                a = Math.min(Math.max((a.clientX - d.left) / (d.right - d.left), 0), 1);
                a = new Date(864E5 * Math.floor((k.time - 6E4 * uiMenuLeft.pa) / 864E5) + 864E5 * a * (1 - uiMenuLeft.ig / 1440) + 6E4 * uiMenuLeft.pa);
                d = 60 * a.getUTCHours() + a.getUTCMinutes();
                uiMenuLeft.Dd.hour.style.left = (100 / (1440 - uiMenuLeft.ig) * remainder(d + 60 * uiMenuLeft.Gi, 1440)).toFixed(3) + "%";
                a.setUTCHours(uiMenuLeft.Gi, Math.round(d / uiMenuLeft.ig) * uiMenuLeft.ig);
                uiMenuLeft.Dd.hour.setAttribute("time", a.format(u.te))
            }
            uiMenuLeft.Dd.hour.className = "f y";
            c(a);
            return {
                Xg: c,
                Yg: function (a) {
                    b.onclick(a)
                }
            }
        });
        for (var c = [], d = 0; 1440 > d; d += 10) {
            var f = remainder(d + 60 * uiMenuLeft.Gi, 1440);
            c[f] = util.createElement("a", {
                innerHTML: String(f).fe(2,
                    "0"),
                style: "left: " + (100 * f / 1430).toFixed(3) + "%",
                className: "o " + (d % 60 ? "a" : "n") + " " + (d % 180 ? "dv" : "my") + " " + (d % 360 ? "cj" : "ha") + " " + (d % 720 ? "lp" : "bx"),
                parent: b
            })
        }
        uiMenuLeft.to = function () {
            for (var a = (new Date(k.time - 6E4 * uiMenuLeft.pa)).setUTCHours(0, uiMenuLeft.pa + uiMenuLeft.oo, 0, 0), b = 60, d = -b, f = 0; 1440 > f; f += 10) {
                var h = a + 6E4 * f,
                    F = new Date(h - 6E4 * uiMenuLeft.pa);
                c[f].innerHTML = uiMenuLeft.bf(F.format(u.Fg));
                c[f].style.display = "none";
                for (var n = cfgModels[k.model].c[k.layer], q = 0; q < n.length; q++)
                    if (h >= n[q].Vd && h <= n[q].timeEnd && 0 == h % n[q].Zd) {
                        c[f].style.display = "";
                        b = Math.min(f - d, b);
                        d = f;
                        break
                    }
                c[f].title =
                    F.format(u.C + " " + u.te)
            }
            uiMenuLeft.ig = b;
            for (f = uiMenuLeft.Ll = 0; 1440 > f; f += 10) c[f].style.left = (100 * (f - uiMenuLeft.Ll) / (1440 - uiMenuLeft.ig)).toFixed(3) + "%";
            a = 60 * k.time.getUTCHours() + k.time.getUTCMinutes();
            uiMenuLeft.Dd.hour.className = "f o " + (a % 60 ? "a" : "n") + " " + (a % 180 ? "dv" : "my") + " " + (a % 360 ? "cj" : "ha") + " " + (a % 720 ? "lp" : "bx");
            uiMenuLeft.Dd.hour.style.left = (100 / (1440 - uiMenuLeft.ig) * remainder(a + 60 * uiMenuLeft.Gi, 1440)).toFixed(3) + "%"
        };
        uiMenuLeft.Dd.hour = util.createElement("span", {
            className: "f",
            parent: b
        });
        uiMenuLeft.jf = util.createElement(0, {
            id: "d",
            className: "d",
            parent: a
        });
        uiMenuLeft.zk({
            id: "date",
            className: "rw",
            If: function (a) {
                uiMenuLeft.stop();
                a = new Date(+a +
                    6E4 * uiMenuLeft.pa);
                a.setUTCMilliseconds((k.time - 6E4 * uiMenuLeft.pa) % 864E5);
                k.Jf(a)
            },
            parent: a
        });
        uiMenuLeft.zk({
            id: "hour",
            className: "bm",
            If: function (a) {
                k.Jf(a)
            },
            parent: a
        })
    };
    uiMenuLeft.bf = function (a) {
        return a.replace(/\[([^\]]+)\]/g, "<small>$1</small>").replace(/\(([^\)]+)\)/g, "<sup>$1</sup>").replace(/\|/g, "<br>")
    };
    uiMenuLeft.Po = {};
    uiMenuLeft.Cm = function () {
        for (var a = cfgModels[k.model].c[k.layer], b = (new Date).getTime(), c = 0, d = 0; d < a.length; d++) a[d].gj || (b = Math.min(b, a[d].Vd), c = Math.max(c, a[d].timeEnd));
        b = Math.max(b, (new Date(mapOpts.now)).setUTCSeconds(-259200));
        b = new Date(b - 6E4 * uiMenuLeft.pa);
        b.setUTCHours(0,
            0, 0, 0);
        for (var d = +b, c = +new Date(c - 6E4 * uiMenuLeft.pa), f = (new Date(new Date - 6E4 * uiMenuLeft.pa)).setUTCHours(0, 0, 0, 0), r = [], e = -1, J = d; J <= c; J += 864E5) {
            var b = new Date(J),
                h = b.getUTCMonth(),
                S = "";
            e != h && (-1 < e && (S = "ks"), e = h); + b == f && (S += " ls");
            r.push([J, b.format(u.Oa), S])
        }
        uiMenuLeft.Hg.date.zl(r);
        f = [];
        r = -1;
        e = gLayers[k.layer].Uf ? u.Kl : u.Gg;
        for (J = d; J <= c; J += 6E5)
            for (b = new Date(J - 6E4 * uiMenuLeft.pa), S = "", d = b.getUTCDate(), r != d && (-1 < r && (S = "ks"), r = d), d = 0; d < a.length; d++)
                if (!a[d].gj && J >= a[d].Vd && J <= a[d].timeEnd && 0 == J % a[d].Zd) {
                    f.push([J, b.format(e), S]);
                    break
                }
        uiMenuLeft.Hg.hour.zl(f)
    };
    uiMenuLeft.Dj = function (a, b, c, d) {
        for (var f = u.J; a.rows[1];) a.deleteRow(1);
        var r = a.insertRow(-1),
            e = new Date(+b);
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() - f + 7) % 7);
        var g = (new Date(new Date - 6E4 * uiMenuLeft.pa)).setUTCHours(0, 0, 0, 0),
            Y = new Date(+c);
        Y.setUTCHours(0, 0, 0, 0);
        Y.setUTCDate(Y.getUTCDate() + 7 - (Y.getUTCDay() - f + 7) % 7);
        for (var S = (new Date(new Date - 6E4 * uiMenuLeft.pa)).getUTCFullYear(); e < Y;) {
            e.getUTCDay() == f && (r = a.insertRow(-1));
            var F = util.createElement("td", {
                    parent: r
                }),
                n = e.format("dd");
            e >= b && e <= c ? (n = util.createElement("a", {
                textContent: n,
                parent: F,
                onclick: function (a) {
                    return function () {
                        uiMenuLeft.stop();
                        var b = new Date(+a + 6E4 * uiMenuLeft.pa);
                        b.setUTCMilliseconds((k.time - 6E4 * uiMenuLeft.pa) % 864E5);
                        k.Jf(b);
                        return !1
                    }
                }(new Date(e))
            }), e.format("yyyyMMdd") == d && (n.className = "rg")) : n = util.createElement("span", {
                textContent: n,
                parent: F
            }); + e == g && (F.className = "ls");
            var n = e.getUTCMonth(),
                q = e.format(e.getUTCFullYear() != S ? "MMM 'yy" : "MMMM");
            e.setUTCHours(24);
            n != e.getUTCMonth() && (F.className += " qw", r.className += " qw", util.createElement("i", {
                textContent: q,
                parent: r.cells[0]
            }))
        }
    };
    uiMenuLeft.Ui = function () {
        function a() {
            n || -1 != F || (F = e.getUTCMonth());
            for (var a = 0; ba.firstChild;) ba.removeChild(ba.firstChild);
            J.length = Y.length = 0;
            var b = new Date(Math.max(Date.UTC(S, 0, 1, 0), c - 6E4 * uiMenuLeft.pa)),
                d = new Date(Math.min(Date.UTC(S + 1, 0, 1, 0) - 1, +r));
            b.setUTCDate(1);
            for (b.setUTCHours(0, 0, 0, 0); b < d;) F == b.getUTCMonth() && (a = J.length), util.createElement("option", {
                parent: ba,
                value: b.getUTCMonth(),
                textContent: b.format("MMMM"),
                selected: F == b.getUTCMonth()
            }), J.push(+b), b.setUTCMonth(b.getUTCMonth() + 1), Y.push(+b - 1);
            n && (-1 == F && (a = J.length), util.createElement("option", {
                parent: ba,
                value: -1,
                textContent: u.Ma,
                selected: -1 == F
            }), J.push(+r), Y.push(+e));
            uiMenuLeft.Dj(aa, J[a], Y[a])
        }
        for (var b =
                cfgModels[k.model].c[k.layer], c = (new Date).getTime(), d = 0, f = 0; f < b.length; f++) b[f].gj || (c = Math.min(c, b[f].Vd), d = Math.max(d, b[f].timeEnd));
        b = u.J;
        f = new Date(+lb);
        f.setUTCDate(f.getUTCDate() - (f.getUTCDay() - b + 7) % 7);
        var r = new Date(Math.max(c, +f) - 6E4 * uiMenuLeft.pa);
        r.setUTCHours(0, 0, 0, 0);
        var e = new Date(d - 6E4 * uiMenuLeft.pa);
        for (uiMenuLeft.Cm(); uiMenuLeft.jf.firstChild;) uiMenuLeft.jf.removeChild(uiMenuLeft.jf.firstChild);
        util.createElement("a", {
            className: "g",
            onclick: function () {
                uiMenuLeft.jf.className = "d"
            },
            parent: uiMenuLeft.jf
        });
        for (var J = [], Y = [], S = e.getUTCFullYear(), F = -1, n = !0, q = util.createElement("select", {
                parent: uiMenuLeft.jf,
                id: "p",
                onchange: function () {
                    S = +this.value;
                    n = S == r.getUTCFullYear();
                    var b = new Date(+k.time);
                    b.setUTCFullYear(S);
                    b < r ? a() : k.Jf(b)
                }
            }), ba = util.createElement("select", {
                parent: uiMenuLeft.jf,
                id: "r",
                onchange: function () {
                    F = +this.value;
                    var a = this.selectedIndex;
                    uiMenuLeft.Dj(aa, J[a], Y[a])
                }
            }), aa = util.createElement("table", {
                parent: uiMenuLeft.jf
            }), d = aa.insertRow(-1), f = 0; 7 > f; f++) util.createElement("th", {
            textContent: (u.Od || [])[(f + b) % 7] || u.D[(f + b) % 7].slice(0, 2),
            parent: d
        });
        (function () {
            for (; q.firstChild;) q.removeChild(q.firstChild);
            for (var b = e.getFullYear(), d = (new Date(c - 6E4 * uiMenuLeft.pa)).getUTCFullYear(); d <= b; d++) util.createElement("option", {
                parent: q,
                value: d,
                textContent: d,
                selected: S == d
            });
            a()
        })();
        uiMenuLeft.nk = function (b) {
            S = q.value = b.getUTCFullYear();
            n = S == r.getUTCFullYear();
            a();
            for (var c = 0; c < J.length && !(+b < J[c]); c++);
            c--;
            uiMenuLeft.Dj(aa, J[c], Y[c], b.format("yyyyMMdd"));
            ba.value = n && c == J.length - 1 ? -1 : b.getUTCMonth()
        }
    };
    uiMenuLeft.me = function () {
        var a = new Date(new Date - 6E4 * uiMenuLeft.pa),
            b = new Date(k.time - 6E4 * uiMenuLeft.pa);
        uiMenuLeft.Dd.hour.setAttribute("time", b.format(u.te));
        a = a.setUTCHours(0, 0, 0, 0) == b.setUTCHours(0, 0, 0, 0);
        uiMenuLeft.Dd.day.childNodes[1].textContent = a ? u.bc + ", " + b.format(u.C) : b.format("dddd, " +
            u.C);
        setTimeout(uiMenuLeft.cn, 100);
        uiMenuLeft.nk && uiMenuLeft.nk(b);
        uiMenuLeft.Hg.date.Ke(864E5 * Math.floor(b / 864E5));
        uiMenuLeft.Hg.hour.Ke(+k.time);
        uiMenuLeft.to();
        uiMenuLeft.Dd.now.style.display = +k.time < ua.Tj ? "" : "none";
        uiMenuLeft.Hj();
        uiMenuLeft.c.Ii()
    };
    uiMenuLeft.Hj = function () {
        for (var a = [], b = {}, c = 0; c < k.arrModel.length; c++) {
            var b = k.arrModel[c],
                d = cfgModels[b].wd[k.layer].Cd || cfgModels[b].Cd,
                f = cfgModels[b].wd[k.layer].Bd || cfgModels[b].Bd,
                r = (cfgModels[b].wd[k.layer].size || cfgModels[b].size).re,
                e;
            if ("string" == typeof e) e = '<a href="' + cfgModels[b].oe + '" target="_blank">' + cfgModels[b].source + "</a>";
            else {
                e = [];
                for (c = 0; c < cfgModels[b].source.length; c++) e.push('<a href="' + cfgModels[b].oe[c] + '" target="_blank">' +
                    cfgModels[b].source[c] + "</a>");
                e = e.join(", ")
            }
            var b = {
                model: cfgModels[b].name,
                resolution: r,
                updated: (new Date(+d)).format(u.te) + " UTC",
                next: (new Date(+d + 6E4 * f)).format(u.te) + " UTC",
                time: (new Date(k.time - 6E4 * uiMenuLeft.pa)).format(u.te + ", " + u.C),
                altitude: "",
                zone: util.timeZone(uiMenuLeft.pa, uiMenuLeft.Ml),
                source: e
            };
            a.push(util.Ad(u.G, b))
        }
        c = gLayers[k.layer].description;
        gLayers[k.layer].ki && (b.sublayer = b.accumulation = b.altitude = uiMenuLeft.oj(k.layer));
        a.push(util.Ad(u.Oe[c], b));
        uiMenuLeft.G.firstChild.innerHTML = "<p>" + a.join("<p>").replace(/\n\n+/g, "<p>").replace(/\n/g, "<br>")
    };
    uiMenuLeft.Ud = {};
    uiMenuLeft.Bm = function (a,
        b) {
        return util.createElement("select", {
            onchange: function () {
                b(this.value)
            },
            onkeyup: function () {
                this.onchange()
            },
            onfocus: function () {
                doc.documentElement.onmouseenter = function () {
                    doc.documentElement.className = ""
                };
                doc.documentElement.onmouseleave = function () {
                    doc.documentElement.className = "bj"
                }
            },
            onblur: function () {
                doc.documentElement.onmouseenter = doc.documentElement.onmouseleave = null;
                doc.documentElement.className = ""
            },
            parent: a
        })
    };
    uiMenuLeft.Vh = function (a) {
        var b = "nk " + a.className + (a.select ? " qj" : ""),
            c = util.createElement(0, {
                className: b,
                parent: a.parent
            });
        if (a.label) var d =
            util.createElement(0, {
                className: "hv",
                innerHTML: a.label + ":",
                parent: c
            });
        for (var f = util.createElement(0, {
                className: "bb",
                parent: c
            }), r, e = {}, g = 0; g < a.options.length; g++) {
            var Y = a.options[g][0],
                S = util.createElement("a", {
                    textContent: util.gh(a.options[g][1]),
                    value: Y,
                    onclick: function (b) {
                        if (F && b || "disabled" == this.getAttribute("disabled")) return !1;
                        uiMenuLeft.stop();
                        r && (r.className = "");
                        r = this;
                        r.className = "rg";
                        a.If(this.value)
                    },
                    parent: f
                });
            e[Y] = S;
            a.value == Y && (r = S, r.className = "rg")
        }
        if (a.select) {
            var F = uiMenuLeft.Bm(f, function (a) {
                e[a].onclick.call(e[a])
            });
            F.optionsMap = {};
            for (g = 0; g <
                a.options.length; g++) F.optionsMap[a.options[g][0]] = "---" == a.options[g][0].slice(0, 3) ? util.createElement("optgroup", {
                label: util.gh(a.options[g][1]),
                parent: F
            }) : util.createElement("option", {
                value: a.options[g][0],
                textContent: util.gh(a.options[g][1]),
                style: a.options[g][2] ? "font-weight: bold" : "",
                parent: F
            });
            F.value = a.value
        }
        a.id && (uiMenuLeft.Ud[a.id] = {
            Ke: function (a) {
                e[a] && (r && (r.className = ""), F && (F.value = a), r = e[a], r.className = "rg")
            },
            Og: function () {
                c.style.display = "none"
            },
            show: function () {
                c.style.display = ""
            },
            refresh: function () {
                for (var b = 0; b < a.options.length; b++) e[a.options[b][0]].textContent =
                    util.gh(a.options[b][1]);
                a.label && (d.innerHTML = a.label + ":");
                if (F)
                    for (b = 0; b < a.options.length; b++) F.optionsMap[a.options[b][0]]["---" == a.options[b][0].slice(0, 3) ? "label" : "textContent"] = util.gh(a.options[b][1])
            },
            move: function (a) {
                a.appendChild(c)
            },
            ho: function (a) {
                c.className = b + " " + a
            },
            od: c,
            options: e,
            select: F
        }, null === a.value && (c.style.display = "none"))
    };
    uiMenuLeft.Rm = function () {

        uiMenuLeft.uiLoading = util.createElement("span", {
            className: "xx",
            children: [util.createElement("span", {
                className: "yn"
            }), util.createElement("span", {
                className: "dm"
            }), util.createElement("span", {
                className: "tz"
            })],
            parent: doc.body
        })
    };
    uiMenuLeft.Ph = function () {
        uiMenuLeft.uiLoading.style.display = VisualField.cf || toolMask.cf ? "block" : "";
        if (!toolMask.cf && C.Nh) {
            var a = C.Zg / C.Nh;
            C.Fi = a > C.Fi ? (a + C.Fi) / 2 : a;
            C.Zg = C.Nh = 0
        }
    };
    uiMenuLeft.Pm = function () {
        for (var a = util.createElement(0, {
                id: "i",
                parent: doc.body,
                onclick: function () {
                    "jh" == a.className && (a.className = "")
                }
            }), b = {}, c = {}, d = [], f = [], r = 0; r < ma.length; r++)(function (e) {
            function r() {
                k.ih(g) && uiMenuLeft.stop();
                return !1
            }
            var g = e.id;
            e.f && (r = function () {
                uiMenuLeft.stop();
                if (gLayers[k.layer].ki == e.kind)
                    for (var a = 0; a < e.f.length; a++)
                        if (e.f[a].gd == gLayers[k.layer].gd && k.ih(e.f[a].id)) return !1;
                if (e.$f && k.ih(e.$f)) return !1;
                for (a = 0; a < e.f.length; a++)
                    if (k.ih(e.f[a].id)) return !1
            });
            b[g] = util.createElement("a", {
                onclick: function (b) {
                    g == gLayers[k.layer].group && "jh" != a.className ? a.className = "jh" : (a.className = "", r());
                    b.stopPropagation()
                },
                children: ["", util.createElement("span", {
                    className: g
                })],
                parent: a
            });
            f.push([g, {
                label: g,
                toString: function () {
                    return u.c[this.label] || "[" + this.label + "]"
                }
            }]);
            c[g] = util.createElement(0, {
                parent: a
            });
            if (e.f) {
                d.push(g);
                for (var F = [], n = 0; n < e.f.length; n++) F.push([e.f[n].id, {
                    id: e.f[n].id,
                    toString: function () {
                        return uiMenuLeft.oj(this.id)
                    }
                }, e.f[n].ff]);
                uiMenuLeft.Vh({
                    className: "ua",
                    label: {
                        label: e.kind,
                        toString: function () {
                            return u.Wb[this.label] || "[" + this.label + "]"
                        }
                    },
                    select: !0,
                    parent: c[g],
                    id: "sublayer-" + g,
                    options: F,
                    If: function (a) {
                        uiMenuLeft.stop();
                        k.ih(a)
                    }
                })
            }
        })(ma[r]);
        var e = b[gLayers[k.layer].group];
        e.className = "rg";
        uiMenuLeft.Vh({
            className: "xz",
            select: !0,
            parent: a,
            id: "layers",
            options: f,
            If: function (a) {
                return b[a].onclick()
            },
            value: gLayers[k.layer].group
        });
        uiMenuLeft.c = {
            translate: function () {
                for (var c = 0; c < ma.length; c++) b[ma[c].id].firstChild.data = u.c[ma[c].id] || "[" + ma[c].id + "]";
                a.setAttribute("data-title", u.Bn || "[layersTitle]")
            },
            update: function () {
                var a = cfgModels[k.model],
                    c = +k.time,
                    f = [],
                    r;
                for (r in a.c)
                    for (var g = a.c[r], h = 0; h < g.length; h++)
                        if (c >= g[h].Vd && c <= g[h].timeEnd) {
                            f[r] || (f[r] = !0);
                            break
                        }
                g = gLayers[k.layer].group;
                for (c = 0; c < ma.length; c++) {
                    var n = !1,
                        h = ma[c].id;
                    if (ma[c].f)
                        for (r = 0; r < ma[c].f.length && !n; r++) a.c[ma[c].f[r].id] && f[ma[c].f[r].id] && (n = !0);
                    else n = a.c[h] && f[h];
                    n ? b[h].removeAttribute("disabled") : b[h].setAttribute("disabled", "disabled")
                }
                for (c = 0; c < d.length; c++)
                    if (a = uiMenuLeft.Ud["sublayer-" + d[c]], d[c] == g)
                        for (a.show(), a.Ke(k.layer), a = a.select, r = 0; r < Ka.length; r++) Ka[r].group ==
                            g && (h = Ka[r].id, !cfgModels[k.model].c[h] || f && !f[h] ? a.optionsMap[h].parentNode && a.removeChild(a.optionsMap[h]) : a.appendChild(a.optionsMap[h]));
                    else a.Og();
                e.className = "";
                e = b[g];
                e.className = "rg";
                uiMenuLeft.Ud.layers.Ke(g);
                a = uiMenuLeft.Ud.model.select;
                uiMenuLeft.Ud.model.refresh();
                for (var q, c = 0; c < gModels.length; c++)
                    if (f = cfgModels[gModels[c]], !f.hidden) {
                        g = f.c[k.layer];
                        f = +k.time;
                        r = !1;
                        if (g)
                            for (h = 0; h < g.length; h++)
                                if (f >= g[h].Vd && f <= g[h].timeEnd) {
                                    (f = cfgModels[gModels[c]].sf) && !q && (a.appendChild(a.optionsMap["---regional"]), q = !0);
                                    a.optionsMap[f ? "---regional" : "---global"].appendChild(a.optionsMap[gModels[c]]);
                                    r = !0;
                                    break
                                }
                        0 == r && a.optionsMap[gModels[c]].parentNode && a.optionsMap[gModels[c]].parentNode.removeChild(a.optionsMap[gModels[c]])
                    }! q && a.optionsMap["---regional"].parentNode && a.removeChild(a.optionsMap["---regional"])
            },
            Ii: function () {
                var a = "";
                toolMask.j && toolMask.j.h && k.units[toolMask.j.h] && (a = k.units[toolMask.j.h] + ", ");
                e.setAttribute("info", a + uiMenuLeft.modelName())
            }
        }
    };
    uiMenuLeft.oj = function (a) {
        if (!gLayers[a].Eh) return u.f[gLayers[a].label] || "[" + gLayers[a].label + "]";
        var b = cfgModels["auto" == k.model && 1 == k.arrModel.length ? k.arrModel[0] : k.sg()];
        return b ? util.Ad(u.f[gLayers[a].label], {
            time: (new Date((b.wd[a] && b.wd[a].start ||
                b.start) - 6E4 * uiMenuLeft.pa)).format(u.Na + " " + u.te)
        }) : "?"
    };
    uiMenuLeft.ij = {};
    uiMenuLeft.cn = function () {
        var a = uiMenuLeft.Dd.day.childNodes[1],
            b = a.firstChild.data;
        if (b in uiMenuLeft.ij) a.style.letterSpacing = uiMenuLeft.ij[b];
        else {
            a.style.letterSpacing = "";
            var c = a.offsetWidth - 12 - a.offsetHeight;
            a.style.width = 0;
            var d = a.scrollWidth;
            a.style.width = "";
            var f = b.length;
            uiMenuLeft.ij[b] = c < d ? a.style.letterSpacing = ((c - d) / f).toFixed(3) + "px" : ""
        }
    };
    uiMenuLeft.xg = function () {
        uiMenuLeft.c.translate();
        uiMenuLeft.Dd.play.firstChild.data = uiMenuLeft.Ch ? u.oa : u.na;
        uiMenuLeft.Dd.ql.firstChild.data = u.ac;
        uiMenuLeft.Dd.next.firstChild.data = u.$b;
        uiMenuLeft.Dd.day.firstChild.data =
            u.Zb;
        uiMenuLeft.Dd.now.firstChild.data = u.Uc;
        uiMenuLeft.Ui();
        uiMenuLeft.K.title = u.K;
        uiMenuLeft.H.title = u.H;
        var a = mb[u.R ? "metric" : "imperial"],
            b;
        for (b in a) k.units[b] != a[b] && (k.Zi(b, a[b]), toolMask.j && toolMask.j.h == b && uiMenuLeft.Ud[b] && uiMenuLeft.Ud[b].Ke(a[b]));
        var a = util.getElementById("menu-about"),
            c = util.getElementById("menu-app");
        a && (a.firstChild.data = u.V);
        c && (c.firstChild.data = u.df);
        uiMenuLeft.me();
        for (b in uiMenuLeft.Ud) uiMenuLeft.Ud[b].refresh()
    };
    uiMenuLeft.translate = function (a) {
        oa[a].file ? util.We("static/lang-" + a + ".js", function (b) {
            oa[a] = eval("(" + b + ")");
            util.Jk(a);
            uiMenuLeft.translate(a)
        }) : u = oa[a];
        uiSearchBar.xg();
        uiMenuLeft.xg();
        uiSetting.xg();
        z.xg()
    };
    uiMenuLeft.play = function () {
        function a() {
            function d() {
                uiMenuLeft.Ch &&
                    (k.Jf(c), uiMenuLeft.ml = setTimeout(a, 200))
            }
            for (var f, r, e = c, g = !1, h = 0; h < b.length; h++)
                if (c = e + b[h].Zd, c >= b[h].Vd && c <= b[h].timeEnd) {
                    g = !0;
                    break
                }
            if (!g) return uiMenuLeft.stop();
            toolMask.Dh(c, function () {
                f = !0;
                r && d()
            });
            uiMenuLeft.ml = setTimeout(function () {
                r = !0;
                f && d()
            }, 800)
        }
        uiMenuLeft.Ch = !0;
        uiMenuLeft.Dd.play.className = "c nx";
        uiMenuLeft.Dd.play.firstChild.data = u.oa;
        var b = cfgModels[k.model].c[k.layer],
            c = +k.time;
        a();
        k.log("animation", "play")
    };
    uiMenuLeft.stop = function (a) {
        uiMenuLeft.Ch && (uiMenuLeft.Ch = !1, uiMenuLeft.Dd.play.className = "c u", uiMenuLeft.Dd.play.firstChild.data = u.na, clearTimeout(uiMenuLeft.ml), k.log("animation", a ? "manual-stop" : "auto-stop"))
    };
    uiMenuLeft.qf = {};
    uiMenuLeft.hg = function (a, b) {
        var c = b ? a + ": <b>" + b + "</b>" : a;
        uiMenuLeft.oi ? uiMenuLeft.oi.innerHTML = c : uiMenuLeft.oi = util.createElement(0, {
            className: "xn",
            innerHTML: c,
            parent: doc.body
        });
        clearTimeout(uiMenuLeft.An);
        uiMenuLeft.An = setTimeout(function () {
            doc.body.removeChild(uiMenuLeft.oi);
            delete uiMenuLeft.oi
        }, 1750)
    };
    uiMenuLeft.Sm = function () {
        var a = 1 * util.Mf("visit") || 0;
        util.tf("visit", ++a);
        var b = util.getElementById("news");
        if (b) {
            var c = b.getAttribute("data-news");
            2 > a || util.Mf("news") == c ? b.parentNode.removeChild(b) : (b.style.display = "block", util.createElement(0, {
                className: "g",
                parent: b
            }), b.onclick = function () {
                b.className = "d"
            }, util.tf("news", c))
        }
    };
    uiMenuLeft.Hg = {};
    uiMenuLeft.Ve = Math.ceil(win.innerWidth / 100 * 16);
    win.addEventListener("resize", function () {
        uiMenuLeft.Ve = Math.ceil(win.innerWidth / 100 * 16);
        for (var a in uiMenuLeft.Hg) uiMenuLeft.Hg[a].resize()
    }, !1);
    uiMenuLeft.zk = function (a) {
        function b() {
            var a = uiMenuLeft.Ve,
                b = a / win.innerWidth,
                b = Math.atan(b) / Math.PI * 2 / b * b * Math.PI,
                c = a / 2 / Math.tan(b / 2),
                d = e.scrollLeft;
            util.setTransform(r, "translateX(" + -e.scrollLeft + "px)");
            var f = Math.round(-Math.PI / 2 / b + d / a);
            if (f != H) {
                for (var J = 0; 10 > J; J++) {
                    var k = Y[J + f] && S[Y[J + f]] || {
                        Qk: "&nbsp;",
                        className: ""
                    };
                    F[J].innerHTML = k.Qk;
                    F[J].className = k.className
                }
                H = f
            }
            for (J = 0; 10 > J; J++) {
                var n =
                    (J + f) * a,
                    k = (n - d) * b / a / 1.5;
                if (k < -Math.PI / 2 || k > Math.PI / 2) k = Math.PI / 2;
                var q = F[J];
                util.setTransform(q, "translateX(" + (-(J * a - (d + Math.sin(k) * c * 1.5))).toFixed(3) + "px) rotateY(" + k.toFixed(3) + "rad)");
                (n = Math.abs(n - d) < a / 2) && (p = Y[J + f]);
                q.style.background = n ? "rgba(247, 167, 21, " + Math.cos(10 * k).toFixed(3) + ")" : "rgba(0, 0, 0, " + (1 - Math.cos(k)).toFixed(3) + ")";
                q.style.color = n ? "" : "rgba(255, 255, 255, " + Math.cos(k).toFixed(3) + ")"
            }
        }

        function c(a) {
            var b = e.onscroll;
            e.onscroll = null;
            e.scrollLeft = a;
            e.onscroll = b
        }

        function d() {
            if (!aa && !V && (VisualField.paused = !1, p !=
                    v)) {
                var c = Y.indexOf(p);
                if (-1 < c) {
                    var d = c * uiMenuLeft.Ve - e.scrollLeft,
                        f = e.scrollLeft,
                        r = 500 * Math.abs(c - e.scrollLeft / uiMenuLeft.Ve),
                        h = Date.now();
                    VisualField.paused = !0;
                    var J = e.onscroll;
                    e.onscroll = null;
                    var k = setInterval(function () {
                        var c = (Date.now() - h) / r;
                        1 < c && (c = 1, clearInterval(k), VisualField.paused = !1, e.onscroll = J, a.If(p));
                        e.scrollLeft = f + d * c;
                        b()
                    }, 13);
                    v = p
                }
            }
        }
        var f = util.createElement(0, {
                className: "ll " + (a.className || ""),
                parent: a.parent
            }),
            r = util.createElement("ul", {
                parent: f
            });
        try {
            f.addEventListener("touchmove", function (a) {
                a.stopPropagation();
                return !0
            }, !1)
        } catch (k) {}
        for (var e = util.createElement(0, {
                className: "zg",
                parent: f
            }), J = util.createElement(0, {
                parent: e
            }), Y = [], S = {}, F = [], q = 0; 10 > q; q++) F.push(util.createElement("li", {
            innerHTML: "&nbsp;",
            style: "width: " + uiMenuLeft.Ve + "px",
            parent: r
        }));
        var u, ba = 0,
            aa = !1,
            V = !1;
        e.ontouchstart = function (ev) {
            ba++;
            aa = !0;
            VisualField.paused = !0;
            ev.stopPropagation()
        };
        e.ontouchend = function () {
            ba--;
            ba || (aa = !1, d());
            clearInterval(w)
        };
        var w;
        e.ontouchcancel = function () {
            clearInterval(w);
            w = setInterval(function () {
                var a = e.scrollLeft;
                c(a ? a - 1 : a + 1);
                e.scrollLeft != a && (clearInterval(w), aa = !1, d());
                c(a)
            }, 200)
        };
        var p, v;
        e.onscroll = function () {
            VisualField.paused = !0;
            b();
            clearTimeout(u);
            V = !0;
            u = setTimeout(function () {
                V = !1;
                d()
            }, 500)
        };
        e.onclick = function (a) {
            var b = Y.indexOf(p);
            a.clientX > win.innerWidth / 2 ? b++ : b--;
            Y[b] && (p = Y[b], d())
        };
        var H;
        uiMenuLeft.Hg[a.id] = {
            zl: function (a) {
                Y.length = 0;
                S = {};
                for (var d = 0, e = 0; e < a.length; e++) S[a[e][0]] = {
                    Qk: uiMenuLeft.bf(a[e][1]),
                    className: a[e][2]
                }, Y.push(a[e][0]), a[e][0] == p && (d = e);
                J.style.width = Y.length * uiMenuLeft.Ve + (win.innerWidth - uiMenuLeft.Ve) + "px";
                c(d * uiMenuLeft.Ve);
                b()
            },
            Ke: function (a) {
                var d = Y.indexOf(a); - 1 < d && (p = a, c(d * uiMenuLeft.Ve), b())
            },
            resize: function () {
                if (f.offsetWidth) {
                    for (var a = 0; 10 >
                        a; a++) F[a].style.width = uiMenuLeft.Ve + "px";
                    J.style.width = Y.length * uiMenuLeft.Ve + (win.innerWidth - uiMenuLeft.Ve) + "px";
                    this.Ke(p)
                }
            }
        }
    };



    var uiSetting = {
        uiTopMenuSettings: function () {
            var a = doc.getElementsByTagName("menu")[0];
            if (a) {
                uiSetting.link = util.createElement("a", {
                    textContent: u.b,
                    onclick: function () {
                        uiSetting.showSetting();
                        return !1
                    }
                });
                var b = util.createElement("li", {
                    id: "menu-settings",
                    children: [uiSetting.link]
                });
                a.insertBefore(b, a.firstChild);
                setInterval(function () {
                    var a = 4 * VisualField.times / 3;
                    VisualField.times = 0;
                    if (VisualField.particleTheme && !(VisualField.particleTheme.yj || VisualField.paused || k.paused)) {
                        var b = uiSetting.performance;
                        b.unshift(a);
                        b.length = 51;
                        uiSetting.Bh && (doc.title = "[" + Math.round(b[0] + b[1] + b[2]) + "fps] " +
                            doc.title.replace(/^\[\d+fps\]/, ""))
                    }
                    uiSetting.Bi && uiSetting.Bi()
                }, 250);
                uiMenuLeft.qf[87] = function () {
                    "off" == k.themeType ? k.He(k.xh) : k.He("off");
                    uiMenuLeft.hg(u.ra, u.S[k.themeType] || u.T)
                };
                uiMenuLeft.qf[71] = function () {
                    k.Af = !k.Af;
                    uiSetting.yl();
                    uiMenuLeft.hg(u.Y, k.Af ? u.P : u.O)
                };
                uiMenuLeft.qf[70] = function () {
                    uiSetting.pk();
                    uiMenuLeft.hg("FPS", uiSetting.Bh ? u.P : u.O)
                }
            }
        },
        performance: [0, 0, 0, 0],
        yl: function () {
            k.log("settings", "grid-" + (k.Af ? "on" : "off"));
            util.tf("grid", k.Af ? "1" : "0");
            toolMask.createMask()
        },
        uiSettingSection: function (a) {
            for (var b = util.createElement(0, {
                    id: a.id,
                    className: "section",
                    children: [util.createElement(0, {
                        className: "section_header clearfix",
                        children: [util.createElement("h2", {
                            className: "",
                            textContent: a.title
                        })]
                    }), util.createElement(0, {
                        className: "clanek",
                        children: [util.createElement("img", {
                            src: a.ke
                        }), util.createElement("p", {
                            textContent: a.Rj
                        })]
                    })],
                    parent: a.parent
                }), b = util.createElement(0, {
                    className: "resp_table",
                    parent: b
                }), c = util.createElement(0, {
                    className: "resp_table_inner",
                    parent: b
                }), d = 0; d < a.rows.length; d++) {
                var f = util.createElement(a.rows[d].label ? "label" : "div", {
                    className: "resp_table_row " + (a.rows[d].className || ""),
                    parent: c
                });
                util.createElement(0, {
                    className: "resp_table_cell cell1",
                    textContent: a.rows[d].Ae + ":",
                    parent: f
                });
                util.createElement(0, {
                    className: "resp_table_cell cell2",
                    children: a.rows[d].content,
                    parent: f
                })
            }
            return b
        },
        Wg: function () {
            uiSetting.He = null;
            delete uiSetting.Bi
        },
        Bh: !1,
        pk: function () {
            uiSetting.Bh = !uiSetting.Bh;
            uiSetting.Bh || (doc.title = doc.title.replace(/^\[\d+fps\]/, ""))
        },
        Am: function (a) {
            var b = util.createElement("canvas", {
                title: u.Pd,
                width: 140,
                height: 21,
                className: "ja",
                onclick: uiSetting.pk
            });
            a.insertBefore(b, a.firstChild);
            var c = b.getContext("2d");
            c.strokeStyle = "#BBB";
            c.textBaseline = "middle";
            c.font = "10px 'Consolas', 'Lucida Console', 'Courier New', monospace";
            var d = c.createLinearGradient(0, 0, 0, 21);
            d.addColorStop(0, "#EEE");
            d.addColorStop(1, "#BBB");
            uiSetting.Bi = function () {
                c.clearRect(0,
                    0, b.width, b.height);
                c.beginPath();
                c.moveTo(100, 22 - (uiSetting.performance[0] || 0));
                for (var a = 1; a < uiSetting.performance.length; a++) c.lineTo(100 - 2 * a, 22 - (uiSetting.performance[a] || 0));
                c.stroke();
                c.lineTo(0, 22);
                c.lineTo(100, 22);
                c.lineTo(100, 22 - (uiSetting.performance[0] || 0));
                c.fillStyle = d;
                c.fill();
                c.fillStyle = "#888";
                c.fillText((" " + Math.round(uiSetting.performance[0] + uiSetting.performance[1] + uiSetting.performance[2] || 0)).slice(-2), 103, 11);
                c.fillText("   fps", 99, 11)
            };
            uiSetting.Bi()
        },
        Qe: function () {
            history.replaceState({
                Ig: k.themeType
            }, doc.title, ua.tm(k.themeType, k.layer))
        }
    };

    history.pushState ||
        (uiSetting.Qe = function () {});
    uiSetting.nh = util.Mf("wind");
    uiSetting.showSetting = function () {
        function a(a) {
            a = ya + (59 < a ? 1 : a / 63) * (La - ya);
            a != G && (G = a, G == Fa ? (g.style.visibility = "hidden", util.Yn()) : (g.style.visibility = "", util.tf("dpr", G / Fa)), k.resize(), k.log("settings", "resolution"))
        }

        function b() {
            k.He(VisualField.fo(F));
            uiSetting.Qe();
            c.className = "settings jz";
            c.parentNode.onscroll = function () {
                c.className = "settings";
                this.onscroll = null
            };
            q.value = ""
        }
        k.log("settings", "open");
        var c = uiAside.createInner(null, u.b, !0);
        uiAside.yi = uiSetting.Wg;
        uiSetting.Qe();
        c.className = "settings";
        uiAside.yg = "#settings";
        uiAside.ri = !0;
        util.createElement(0, {
            className: "section",
            children: [util.createElement(0, {
                className: "header clearfix",
                children: [util.createElement("h1", {
                    textContent: u.b
                })]
            }), util.createElement(0, {
                className: "header_background"
            }), util.createElement(0, {
                className: "white_space"
            }), util.createElement(0, {
                className: "subheader clearfix",
                children: [util.createElement(0, {
                    className: "destination",
                    textContent: u.cb
                })]
            })],
            parent: c
        });
        util.createElement("ul", {
            className: "menu clearfix",
            children: [util.createElement("li", {
                children: [util.createElement("a", {
                    href: "#settings-main",
                    textContent: u.Z
                })]
            }), util.createElement("li", {
                children: [util.createElement("a", {
                    href: "#settings-wind",
                    textContent: u.$
                })]
            }), util.createElement("li", {
                children: [util.createElement("a", {
                    href: "#settings-colors",
                    textContent: u.X
                })]
            })],
            parent: c
        });
        var d = util.createElement("select", {
                onchange: function () {
                    k.log("settings", "language");
                    util.Mj("lang", this.value);
                    uiMenuLeft.translate(this.value)
                }
            }),
            f = [],
            r;
        for (r in oa) f.push(r);
        f.sort();
        for (var e = 0; r = f[e]; e++) util.createElement("option", {
            value: r,
            textContent: oa[r].label + " [" + r + "]",
            parent: d,
            selected: oa[r] == u
        });
        var g, Y = uiSetting.createInput(a, (G - ya) / (La - ya) * 63, u.ib, u.hb);
        Y.push(g = util.createElement("a", {
            textContent: u.jb,
            style: "display: block; " + (G == Fa ? "visibility: hidden; " : "") + "text-align: center; margin-bottom: -0.6em; position: relative; top: -0.4em",
            onclick: function () {
                a(Y[0].value = (Fa - ya) / (La - ya) * 63)
            }
        }));
        f = util.createElement("select", {
            onchange: function () {
                k.Yi(this.value);
                uiMenuLeft.Ud.model.Ke(this.value)
            }
        });
        util.createElement("option", {
            value: "auto",
            textContent: u.L,
            parent: f,
            selected: "auto" == k.model
        });
        for (e = 0; e < gModels.length; e++)
            if (!cfgModels[gModels[e]].hidden) {
                var S = cfgModels[gModels[e]].sf;
                util.createElement("option", {
                    value: gModels[e],
                    textContent: cfgModels[gModels[e]].name + (S ? " (" + S + ")" : ""),
                    parent: f,
                    selected: k.model == gModels[e]
                })
            }
        uiSetting.uiSettingSection({
            id: "settings-main",
            title: u.Z,
            Rj: u.fb,
            ke: "/images/aside/aplikace.jpg",
            parent: c,
            rows: [{
                    Ae: u.eb,
                    content: [d]
                }, {
                    Ae: u.gb,
                    content: Y
                },
                {
                    Ae: u.M,
                    content: [f],
                    className: "mobile-only"
                }
            ]
        });
        var F = VisualField.getTheme(k.xh),
            q = util.createElement("select", {
                onchange: function () {
                    var a = this.value || uiSetting.nh;
                    a && (k.He(a), uiSetting.Qe())
                }
            });
        uiSetting.He = function (a) {
            q.value = -1 == sa.indexOf(a) ? "" : a;
            F = VisualField.getTheme(a);
            ba.Pe[0].value = F.Pe;
            ba.length[0].value = F.length;
            ba.width[0].value = F.width;
            ba.Df[0].value = F.Df;
            ba.lifeTime[0].value = F.lifeTime;
            ba.opacity[0].value = F.opacity;
            ba.lf[0].value = F.lf;
            p.value = F.color
        };
        for (var p = util.createElement("select", {
                onchange: function () {
                    F.color = 1 * this.value;
                    b()
                }
            }), e = 0; e < sa.length; e++) "off" != sa[e] && util.createElement("option", {
            value: sa[e],
            textContent: u.S[sa[e]] || sa[e],
            parent: q
        });
        util.createElement("option", {
            value: "",
            textContent: u.T,
            parent: q
        });
        q.value = -1 < sa.indexOf(k.xh) ? k.xh : "";
        for (e = 0; e < 2 * Ca.length; e++) util.createElement("option", {
            value: e,
            textContent: u.mb[e],
            parent: p,
            selected: F.color == e
        });
        var ba = {};
        uiSetting.uiSettingSection({
            id: "settings-wind",
            title: u.$,
            Rj: u.ob,
            ke: "/images/aside/cary.jpg",
            parent: c,
            rows: [{
                Ae: u.Bb,
                content: [q],
                className: "highlighted"
            }, {
                Ae: u.Cb,
                content: ba.Pe = uiSetting.createInput(function (a) {
                    F.Pe = a;
                    b()
                }, F.Pe, u.Eb, u.Db)
            }, {
                Ae: u.sb,
                content: ba.length = uiSetting.createInput(function (a) {
                    F.length =
                        a;
                    b()
                }, F.length, u.ub, u.tb)
            }, {
                Ae: u.Fb,
                content: ba.width = uiSetting.createInput(function (a) {
                    F.width = a;
                    b()
                }, F.width, u.Hb, u.Gb)
            }, {
                Ae: u.Ib,
                content: ba.Df = uiSetting.createInput(function (a) {
                    F.Df = a;
                    b()
                }, F.Df, u.Kb, u.Jb)
            }, {
                Ae: u.vb,
                content: ba.lifeTime = uiSetting.createInput(function (a) {
                    F.lifeTime = a;
                    b()
                }, F.lifeTime, u.xb, u.wb)
            }, {
                Ae: u.yb,
                content: ba.opacity = uiSetting.createInput(function (a) {
                    F.opacity = a;
                    b()
                }, F.opacity, u.Ab, u.zb)
            }, {
                Ae: u.pb,
                content: ba.lf = uiSetting.createInput(function (a) {
                    F.lf = a;
                    b()
                }, F.lf, u.rb, u.qb)
            }, {
                Ae: u.lb,
                content: [p]
            }]
        });
        uiSetting.Am(c.querySelector("#settings-wind .section_header"));
        e = util.createElement("input", {
            type: "checkbox",
            checked: k.Af,
            onclick: function () {
                k.Af = this.checked;
                uiSetting.yl()
            }
        });
        d = [{
            Ae: u.Y,
            content: [e],
            label: !0
        }];
        f = util.createElement("select", {
            onchange: function () {
                w.ie = Ea[this.selectedIndex];
                w.ge();
                util.tf("borders", this.selectedIndex)
            }
        });
        for (e = 0; e < Ea.length; e++) util.createElement("option", {
            value: Ea[e],
            textContent: u.ab[e] || Ea[e],
            parent: f,
            selected: Ea[e] == w.ie
        });
        d.push({
            Ae: u.$a,
            content: [f]
        });
        for (var aa in na) {
            f = [];
            e = 0;
            for (r in na[aa]) f.push(r), e++;
            if (!(2 > e)) {
                S = util.createElement("select", {
                    onchange: function () {
                        var a = this.value.split("|");
                        k.Zi(a[0], a[1])
                    }
                });
                for (e = 0; e <
                    f.length; e++) util.createElement("option", {
                    value: aa + "|" + f[e],
                    textContent: f[e],
                    parent: S,
                    selected: k.units[aa] == f[e]
                });
                d.push({
                    Ae: u.kb[aa] || aa,
                    content: [S]
                })
            }
        }
        uiSetting.uiSettingSection({
            id: "settings-colors",
            title: u.X,
            Rj: u.bb,
            ke: "/images/aside/mapy.jpg",
            parent: c,
            rows: d
        })
    };
    uiSetting.createInput = function (onChange, val, strL, strR) {
        return [util.createElement("input", {
            type: "range",
            onchange: function () {
                onChange(1 * this.value)
            },
            min: 0,
            max: 63,
            value: val
        }), util.createElement("br"), util.createElement("span", {
            textContent: String(strL)
        }), strR]
    };
    "range" != util.createElement("input", {
        type: "range"
    }).type && (uiSetting.createInput = function (onChange, val, strL, strR) {
        for (var f = Array(64).join("\u00b7") + "(o)" +
                Array(64).join("\u00b7"), r = [], e = 0; 64 > e; e++) r.push(util.createElement("option", {
            value: e,
            textContent: f.substr(63 - e, 66)
        }));
        r[void 0 === val ? 31 : Math.round(val)].selected = !0;
        return [util.createElement("select", {
            style: "text-align: center; margin: auto; display: block; margin-bottom: -1em; width: 100%",
            onchange: function () {
                onChange(1 * this.value)
            },
            children: r
        }), util.createElement("br"), util.createElement("span", {
            textContent: String(strL)
        }), strR]
    });
    uiSetting.xg = function () {
        uiSetting.link && (uiSetting.link.textContent = u.b);
        "#settings" == uiAside.yg && uiSetting.showSetting()
    };

    var uiAside = {
        Rd: function () {
            uiAside.Jn();
            uiAside.jj = null;
            uiAside.Hf = 0;
            uiAside.$d = util.getElementById("aside");
            var eleAbout = util.getElementById("menu-about");
            if (eleAbout) {
                var b = eleAbout.parentNode.parentNode;
                b.onclick = function () {
                    this.className = this.className ? "" : "k"
                };
                b.ontouchstart = function (ev) {
                    if (this.className && "A" != ev.target.tagName) return this.className = "", !1
                };
                eleAbout.onclick = function () {
                    uiAside.createPanel("about", u.V, !0);
                    return !1
                }
            }
            uiSetting.uiTopMenuSettings();
            z.uiTopMenuShare()
        },
        Hm: function () {
            if (uiAside.$d && (uiAside.yg = location.href.replace(/.*\/|[?#].*/g, ""), uiAside.ri = !0, uiAside.ck(), uiAside.Lf)) return k.Vg(uiAside.Lf.lat, uiAside.Lf.lon, 5), !0
        },
        createInner: function (a, b, c, d) {
            util.getElementById("header").className = "";
            b = b ? util.Ad("{page} \u2013 Ventusky", {
                    page: b
                }) :
                "Ventusky";
            history.pushState && !d && (a ? history.pushState({
                detail: a,
                title: b,
                Co: c
            }, b, mapOpts.root + (u.Ha ? u.Ha + "/" + a : a)) : history.pushState({}, b));
            doc.title = b;
            a && k.bl(a);
            uiAside.$d ? (uiAside.Wg(), a = uiAside.$d.getElementsByTagName("div")[0], a.innerHTML = "", a.className = "") : uiAside.$d = util.createElement(0, {
                parent: doc.body,
                id: "aside",
                children: [a = util.createElement(0, {
                    parent: doc.body,
                    id: "aside_inner"
                })]
            });
            doc.body.className = "panel";
            util.createElement("span", {
                onclick: uiAside.close,
                id: "aside_close_btn",
                children: [util.createElement("span", {
                    className: "aside_close_btn_ico"
                })],
                parent: uiAside.$d
            });
            return a
        },
        createPanel: function (a, b, c, d, f) {
            var r = uiAside.createInner(a, b, c, d);
            // uiLoading
            util.createElement("span", {
                className: "xx",
                children: [util.createElement("span", {
                    className: "yn"
                }), util.createElement("span", {
                    className: "dm"
                }), util.createElement("span", {
                    className: "tz"
                })],
                parent: r
            });
            uiAside.yg = a;
            uiAside.ri = !0;
            util.We(util.Ad(Wa, {
                link: a,
                lang: u.code,
                id: f || ""
            }), function (a) {
                r.innerHTML = a;
                uiAside.ck()
            })
        },
        Jm: function () {
            var a = this.href.replace(/.*\/|[?#].*/g, "");
            util.ak(util.Ad(Wa, {
                link: a,
                lang: u.code,
                id: this._auxId || ""
            }));
            return !1
        },
        Zh: function () {
            uiAside.createPanel(this.href.replace(/.*\/|[?#].*/g, ""), this.textContent, !1, !1, this._auxId);
            return !1
        }
    };
    mapOpts.clickLink && (uiAside.Zh =
        function () {
            this.target = "_parent";
            return !0
        });
    uiAside.Mn = function (a, b) {
        util.ak(util.Ad(Xa, k.Oh(a, b)))
    };
    uiAside.$k = function (a, b) {
        function c() {
            n.className = g + n.offsetHeight + 12 > win.innerHeight ? "rc" : ""
        }

        function d(a) {
            a.target.parentNode != n && f()
        }

        function f() {
            uiAside.al = !0;
            setTimeout(function () {
                uiAside.al = !1
            }, 333);
            doc.body.removeChild(n);
            doc.documentElement.removeEventListener("touchstart", d, !1);
            doc.documentElement.removeEventListener("mousedown", d, !1);
            doc.documentElement.removeEventListener("wheel", d, !1)
        }
        if (!uiAside.al) {
            var r = k.Oh(a, b),
                e = util.createElement("a", {
                    href: uiAside.aj(a,
                        b),
                    textContent: util.coords(r, 3 < T),
                    onclick: uiAside.Zh
                });
            e.setAttribute("data-distance", "0 km");
            var g = b / G,
                n = util.createElement(0, {
                    id: "l",
                    style: "left: " + a / G + "px; top: " + g + "px",
                    parent: doc.body,
                    children: [e]
                });
            util.We(util.Ad(Xa, r), function (a) {
                try {
                    var b = JSON.parse(a || "[]")
                } catch (d) {
                    return
                }
                for (a = 0; a < b.length; a++) {
                    var e = !mapOpts.clickLink && b[a].url || util.Ad(mapOpts.clickLink || "{lat};{lon}", {
                            lat: b[a].lat.toFixed(3),
                            lon: b[a].lon.toFixed(3)
                        }),
                        e = util.createElement("a", {
                            href: e,
                            textContent: w.rk(b[a]),
                            onclick: uiAside.Zh
                        });
                    e._auxId = b[a].id;
                    e.setAttribute("data-distance", util.gl(b[a].distance,
                        100) + " km");
                    n.appendChild(e)
                }
                c()
            });
            c();
            doc.documentElement.addEventListener("touchstart", d, !1);
            doc.documentElement.addEventListener("mousedown", d, !1);
            doc.documentElement.addEventListener("wheel", d, !1);
            n.addEventListener("click", f, !1)
        }
    };
    uiAside.ck = function () {
        util.getElementById("aside_close_btn") && (util.getElementById("aside_close_btn").onclick = uiAside.close);
        var a = util.getElementById("star");
        if (a) {
            for (var b = a.getAttribute("data-star").split(";"), b = {
                    lat: parseFloat(b[0]),
                    lon: parseFloat(b[1]),
                    name: b[2],
                    url: uiAside.yg
                }, c = !1, d = 0; d < uiAside.qe.length; d++)
                if (b.lon == uiAside.qe[d].lon &&
                    b.lat == uiAside.qe[d].lat || uiAside.qe[d].url == b.url) {
                    uiAside.qe[d].temporary || (c = !0);
                    uiAside.Lf = uiAside.qe[d];
                    break
                }
            a.onclick = function () {
                (c = !c) ? delete uiAside.Lf.temporary: uiAside.Lf.temporary = !0;
                this.className = c ? "" : "star_empty";
                w.Of();
                uiAside.xl()
            };
            uiAside.Lf || (uiAside.tk(), uiAside.Lf = {
                lon: b.lon,
                lat: b.lat,
                name: b.name || "",
                url: uiAside.yg,
                temporary: !0
            }, uiAside.qe.push(uiAside.Lf), w.Of());
            c = !c;
            a.onclick()
        }
        uiAside.rm()
    };
    uiAside.Wg = function () {
        uiAside.yi && (uiAside.yi(), delete uiAside.yi);
        uiAside.ri = !1;
        uiAside.Lf = null;
        uiAside.xl();
        v.Xm()
    };
    uiAside.close = function () {
        uiAside.$d && (uiAside.Wg(), uiAside.$d.parentNode.removeChild(uiAside.$d), doc.body.className = "", doc.title = "Ventusky",
            delete uiAside.$d, delete uiAside.yg, k.Qe(!0))
    };
    uiAside.aj = function (a, b) {
        var c = k.Oh(a, b);
        return util.Ad(mapOpts.clickLink || "{lat};{lon}", {
            lat: c.lat.toFixed(3),
            lon: c.lon.toFixed(3)
        })
    };
    uiAside.qe = [];
    uiAside.Jn = function () {
        try {
            var a = JSON.parse(localStorage.getItem("bookmarks"))
        } catch (b) {}
        a && (uiAside.qe = a)
    };
    uiAside.Dl = function (a, b, c) {
        uiAside.tk();
        uiAside.qe.push({
            lat: a,
            lon: b,
            name: c,
            temporary: !0
        })
    };
    uiAside.tk = function () {
        for (var a = [], b = 0; b < uiAside.qe.length; b++) uiAside.qe[b].temporary || a.push(uiAside.qe[b]);
        uiAside.qe = a
    };
    uiAside.xl = function () {
        for (var a = [], b = 0; b < uiAside.qe.length; b++) uiAside.qe[b].temporary || a.push(uiAside.qe[b]);
        try {
            localStorage.setItem("bookmarks", JSON.stringify(a))
        } catch (c) {}
    };
    uiAside.Si = function () {
        for (var a = uiAside.$d.querySelectorAll("[data-frame]"), b = 0; b < a.length; b++)(function (a) {
            for (var b = a.getAttribute("data-frame"), c = a.getElementsByTagName("select"), e = 0; e < c.length; e++) c[e].onchange = function () {
                var c = util.Ad(b, {
                    link: this.value
                });
                util.We(c, function (b) {
                    a.innerHTML = b;
                    uiAside.Si()
                })
            };
            a.onclick = function (a) {
                if (a = a.target.getAttribute("data-link")) {
                    a = util.Ad(b, {
                        link: a
                    });
                    var c = this;
                    util.We(a, function (a) {
                        c.innerHTML = a;
                        uiAside.Si()
                    })
                }
            }
        })(a[b]);
        a = uiAside.$d.querySelectorAll(".unroll select");
        for (b = 0; b < a.length; b++) {
            var c = a[b];
            c.parentNode.getAttribute("data-text") || (c.parentNode.setAttribute("data-text", c.options[c.selectedIndex].textContent), c.addEventListener("change", c.Qh = function () {
                this.parentNode.setAttribute("data-text", this.options[this.selectedIndex].textContent)
            }, !1))
        }
    };
    uiAside.rm = function () {
        uiAside.Si();
        var a = uiAside.$d.querySelector("[data-forecast]");
        if (a) {
            a = a.getAttribute("data-forecast");
            uiAside.jj = JSON.parse(a);
            uiAside.Hf = 1;
            var b = doc.querySelector("#forecast #date_selector");
            if (b) {
                b.onchange = function () {
                    uiAside.so(b.options.length)
                };
                if (a = doc.querySelector("#forecast a.round_button.next")) a.onclick = function () {
                    return uiAside.hh(2, 1, b.options.length)
                };
                for (a = 1; 7 >= a; a++) {
                    var c = util.getElementById("d_" + a);
                    c && (c.onclick = function () {
                        return uiAside.hh(this.id.substr(2), 1, b.options.length)
                    })
                }
            }
        }
        if (a = uiAside.$d.querySelector("[data-aq]")) a = a.getAttribute("data-aq").split(";"), uiAside.Gn(+a[0], +a[1]);
        if (a = uiAside.$d.querySelector("[data-astro]")) a = a.getAttribute("data-astro").split(";"), v.Gd.B = {
            hk: +a[3],
            fj: +a[4]
        }, v.Rd(+a[0], +a[1], new Date(1E3 *
            a[2]))
    };
    uiAside.uo = function (a, b) {
        function c() {
            return uiAside.hh(uiAside.Hf + 1, a, b)
        }

        function d() {
            return uiAside.hh(uiAside.Hf - 1, a, b)
        }
        var f = "",
            r = "",
            e = "a",
            g = "a";
        uiAside.Hf >= b && (uiAside.Hf = b, r = "inactive", g = "span", c = null);
        uiAside.Hf <= a && (uiAside.Hf = a, f = "inactive", e = "span", d = null);
        getElementById("arrows").innerHTML = "";
        util.createElement(e, {
            parent: getElementById("arrows"),
            className: "round_button previous " + f,
            onclick: d
        });
        util.createElement(g, {
            parent: getElementById("arrows"),
            className: "round_button next " + r,
            onclick: c
        })
    };
    uiAside.so = function (a) {
        var b = getElementById("date_selector");
        uiAside.hh(b.options[b.selectedIndex].value, 1, a)
    };
    uiAside.hh = function (a, b,
        c) {
        var d = uiAside.jj.gustDesc,
            f = "d_" + a;
        uiAside.Hf = a;
        uiAside.uo(b, c);
        for (a = b; a <= c; a++) getElementById("d_" + a).className = "";
        getElementById(f).className = "active";
        getElementById("date_selector").value = uiAside.Hf;
        getElementById("date_selector").Qh();
        c = uiAside.jj[f];
        for (a = 0; 24 > a; a += 3) {
            f = "h_" + a;
            "undefined" === typeof c[f].td && (c[f].s = 0, c[f].td = "-", c[f].sr = 0, c[f].srd = "-", c[f].vsd = "-", c[f].vg = 0, c[f].vgd = "-", c[f].vd45 = 0, c[f].vdId = "S");
            b = "";
            0 < c[f].sr && (b = "with_ico drop");
            var r = "wind_ico arrow_" + c[f].vd45,
                e = "";
            70 < c[f].vg ? e = '<span class="with_ico pozor">' + d + ":<br> " + c[f].vgd + "</span>" : 50 < c[f].vg &&
                (e += '<span class="with_ico pozor-nizke">' + d + ":<br> " + c[f].vgd + "</span>");
            var g = "";
            1 == c[f].n && (g = "_noc");
            getElementById("s_" + a).className = "big_ico big_ico_" + c[f].s + g;
            getElementById("t_" + a).innerHTML = c[f].td;
            getElementById("sr_" + a).className = b;
            getElementById("sr_" + a).innerHTML = c[f].srd;
            getElementById("v_" + a).className = r;
            getElementById("v_" + a).innerHTML = c[f].vdId;
            getElementById("vs_" + a).innerHTML = c[f].vsd;
            getElementById("w_" + a).innerHTML = e
        }
        return !1
    };
    uiAside.Gn = function (a, b) {
        util.We(util.Ad("https://api.waqi.info/feed/geo:{lat};{lon}/?token=904a1bc6edf77c428347f2fe54cf663bcffaec21", {
            lat: a,
            lon: b
        }), function (c) {
            function d(a) {
                return 50 >=
                    a ? 0 : 100 >= a ? 1 : 150 >= a ? 2 : 200 >= a ? 3 : 300 >= a ? 4 : 5
            }
            try {
                var f = JSON.parse(c || "[]")
            } catch (h) {
                return
            }
            if ("ok" === f.status) {
                c = f.data;
                var f = c.city.geo[0],
                    r = Math.PI / 180,
                    f = Math.pow(Math.sin((f - a) * r / 2), 2) + Math.cos(a * r) * Math.cos(f * r) * Math.pow(Math.sin((c.city.geo[1] - b) * r / 2), 2),
                    f = 12734 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
                if (!(10 < f || (r = c.aqi, 0 > r || 500 < r))) {
                    var e = d(r),
                        J = 90 + Math.min(r, 360),
                        k = eb[e],
                        n = "#ebeff1";
                    180 < r && (J -= 180, n = k);
                    var F = getElementById("aq_pie");
                    F.style.cssText = "background-image: linear-gradient(" + J + "deg, transparent 50%, " + n + " 50%), linear-gradient(90deg, #ebeff1 50%, transparent 50%); ";
                    F.style.cssText += "background-color: " + k + ";";
                    F.className = "pie";
                    r = Math.round(r);
                    getElementById("aq_val").innerHTML = '<strong class="quality-text-' + e + '" style="font-size: 150%;">AQI ' + r + "</strong>";
                    getElementById("aq_i" + e).style.cssText = "";
                    r = {
                        pm10: "PM<sub>10</sub>",
                        pm25: "PM<sub>2.5</sub>",
                        no2: "NO<sub>2</sub>",
                        so2: "SO<sub>2</sub>",
                        o3: "O<sub>3</sub>",
                        co: "CO"
                    };
                    e = getElementById("ai_info_table");
                    n = e.insertRow(-1);
                    J = n.insertCell(0);
                    n = n.insertCell(1);
                    n.innerHTML = "AQI";
                    for (var l in r) J = c.iaqi[l], void 0 !== J && (k = Math.round(J.v), n = e.insertRow(-1), J = n.insertCell(0),
                        n = n.insertCell(1), J.innerHTML = r[l], n.innerHTML = '<strong class="quality-text-' + d(k) + '">' + k + "</strong>");
                    f = Math.round(f);
                    t = (new Date(1E3 * c.time.v)).format(u.C + " " + u.te);
                    e = c.city.name;
                    e = e.split(",")[0];
                    l = getElementById("ai_info");
                    r = l.textContent.split(";");
                    e = r[0] + " " + e + ", ";
                    e += r[1] + ": " + f + " km (" + t + "), ";
                    e += c.attributions[0].name;
                    l.textContent = e;
                    getElementById("aq_section").style.cssText = ""
                }
            }
        })
    };
    var R = {
        block: {},
        hf: [],
        Zk: function (a, b, c, d) {
            a = remainder(a, 1 << c);
            a = c + "/" + a + "/" + b;
            var f = R.block[a];
            if (f) return f;
            R.block[a] = f = {
                loaded: 0
            };
            for (b =
                0; c = ["land", "border"][b]; b++) f[c] = util.createElement("img"), f[c].onload = function () {
                this.onload = this.onerror = null;
                f.loaded++;
                3 == f.loaded && d()
            }, f[c].onerror = function () {
                this.src = this.an
            }, f[c].crossOrigin = "Anonymous", f[c].src = R.Aj(c, a + ".png"), f[c].an = R.Aj(c, "empty.png");
            util.We(R.Aj("cities", a + ".js"), function (a) {
                try {
                    f.cities = JSON.parse(a || "[]")
                } catch (b) {
                    f.cities = []
                }
                f.loaded++;
                3 == f.loaded && d()
            });
            R.hf.push(a);
            50 < R.hf.length && (a = R.block[R.hf[0]], a.land.onload = a.land.onerror = a.border.onload = a.border.onerror = null, delete R.block[R.hf[0]],
                R.hf.shift(), a = null)
        },
        Aj: function (a, b) {
            return kb[a] + "/" + b
        }
    };
    R.Ik = util.createElement("img", {
        src: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    });
    R.In = function (a, b, c, d) {
        function f() {
            r.land.onload = r.land.onerror = null;
            r.loaded = 3;
            d()
        }
        a = remainder(a, 1 << c);
        a = c + "/" + a + "/" + b;
        var r = R.block[a];
        if (r) return r;
        R.block[a] = r = {
            loaded: 0
        };
        r.border = R.Ik;
        r.cities = [];
        r.land = util.createElement("img");
        r.land.onload = function () {
            f()
        };
        r.land.onerror = function () {
            r.land = R.Ik;
            f()
        };
        r.land.crossOrigin = "Anonymous";
        r.land.src = "https://cdnstatic.ventusky.com/tiles/v1.0/osm/" +
            a + ".png";
        R.hf.push(a);
        200 < R.hf.length && (a = R.block[R.hf[0]], a.land.onload = a.land.onerror = a.border.onload = a.border.onerror = null, delete R.block[R.hf[0]], R.hf.shift(), a = null)
    };


    // ????????????
    var VisualField = {};
    VisualField.canvas = util.createElement("canvas");
    VisualField.context = VisualField.canvas.getContext("2d");
    VisualField.ze = [];
    VisualField.o = "10m";
    VisualField.dh = Ja["10m"].kind;
    VisualField.me = function () {
        VisualField.cf = !0;
        uiMenuLeft.Ph();
        var a = Ja[VisualField.o],
            b = a.kind;
        if ("wind" == b) var c = [a.xe, a.ye];
        else "wave" == b && (c = a.g ? [a.height, a.direction, a.g.height, a.g.direction] : [a.height, a.direction]);
        var d = VisualField.sg();
        if (d) {
            var f = d + (a.qg || ""),
                r = {
                    model: f,
                    time: k.time,
                    layer: c,
                    cache: String(cfgModels[d].end).replace(/0+$/, "")
                },
                e = cfgModels[d].wd[k.layer] && cfgModels[d].wd[k.layer].size || cfgModels[d].size,
                c = util.Ad(Pa, r);
            util.Gk(c, function (c) {
                if (!(r.model != f || r.time - k.time)) {
                    VisualField.dh != b && (VisualField.dh = b, uiMenuLeft.Ud["wind-type"].refresh());
                    VisualField.dh = b;
                    var d = a.zg || VisualField.Wm;
                    VisualField.zg != d && (VisualField.zg = d, uiSetting.He && "off" != k.themeType && uiSetting.He(k.themeType));
                    "wind" == b ? (VisualField.Xj = c[0], VisualField.Yj = c[1], VisualField.im = a.ve) : (VisualField.Ul = c[0], VisualField.Tl = c[1], VisualField.Rl = a.g, VisualField.Ao = a.oh, VisualField.Vl = a.rj, VisualField.Bo = a.threshold, VisualField.Rl && (VisualField.yo = c[2], VisualField.xo = c[3], VisualField.wo = a.g.oh, VisualField.Sl = a.g.rj, VisualField.zo = a.g.threshold));
                    VisualField.Fd = VisualField.pg = e.Fd || 720;
                    VisualField.Ed = e.Ed || 360;
                    VisualField.Mi = 0;
                    VisualField.Ni =
                        0;
                    e.ae && (VisualField.Ed *= 180 / (e.ae - e.Be), VisualField.Ni = VisualField.Ed * (90 - e.ae) / 180);
                    e.Ce && (VisualField.Fd *= 360 / (e.Ce - e.De), VisualField.Mi = VisualField.Fd * (180 + e.De) / 360);
                    e.le ? VisualField.le = toolMask.Lk(e)[VisualField.pg]["0,0"] : VisualField.le = null;
                    VisualField.cache.length = 0;
                    VisualField.cf = !1;
                    uiMenuLeft.Ph();
                    VisualField.Ci()
                }
            })
        }
    };
    VisualField.sg = function () {
        for (var a, b, c = 0;
            (!b || a) && c < k.arrModel.length; c++) b = k.arrModel[c], a = cfgModels[b].sf;
        return b && cfgModels[b].nf ? cfgModels[b].nf : b
    };
    VisualField.Fd = VisualField.pg = 720;
    VisualField.Ed = 360;
    VisualField.char64 = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz_-0123456789";
    VisualField.charTo64 = function (char64) {
        for (var b = {}, c = 0; c < char64.length; c++) b[char64.charAt(c)] = c;
        return b
    }(VisualField.char64);
    VisualField.zg = VisualField.Wm = {};
    VisualField.getTheme = function (themeType) {

        themeType = VisualField.zg[themeType] || hb[themeType] || themeType;
        themeType = themeType.slice(1);

        var b = {};
        b.Pe = VisualField.charTo64[themeType.charAt(0)];
        b.length = VisualField.charTo64[themeType.charAt(1)];
        b.width = VisualField.charTo64[themeType.charAt(2)];
        b.Df = VisualField.charTo64[themeType.charAt(3)];
        b.lifeTime = VisualField.charTo64[themeType.charAt(4)];
        b.opacity = VisualField.charTo64[themeType.charAt(5)];
        b.lf = VisualField.charTo64[themeType.charAt(6)];
        b.color = VisualField.charTo64[themeType.charAt(7)] % (2 * Ca.length);
        return b
    };
    VisualField.fo = function (a) {
        return "0" + (VisualField.char64.charAt(a.Pe) + VisualField.char64.charAt(a.length) + VisualField.char64.charAt(a.width) + VisualField.char64.charAt(a.Df) + VisualField.char64.charAt(a.lifeTime) + VisualField.char64.charAt(a.opacity) + VisualField.char64.charAt(a.lf) + VisualField.char64.charAt(a.color))
    };
    VisualField.getParticleTheme = function (a, b, theme) {
        if ("off" == theme) return {
            Pe: 0,
            opacity: 0
        };
        theme = VisualField.getTheme(theme);

        var d = theme.width / 64 * 2.8 + .2;
        var f = theme.Df / 64 * 2.8 / 2;
        var r = [];
        for (var i = 0; 5 > i; i++) r.push(Math.max(d + f * (i - 2), .2));
        d = theme.lifeTime / 64 * 135 + 20;
        f = .45 * d;
        return {
            Pe: a * (theme.Pe / 64 * 1.6 + .2) / ((b + 6) * (b + 6)),
            opacity: .7 * (1 - theme.opacity / 64) + .3,
            color: Ca[theme.color % Ca.length] || "#FFF",
            $h: gb[theme.color % Ca.length] || "#000",
            Bg: theme.color >= Ca.length,
            jg: r,
            hm: theme.width / 64,
            Df: theme.Df / 64,
            length: (theme.length / 64 * (.025 - .0055) + .0055) * (1.2 + b),
            lf: 1 - (63 - theme.lf) / 64 / 8 - .003 * b,
            ph: d - f,
            Ek: 2 * f
        }
    };
    VisualField.particleTheme = {};
    VisualField.Ci = function () {
        var a = !!VisualField.particleTheme.Bg;
        VisualField.particleTheme = VisualField.getParticleTheme(N * I, T, k.themeType);
        VisualField.particleTheme.yj = !VisualField.particleTheme.Pe;
        VisualField.particleTheme.jg || (VisualField.particleTheme.jg = [1]);
        VisualField.canvas.style.opacity = Math.min(VisualField.particleTheme.opacity / (VisualField.particleTheme.Bg && toolMask.j ? toolMask.j.opacity : 1), 1);
        VisualField.context.strokeStyle = VisualField.tmpContext.strokeStyle = VisualField.particleTheme.color;
        a != VisualField.particleTheme.Bg && w.od.insertBefore(VisualField.canvas, VisualField.particleTheme.Bg ? toolMask.Kd : toolMask.Kd.nextSibling);
        VisualField.Un();
        VisualField.context.setLineDash && VisualField.context.setLineDash([]);
        var a = "",
            b = Ja[VisualField.o];
        "wave" == b.kind && b.g && (a = '<b style="color: ' + (VisualField.Vl ? VisualField.particleTheme.$h : VisualField.particleTheme.color) + '">' + u.dc + '</b> <b style="color: ' + (VisualField.Sl ? VisualField.particleTheme.$h : VisualField.particleTheme.color) + '">' + u.Xb + "</b>");
        toolMask.createLegendLeft.innerHTML = a
    };
    VisualField.Rd = function () {};
    VisualField.Un = function () {
        var a = Math.round(VisualField.particleTheme.Pe);
        if (VisualField.ze.length < a)
            for (var b = VisualField.ze.length; b < a; b++) VisualField.ze.push(VisualField.init({}, 0));
        else VisualField.ze.length = a
    };
    VisualField.init = function (a, b) {
        a.x = Math.random() * (N + 2 * qa) - qa;
        a.y = Math.random() * (I + 2 * qa) - qa;
        a.lifeTime = b + Math.random() * VisualField.particleTheme.Ek;
        a.Pi = 0;
        a.bh = -1;
        return a
    };
    VisualField.milliseconds = Date.now();
    VisualField.times = 0;
    VisualField.cache = [];
    VisualField.loop = function () {
        var now = Date.now();
        var age = 500 < now - VisualField.milliseconds ? 1 : Math.min((now - VisualField.milliseconds) / 16, 10);
        VisualField.times++;
        VisualField.milliseconds = now;
        VisualField.particleTheme.yj || VisualField.paused || (now = VisualField.context, now.globalCompositeOperation = "destination-in", now.globalAlpha = Math.pow(VisualField.particleTheme.lf, age), now.fillRect(0, 0, N, I), now.globalCompositeOperation = "source-over", now.globalAlpha = 1, now.beginPath(),
            "wind" == VisualField.dh ? VisualField.drawWindParticle(age) : "wave" == VisualField.dh && VisualField.On(age))
    };
    VisualField.On = function (a) {
        if (VisualField.Ul && VisualField.Tl) {
            var b = VisualField.context,
                c = VisualField.Fd,
                d = VisualField.pg,
                f = VisualField.Ed,
                r = VisualField.Ni,
                e = VisualField.Mi,
                h = VisualField.le,
                k = 512 * (1 << T),
                S = 6 * VisualField.particleTheme.length * a,
                F = VisualField.Ul,
                l = VisualField.Tl,
                q = VisualField.Bo;
            b.lineWidth = S * (1 + 1.5 * VisualField.particleTheme.hm);
            b.setLineDash && b.setLineDash(VisualField.Ao);
            VisualField.context.strokeStyle = VisualField.tmpContext.strokeStyle = VisualField.Vl ? VisualField.particleTheme.$h : VisualField.particleTheme.color;
            for (var u = VisualField.Rl ? Math.round(VisualField.ze.length / 8) : -1, aa = 6 - 3.9375 * VisualField.particleTheme.Df, V = 0; V < VisualField.ze.length / 4; V++) {
                var w = VisualField.ze[V];
                0 >= w.lifeTime && VisualField.init(w, VisualField.particleTheme.ph);
                var p = 1E6 + Math.round(w.x),
                    v = 3E6 + Math.round(w.y),
                    p = VisualField.cache[p] || (VisualField.cache[p] =
                        (Math.round(w.x) + O) / k % 1 * c - e),
                    H = VisualField.cache[v] || (VisualField.cache[v] = Sa * Math.atan(Math.exp(((Math.round(w.y) + L) / k * 2 - 1) * Math.PI)) * f - r),
                    P = p % 1,
                    Q = H % 1,
                    p = p | 0,
                    H = (H | 0) * d;
                if (!(0 > p || p >= d || h && !VisualField.jl(p, H)) && (v = job.Ef(P, Q, F[H + p], F[H + p + 1], F[H + d + p], F[H + d + p + 1]), v > q)) {
                    p = job.xm(P, Q, l[H + p], l[H + p + 1], l[H + d + p], l[H + d + p + 1], Math.PI / 90) / 90 * Math.PI + Math.PI;
                    0 < w.bh && Math.abs(w.bh - p) > .25 * Math.PI ? (w.lifeTime = 0, p = w.bh) : w.bh = p;
                    var x = 2 - Math.min(w.Pi || 0, VisualField.particleTheme.ph) / VisualField.particleTheme.ph / 2,
                        Q = Math.PI / 2 * x,
                        H = Math.sin(p) * S,
                        P = Math.cos(p) * S,
                        x = Math.max(v / aa, 4) * (.5 + VisualField.particleTheme.hm),
                        v = Math.sin(p + Q) * x,
                        y = Math.cos(p + Q) * x,
                        z = Math.sin(p - Q) * x,
                        p = Math.cos(p -
                            Q) * x;
                    w.x += H;
                    w.y -= P;
                    b.moveTo(w.x + v, w.y - y);
                    b.quadraticCurveTo(w.x, w.y, w.x + z, w.y - p)
                }
                w.Pi += a;
                w.lifeTime -= 10 * a / x;
                if (w.x < 0 - qa || w.x >= N + qa || w.y < 0 - qa || w.y >= I + qa) w.lifeTime = 0;
                V == u && (b.stroke(), b.beginPath(), b.setLineDash && b.setLineDash(VisualField.wo), b.strokeStyle = VisualField.tmpContext.strokeStyle = VisualField.Sl ? VisualField.particleTheme.$h : VisualField.particleTheme.color, F = VisualField.yo, l = VisualField.xo, q = VisualField.zo)
            }
            b.stroke()
        }
    };
    VisualField.drawWindParticle = function (age) {
        if (VisualField.Xj && VisualField.Yj) {
            for (var b = VisualField.Fd, c = VisualField.pg, d = VisualField.Ed, f = VisualField.Mi, r = VisualField.Ni, e = VisualField.le, h = 512 * (1 << T), k = VisualField.particleTheme.length * age * VisualField.im, l = VisualField.Xj, F = VisualField.Yj, q = [0], u = 1; u < VisualField.particleTheme.jg.length; u++) q.push(Math.round(VisualField.ze.length / VisualField.particleTheme.jg.length *
                u));
            q.push(VisualField.ze.length);
            for (var w = VisualField.context, u = 0; u < q.length - 1; u++) {
                w.lineWidth = VisualField.particleTheme.jg[u];
                for (var aa = q[u]; aa < q[u + 1]; aa++) {
                    var V = VisualField.ze[aa];
                    0 >= V.lifeTime && VisualField.init(V, VisualField.particleTheme.ph);
                    var p = 1E6 + Math.round(V.x),
                        v = 2E6 + Math.round(V.y),
                        p = VisualField.cache[p] || (VisualField.cache[p] = (Math.round(V.x) + O) / h % 1 * b - f),
                        x = VisualField.cache[v] || (VisualField.cache[v] = Sa * Math.atan(Math.exp(((Math.round(V.y) + L) / h * 2 - 1) * Math.PI)) * d - r),
                        H = p % 1,
                        P = x % 1;
                    0 > p || p >= c || e && !VisualField.jl(p, x) || (p = p | 0, x = (x | 0) * c, v = job.Ef(H, P, l[x + p], l[x + p + 1], l[x + c + p], l[x + c + p + 1]) - 127, p = job.Ef(H, P, F[x + p], F[x + p + 1], F[x + c + p], F[x + c + p + 1]) - 127, w.moveTo(V.x,
                        V.y), V.x += v * k, V.y -= p * k, w.lineTo(V.x, V.y));
                    V.lifeTime -= age;
                    if (V.x < 0 - qa || V.x >= N + qa || V.y < 0 - qa || V.y >= I + qa) V.lifeTime = 0
                }
                w.stroke();
                w.beginPath()
            }
        }
    };
    VisualField.jl = function (a, b) {
        return 1 == VisualField.le[(a | 0) + (b | 0) * VisualField.pg]
    };
    VisualField.resize = function () {
        VisualField.cache.length = 0;
        VisualField.canvas.width = VisualField.tmpCanvas.width = N;
        VisualField.canvas.height = VisualField.tmpCanvas.height = I;
        VisualField.context.lineWidth = 2;
        VisualField.context.lineCap = "butt";
        VisualField.Ci()
    };
    VisualField.tmpCanvas = util.createElement("canvas");
    VisualField.tmpContext = VisualField.tmpCanvas.getContext("2d");
    VisualField.Ie = {
        x: 0,
        y: 0
    };
    VisualField.setTransform = function () {
        util.setTransform(VisualField.canvas, "translate(" + VisualField.Ie.x / G + "px, " + VisualField.Ie.y / G + "px)")
    };
    VisualField.moveBy = function (a, b, c) {
        VisualField.cache.length =
            0;
        VisualField.Ie.x += a;
        VisualField.Ie.y += b;
        if (c) return VisualField.Ci(), VisualField.tl();
        VisualField.setTransform()
    };
    VisualField.tl = function () {
        for (var a = VisualField.Ie.x, b = VisualField.Ie.y, c = 0; c < VisualField.ze.length; c++) VisualField.ze[c].x = remainder(VisualField.ze[c].x + a, N), VisualField.ze[c].y = remainder(VisualField.ze[c].y + b, I);
        VisualField.Ie.x = 0;
        VisualField.Ie.y = 0;
        VisualField.setTransform();
        if (1 > N - Math.abs(a) || 1 > I - Math.abs(b)) VisualField.context.clearRect(0, 0, d, f);
        else {
            c = VisualField.tmpCanvas;
            c.getContext("2d");
            var d = c.width,
                f = c.height;
            VisualField.tmpContext.clearRect(0, 0, d, f);
            VisualField.tmpContext.drawImage(VisualField.canvas, Math.max(-a, 0), Math.max(-b, 0), N - Math.abs(a), I - Math.abs(b), Math.max(a, 0), Math.max(b, 0), N - Math.abs(a), I - Math.abs(b));
            VisualField.context.clearRect(0, 0, d, f);
            VisualField.context.drawImage(c,
                0, 0)
        }
    };

    // ??????
    var toolMask = {};
    toolMask.Kd = util.createElement("canvas");
    toolMask.context = toolMask.Kd.getContext("2d");
    toolMask.Rd = function () {
        "imageSmoothingEnabled" in toolMask.context ? toolMask.context.imageSmoothingEnabled = !1 : toolMask.context.mozImageSmoothingEnabled = toolMask.context.webkitImageSmoothingEnabled = toolMask.context.msImageSmoothingEnabled = !1;
        toolMask.me();
        toolMask.label = util.createElement("span", {
            className: "pq",
            parent: w.Le
        });
        toolMask.A = util.createElement(0, {
            id: "h",
            parent: doc.body
        });
        toolMask.createLegend();
        C.Rd()
    };
    // ??????
    toolMask.createLegendLeft = util.createElement(0, {
        id: "z"
    });
    toolMask.wg = function () {
        if (!win.Uint8ClampedArray) return !0;
        var a = new ArrayBuffer(8),
            b = new Uint8ClampedArray(a);
        (new Uint32Array(a))[1] =
        168496141;
        return 10 === b[7] && 11 === b[6] && 12 === b[5] && 13 === b[4]
    }();
    toolMask.$m = toolMask.wg ? -14671840 : 538976511;
    toolMask.Xo = toolMask.wg ? -1275068417 : -77;
    toolMask.xn = function () {
        for (var a in optLayer)(function (a) {
            if (a.pf)
                for (var c in optLayer[a.pf]) c in a || (a[c] = optLayer[a.pf][c]);
            a.Je || (a.h ? a.Je = function (c, d) {
                var e = na[a.h][k.units[a.h]];
                e.$i ? c = e.$i(c) : c = e.sd * c;
                !a.Di && 0 > c && (c = 0);
                a.Kk && c > a.max / 1E3 && (c = a.max / 1E3);
                return util.gl(c, 1 / ((a.Tf && a.Tf[k.units[a.h]] || {}).precision || e.precision || (d ? 1 : .01)))
            } : a.Je = function (a) {
                return a
            });
            a.u || (a.u = function (a) {
                return a
            });
            if (!a.ai) {
                c =
                    a.scale.length / 6;
                a.ai = new Uint32Array(c);
                a.sj = new Uint8Array(c);
                for (var d = c = 0; d < a.scale.length; d += 6) {
                    var f = parseInt(a.scale.substr(d, 6), 36),
                        r = (f >> 16) % 256,
                        e = (f >> 8) % 256,
                        g = f % 256,
                        f = 2 * (f >> 24);
                    a.ai[c] = toolMask.wg ? f << 24 | g << 16 | e << 8 | r : r << 24 | e << 16 | g << 8 | f;
                    a.sj[c] = (.2989 * r + .587 * e + .114 * g) * f / 255 + 119 * (1 - f / 255);
                    c++
                }
            }
        })(optLayer[a])
    };
    toolMask.Lk = function (a) {
        if (!a.le || !a.le.length) return a.le || {};
        for (var b = [], c = 0, d = 0; d < a.le.length; d += 3) b[d / 3] = parseInt(a.le.slice(d, d + 3), 36), c += d && b[d / 3];
        for (var c = new Uint8Array(c), f = b[0], d = 1; d < b.length; d +=
            2) {
            for (var r = 0; r < b[d]; r++) c[f++] = 1;
            f += b[d + 1]
        }
        var e = a.Fd || 720,
            h = a.Ed || 360,
            b = a.Te || 512,
            d = a.Se || 512,
            k = new Uint8Array(e * h);
        a.le = {};
        a.le[720] = {
            "0,0": k
        };
        a.le[e] = {
            "0,0": k
        };
        for (f = 0; f < h; f++)
            for (var n = Math.floor(f / h * a.height) * a.width, r = 0; r < e; r++) k[r + f * e] = c[Math.floor(r / e * a.width) + n];
        e = {};
        a.le[a.width] = e;
        h = Math.ceil(a.height / d) - 1;
        for (k = Math.ceil(a.width / b) - 1; 0 <= k; k--)
            for (var n = Math.min(b, a.width - k * b) - 1, F = h; 0 <= F; F--) {
                var l = new Uint8Array(b * d);
                e[k + "," + F] = l;
                for (f = d - 1; 0 <= f; f--)
                    for (r = n; 0 <= r; r--) l[r + f * b] = c[r + k * b + (f + F * d) * a.width]
            }
        return a.le
    };
    toolMask.Bl = function (a) {
        toolMask.j && toolMask.j.h && uiMenuLeft.Ud[toolMask.j.h] && uiMenuLeft.Ud[toolMask.j.h].Og();
        var b = toolMask.j ? !!toolMask.j.Xe : !1;
        (a = optLayer[a]) ? (toolMask.Kd.style.opacity = a.opacity, toolMask.j = a, toolMask.j && toolMask.j.h && uiMenuLeft.Ud[toolMask.j.h] && uiMenuLeft.Ud[toolMask.j.h].Ke(k.units[toolMask.j.h]), toolMask.createLegend(), toolMask.ie != toolMask.j.ie && (toolMask.ie = toolMask.j.ie, w.ge()), b != !!toolMask.j.Xe && w.od.insertBefore(w.rf, toolMask.j.Xe ? w.Ff : toolMask.Kd), uiMenuLeft.c.Ii()) : (toolMask.j = null, toolMask.createLegend(), toolMask.Kd.style.opacity = .8, w.od.insertBefore(w.rf, toolMask.Kd), toolMask.ie && (toolMask.ie = "", w.ge()))
    };
    toolMask.me = function () {
        k.sg();
        toolMask.Bl(k.layer);
        toolMask.createMask(!0);
        toolMask.Ij()
    };
    toolMask.nj = function (a, b) {
        if (gLayers[k.layer].ug) return M.nj(a, b);
        a = Math.round(a);
        b = Math.round(b);
        var c = toolMask.Mk(a, b);
        if (!c) return -1;
        var d = toolMask.j;
        return d.sj[Math.round((Math.min(Math.max(c.values[(b + L) % 256 * 256 + (a + O) % 256], d.min), d.max) - d.min) / d.step)]
    };
    toolMask.Mk = function (a, b) {
        if (!toolMask.Bj || !toolMask.j || toolMask.j.Xe && 255 == w.Vf.getImageData(a, b, 1, 1).data[3]) return null;
        var c = C.ji(Math.floor((a + O) / 256), Math.floor((b + L) / 256), T, toolMask.Bj);
        return c && 2 == c.status ? c : null
    };
    toolMask.Nk = function (a, b) {
        a = Math.round(a);
        b = Math.round(b);
        var c = toolMask.Mk(a, b);
        if (!c) return null;
        var d = (b + L) % 256 * 256 + (a + O) % 256;
        if (c.cg && 0 == c.cg[d]) return null;
        var f = c.values[d];
        return toolMask.j.Dg ? toolMask.j.Dg(f,
            toolMask.j.h ? " " + k.units[toolMask.j.h] : "", c.cg[d]) : toolMask.j.Je(f / 1E3) + (toolMask.j.h ? " " + k.units[toolMask.j.h] : "")
    };
    toolMask.Ij = function () {
        toolMask.Bj = {
            F: toolMask.mj(k.time),
            time: k.time,
            pd: k.layer
        };
        toolMask.label && toolMask.Pl()
    };
    toolMask.kl = 0;
    toolMask.ll = 0;
    toolMask.Pl = function () {
        var a = toolMask.Nk(toolMask.kl, toolMask.ll);
        null !== a ? (toolMask.label.innerHTML = a.replace(/\(([^\)]+)\)/, "<small>$1</small>"), toolMask.label.style.display = "") : toolMask.label.style.display = "none"
    };
    toolMask.onmousemove = function (a, b, c) {
        "SPAN" == c.tagName && (c = c.parentNode);
        c = "A" == c.tagName ? c.getBoundingClientRect().bottom * G - toolMask.label.offsetHeight - c.offsetHeight - 6 * G : b;
        util.setTransform(toolMask.label,
            " translate(-50%, 0) scale(" + G + ") translate(" + a / G + "px, " + c / G + "px)");
        0 > a ? toolMask.label.style.display = "none" : (toolMask.kl = a, toolMask.ll = b, toolMask.Pl())
    };
    toolMask.Dh = function (a, b) {
        var c = {
            F: toolMask.mj(a),
            time: new Date(a),
            pd: k.layer
        };
        if (gLayers[k.layer].ug) return M.Dh(c, b);
        for (var d = Math.floor(O / 256), f = Math.floor(L / 256), r = Math.ceil((O + N) / 256) + 1 - d, e = Math.ceil((L + I) / 256) + 1 - f, h = r * e, n = 0, l = 0; l < r; l++)
            for (var F = 0; F < e; F++) {
                var u = C.ji(d + l, f + F, T, c, function () {
                    n++;
                    n == h && b()
                });
                u && 0 < u.status && n++
            }
        n == h && b()
    };
    toolMask.Zm = function (a, b, c) {
        if (a.values) {
            for (var d = 256 / 7, f = 256 / 7, r = b % 2, e = Math.min(toolMask.j.opacity /
                    .6, 1), h = d / 2; 256 > h; h += d)
                for (var k = f / 2 + ((r = !r) ? f / 4 : -f / 4); 256 > k; k += f) {
                    var n = Math.round(h),
                        F = Math.round(k),
                        l = toolMask.j.Je(a.values[256 * F + n] / 1E3);
                    toolMask.context.globalAlpha = "0" != l ? e : e / 2;
                    toolMask.context.fillText(l, 256 * b - O + n, 256 * c - L + F)
                }
            toolMask.context.globalAlpha = 1
        }
    };
    toolMask.mj = function (a) {
        var b = k.sg(),
            c = "auto" == k.model ? Ra : cfgModels[b];
        if (c.g) {
            for (var d = [], f = 0; f < c.g.length; f++) {
                var r = c.g[f].F,
                    e = cfgModels[r].c[k.layer];
                a = +a;
                if (e)
                    for (var g = 0; g < e.length; g++) T >= c.g[f].ef && a >= e[g].Vd && a <= e[g].timeEnd && 0 == a % e[g].Zd && d.push(r)
            }
            d.push(b);
            return d
        }
        return b
    };

    // mask??????
    toolMask.createMask = function (a) {
        a && clearTimeout(toolMask.rl);
        var b = !1,
            c = {
                F: toolMask.mj(k.time),
                time: k.time,
                pd: k.layer
            },
            d = [],
            f = {};
        toolMask.context.clearRect(0, 0, N, I);
        if (gLayers[k.layer].ug) return M.createMaskM(c, a);
        for (var r = Math.floor(O / 256), e = Math.floor(L / 256), h = Math.floor((O + N) / 256), u = Math.floor((L + I) / 256), S = Math.round((O + N / 2) / 256), F = Math.round((L + I / 2) / 256), p = (h - r + 1) * (u - e + 1), v = 1, ba = 0, aa = 0, V = aa = 1, x = 3, y = !1, z = []; p;) {
            if (S >= r && F >= e && S <= h && F <= u) {
                var H = C.ji(S, F, T, c, a && toolMask.createMask);
                if (H && H.ke) {
                    toolMask.context.drawImage(H.ke.canvas, H.ke.x, H.ke.y, 256, 256, 256 * S - O, 256 * F - L, 256, 256);
                    if (H.ke.$e)
                        for (var P = 0; P < H.ke.$e.length; P++) z.push({
                            x: 256 *
                                S - O + H.ke.$e[P] % 256,
                            y: 256 * F - L + Math.floor(H.ke.$e[P] / 256),
                            type: "lightning"
                        });
                    k.Af && toolMask.Zm(H, S, F);
                    if (H.Yd)
                        for (P = 0; P < H.Yd.length; P++) f[H.Yd[P]] || (f[H.Yd[P]] = !0, d.push(H.Yd[P]))
                }
                H && 2 == H.status ? H.empty || (y = !0) : b = !0;
                p--
            }--aa || (aa = -ba, ba = v, v = aa, --x || (V++, x = 2), aa = V);
            S += v;
            F += ba
        }
        k.arrModel.join("+") != d.join("+") && (k.arrModel = d, uiMenuLeft.Hj(), uiMenuLeft.c.update(), uiMenuLeft.Ud.model.refresh(), uiMenuLeft.c.Ii(), VisualField.me());
        toolMask.$e = z.length ? z : null;
        if (!b && (toolMask.Ij(), w.Of(), toolMask.ek))
            if (y) toolMask.ek = !1;
            else uiMenuLeft.H.onclick();
        toolMask.cf = b;
        uiMenuLeft.Ph()
    };
    toolMask.Me = [];
    toolMask.createLegend = function () {
        if (toolMask.A) {
            if (!toolMask.j) return toolMask.createLegendItems();
            toolMask.A.onclick = null;
            toolMask.A.className = toolMask.A.title = "";
            toolMask.Me.length = 0;
            var a = toolMask.j,
                b = a.min,
                c = a.max;
            if (k.units[a.h]) {
                var d = na[a.h][k.units[a.h]],
                    f = a.Tf && a.Tf[k.units[a.h]] || {};
                d.wi && (toolMask.A.className = "yy", toolMask.A.title = util.Ad(u.cc, {
                    unit: d.wi
                }), toolMask.A.onclick = function () {
                    k.Zi(a.h, d.wi);
                    return !1
                });
                toolMask.Me.push({
                    ah: !0,
                    text: k.units[a.h]
                });
                f.A ? r = f.A : d.A && (r = d.A);
                "undefined" != typeof d.Dn && (b = d.Dn);
                "undefined" != typeof d.Cn && (c = d.Cn)
            }
            if (!r)
                for (var f = (c - b) / 14, r = [], c = 0; 15 > c; c++) r.push(b + c * f);
            b = [];
            f = [];
            for (c = 0; c < r.length; c++) {
                var e = Math.round((Math.min(Math.max(r[c],
                        a.min), a.max) - a.min) / a.step),
                    n = a.ai[e],
                    l = n >> 24 & 255,
                    S = n >> 16 & 255,
                    F = n >> 8 & 255,
                    n = n & 255;
                b.push(toolMask.wg ? [n, F, S, l] : [l, S, F, n]);
                f.push(144 <= a.sj[e] ? "#000" : "#FFF")
            }
            for (c = r.length - 1; 0 <= c; c--) e = b[c], l = e[3] / 255, toolMask.Me.push({
                text: a.Je(r[c] / 1E3, !0),
                Hl: f[c],
                fk: "rgba(" + e.slice(0, 3).join(",") + "," + l.toFixed(2) + ")"
            });
            toolMask.createLegendItems()
        }
    };
    toolMask.createLegendItems = function () {
        for (; toolMask.A.firstChild;) toolMask.A.removeChild(toolMask.A.firstChild);
        if (toolMask.j) {
            for (var a = 0; a < toolMask.Me.length; a++) {
                var b = toolMask.Me[a];
                util.createElement("span", {
                    textContent: b.text,
                    className: b.ah ? "ew" : "lb",
                    style: b.ah ? "" : "background: " +
                        b.fk + "; color: " + b.Hl,
                    parent: toolMask.A
                })
            }
            toolMask.A.appendChild(toolMask.createLegendLeft)
        }
    };
    toolMask.resize = function () {
        toolMask.Kd.width = N;
        toolMask.Kd.height = I;
        toolMask.context.font = nb + " 'Helvetica Neue', Arial, Helvetica, sans-serif";
        toolMask.context.textAlign = "center";
        toolMask.context.textBaseline = "middle";
        toolMask.context.fillStyle = "#000";
        toolMask.context.imageSmoothingEnabled = !0;
        toolMask.context.imageSmoothingQuality = "high";
        toolMask.createMask()
    };
    toolMask.Ie = {
        x: 0,
        y: 0
    };
    toolMask.Ri = function () {
        util.setTransform(toolMask.Kd, "translate(" + toolMask.Ie.x + "px, " + toolMask.Ie.y + "px)")
    };
    toolMask.wh = -1;
    toolMask.moveBy = function (a, b, c) {
        clearTimeout(toolMask.rl);
        c ? toolMask.createMask(!0) : (toolMask.createMask(),
            toolMask.rl = setTimeout(function () {
                toolMask.createMask(!0)
            }, C.Fi / 2))
    };



    var W = {};
    W.canvas = util.createElement("canvas");
    W.context = W.canvas.getContext("2d");
    W.Rd = function () {};
    W.pi = Date.now();
    W.si = 0;
    W.loop = function () {
        Date.now();
        if (VisualField.paused || !toolMask.$e) W.ui && (W.context.clearRect(0, 0, N, I), W.ui = !1);
        else {
            var a = W.context;
            a.globalCompositeOperation = "destination-in";
            a.globalAlpha = .92;
            a.fillRect(0, 0, N, I);
            a.globalCompositeOperation = "source-over";
            a.globalAlpha = 1;
            a.beginPath();
            W.Nn();
            W.ui = !0
        }
    };
    W.Nn = function () {
        var a = W.context;
        a.beginPath();
        for (var b = 4 >= T,
                c = (T - 4) / 5, d = b ? .998 : .9994 + (.999992 - .9994) * c, f = 0; f < toolMask.$e.length; f++) {
            var r = toolMask.$e[f];
            if (!(Math.random() < (r.gi ? .9 : d))) {
                if (r.gi) c = r.gi, r.gi = null;
                else {
                    d = 5 + 7 * c;
                    W.context.lineWidth = b ? 9 : 1.5 + 2.5 * (1 - c);
                    c = [];
                    for (f = 0; 3 > f; f++) {
                        var e = [];
                        c.push(e);
                        var h = 2 * Math.PI / 3 * f + Math.PI / 3 / 2 * Math.random(),
                            n = r.x,
                            k = r.y,
                            F = 4;
                        if (b) {
                            e.push([n, k]);
                            break
                        }
                        for (var l = d / 2 + Math.random() * d / 2; 0 < l; l--) {
                            F += 1.25 * (Math.random() - .25);
                            n += Math.cos(h) * F;
                            k -= Math.sin(h) * F;
                            h += Math.PI / 3 * (Math.random() - .5) * 1.125;
                            e.push([n, k]);
                            var u = Math.round(n),
                                p = Math.round(k),
                                aa = C.ji(Math.floor((u + O) / 256), Math.floor((p +
                                    L) / 256), T, toolMask.Bj);
                            if (aa && 2 == aa.status) {
                                if (u = (p + L) % 256 * 256 + (u + O) % 256, !aa.cg || 33 != aa.cg[u]) break
                            } else break
                        }
                    }
                    r.gi = c
                }
                for (f = 0; f < c.length; f++)
                    for (a.moveTo(r.x, r.y), l = 0; l < c[f].length; l++) a.lineTo(c[f][l][0], c[f][l][1]);
                break
            }
        }
        a.stroke()
    };
    W.resize = function () {
        W.canvas.width = N;
        W.canvas.height = I;
        W.context.lineCap = "round";
        W.context.strokeStyle = "#FFF"
    };
    W.moveBy = function () {
        W.ui && (W.context.clearRect(0, 0, N, I), W.ui = !1)
    };



    var w = {};
    w.rf = util.createElement("canvas");
    w.Vf = w.rf.getContext("2d");
    w.Ff = util.createElement("canvas");
    w.Jg = w.Ff.getContext("2d");
    w.Th = util.createElement("canvas");
    w.ue = w.Th.getContext("2d");
    w.resize = function () {
        util.setTransform(w.Le, "scale(" + 1 / G + ")");
        w.Le.style.width = N + "px";
        w.Le.style.height = I + "px";
        w.Th.width = w.rf.width = w.Ff.width = N;
        w.Th.height = w.rf.height = w.Ff.height = I;
        w.ue.fillStyle = "#555";
        w.ue.clearRect(0, 0, N, I);
        w.Vf.fillStyle = "#555";
        w.ge(!0)
    };
    w.lh = [];
    w.Ye = [];
    w.dn = "WebkitFontSmoothing" in doc.documentElement.style;
    w.Dh = function (a, b, c) {
        var d = Math.floor((a + N) / 512) + 1,
            f = Math.floor(b / 512);
        b = Math.floor((b + I) / 512) + 1;
        for (a = Math.floor(a / 512); a < d; a++)
            for (var r = f; r <
                b; r++) R.Zk(a, r, c, function () {})
    };
    w.Gj = !1;
    w.ul = function () {
        w.Gj || (w.Gj = !0, requestAnimationFrame(w.ge))
    };
    w.ge = function (a) {
        w.Gj = !1;
        w.Jg.clearRect(0, 0, N, I);
        a && w.Vf.clearRect(0, 0, N, I);
        if (10 <= T) return w.Xn();
        a = w.ie || toolMask.ie || "#FFF";
        "#FFF" != a && (w.Jg.fillStyle = a);
        var b = Math.floor(O / 512),
            c = Math.floor((O + N) / 512) + 1,
            d = Math.floor(L / 512),
            f = Math.floor((L + I) / 512) + 1;
        for (w.Ye.length = 0; b < c; b++)
            for (var r = d; r < f; r++) {
                var e = R.Zk(b, r, T, w.ul);
                if (e && 3 == e.loaded) {
                    w.Vf.clearRect(512 * b - O, 512 * r - L, 512, 512);
                    w.Vf.drawImage(e.land, 512 * b - O, 512 * r - L);
                    w.Jg.drawImage(e.border, 512 * b - O, 512 * r - L);
                    for (var h = 0; h < e.cities.length; h++) w.Ye.push({
                        x: 512 * b - O + e.cities[h].x,
                        y: 512 * r - L + e.cities[h].y,
                        size: Math.min(Math.max(Math.floor(Math.log(e.cities[h].population) - 16 + T), 1), 5),
                        name: w.rk(e.cities[h]),
                        url: e.cities[h].url
                    });
                    "#FFF" != a && (w.Jg.globalCompositeOperation = "source-atop", w.Jg.fillRect(512 * b - O, 512 * r - L, 512, 512), w.Jg.globalCompositeOperation = "source-over")
                }
            }
        w.Ye.lg = w.Ye.length;
        w.Of()
    };
    w.Xn = function () {
        var a = Math.floor(O / 256),
            b = Math.floor((O + N) / 256) + 1,
            c = Math.floor(L / 256),
            d = Math.floor((L +
                I) / 256) + 1;
        for (w.Ye.length = 0; a < b; a++)
            for (var f = c; f < d; f++) {
                var r = R.In(a, f, T + 1, w.ul);
                r && 3 == r.loaded && (w.Vf.clearRect(256 * a - O, 256 * f - L, 256, 256), w.Vf.drawImage(r.land, 256 * a - O, 256 * f - L))
            }
        w.Ye.lg = 0;
        w.Of()
    };
    w.rk = function (a) {
        return a.name + (/[a-z]/i.test(a.name || !a.ascii) ? "" : "\r\n(" + a.ascii + ")")
    };
    w.Of = function () {
        if (w.Le) {
            w.Ye.length = w.Ye.lg;
            for (var a = w.Ye, b = 512 * (1 << T), c = {}, d = w.kn(k.time), f = uiAside.qe.concat(d), r = 0; r < Math.ceil((N + 1024) / b) + 1; r++)
                for (d = 0; d < f.length; d++) {
                    var e = f[d],
                        n = (180 + e.lon) / 360 * b - O + b * r,
                        l = k.uh((90 - e.lat) /
                            180) * b - L;
                    if (!(-512 > n || n > N + 512 || -512 > l || l > I + 512)) {
                        for (var u = 0; u < a.length; u++) {
                            var F = a[u].x - n,
                                p = 2 * (a[u].y - l);
                            c[u] = Math.min(F * F + p * p, c[u] || Infinity)
                        }
                        a.push({
                            x: n,
                            y: l,
                            Ym: e.style || (e.temporary ? "zh" : "zh jd"),
                            size: 5,
                            name: e.name,
                            url: e.url || uiAside.aj(n, l),
                            value: "value" in e ? e.value : toolMask.Nk(n, l)
                        })
                    }
                }
            for (d = b = 0; d < a.length; d++) 32 > c[d] || (w.lh[b] || (w.lh[b] = util.createElement("a", {
                    className: "qo",
                    children: ["", util.createElement("span")],
                    parent: w.Le,
                    onclick: uiAside.Zh,
                    onmousedown: uiAside.Jm
                })), f = w.lh[b++], r = 2E3 > c[d], e = w.Yk[toolMask.nj(a[d].x, a[d].y)], f.className = "qo am " + (e ? e +
                    " " : "") + (a[d].Ym || ["bf", "ci", "sd", "nt", "la"][a[d].size - 1]) + (r ? " ji" : ""), e = 0, r ? (f.firstChild.data = "", f.removeAttribute("data-value"), f.title = a[d].name.trim() + (a[d].value ? (a[d].name.trim() ? ", " : "") + a[d].value : "")) : (a[d].value && f.setAttribute("data-value", a[d].name.trim() ? a[d].value : ""), f.firstChild.data = a[d].name.trim() || a[d].value, f.title = "", w.dn && (e = f.getBoundingClientRect().width % 2 / 2)), util.setTransform(f, "translate(" + (e + a[d].x).toFixed(3) + "px, " + a[d].y.toFixed(3) + "px) translate(-50%, -100%)"), f.href =
                mapOpts.clickLink ? uiAside.aj(a[d].x, a[d].y) : a[d].url);
            for (; w.lh[b];) util.setTransform(w.lh[b++], "translate(-10000px, -10000px)")
        }
    };
    w.Yk = [];
    w.Rd = function () {
        function a(a, b, c) {
            e || (e = []);
            for (var d = T + a, f = 0; f < e.length; f++) d += e[f].zoom;
            f = Math.log(Math.ceil(I / 512)) / Math.log(2);
            if (!(d < f || 10 < d)) {
                k.pause();
                e.push({
                    x: b,
                    y: c,
                    zoom: a,
                    scale: Math.pow(2, a)
                });
                var r = O,
                    n = L,
                    l = T;
                a = [];
                w.ue.clearRect(0, 0, N, I);
                util.Pj(w.od, b / G + "px " + c / G + "px");
                for (f = 0; f < e.length; f++) r = (r + e[f].x) * e[f].scale - e[f].x, n = (n + e[f].y) * e[f].scale - e[f].y, l += e[f].zoom, w.ue.translate(e[f].x,
                    e[f].y), w.ue.scale(e[f].scale, e[f].scale), w.ue.translate(-e[f].x, -e[f].y), a.push("translate(" + (e[f].x - b) + "px, " + (e[f].y - c) + "px)"), a.push("scale(" + e[f].scale + ")"), a.push("translate(" + -(e[f].x - b) + "px, " + -(e[f].y - c) + "px)");
                w.od.className = "eg";
                util.setTransform(w.od, a.join(" "));
                w.ue.drawImage(w.rf, 0, 0);
                w.ue.drawImage(w.Ff, 0, 0);
                w.ue.setTransform(1, 0, 0, 1, 0, 0);
                clearTimeout(J);
                J = setTimeout(function () {
                    w.od.className = "";
                    util.setTransform(w.od, "");
                    k.move(r, n, l);
                    e = null;
                    J = setTimeout(function () {
                        w.od.className = "eg";
                        w.ue.clearRect(0, 0, N, I)
                    }, 50);
                    k.Uj()
                }, 500)
            }
        }
        w.od = util.createElement(0, {
            id: "x",
            className: "eg",
            parent: doc.body
        });
        for (var b in Za) {
            var c = b.match(/(\d+)\-(\d+)/);
            if (c)
                for (var d = 1 * c[1]; d < c[2]; d++) w.Yk[d] = Za[b]
        }
        w.od.appendChild(w.rf);
        w.od.appendChild(toolMask.Kd);
        w.od.appendChild(VisualField.canvas);
        w.od.appendChild(W.canvas);
        w.od.appendChild(w.Ff);
        w.wn();
        var f;
        Ma(w.od, function (a) {
            var b = this;
            clearInterval(f);
            var c = O,
                d = L,
                e = O,
                r = L,
                h = a.clientX,
                n = a.clientY,
                l = Date.now(),
                J = !1;
            return {
                Xg: function (a) {
                    if (!J) {
                        if (2 > Math.abs(a.clientX - h) && 2 > Math.abs(a.clientY -
                                n)) return;
                        k.pause();
                        J = !0;
                        b.className = "tm"
                    }
                    k.move(c + (h - a.clientX) * G, d + (n - a.clientY) * G, T);
                    var f = O,
                        u = L;
                    setTimeout(function () {
                        e = f;
                        r = u
                    }, 100);
                    l = Date.now()
                },
                Yg: function (a) {
                    b.className = "";
                    if (J) {
                        var c = O - e,
                            d = L - r,
                            F = O,
                            u = L,
                            q = l + 500;
                        f = setInterval(function () {
                            var a = q - Date.now(),
                                b = 1 - Math.pow(a / 500, 3);
                            0 > a || 5 > (Math.abs(c) + Math.abs(d)) * b ? (clearInterval(f), k.Uj()) : k.move(F + c * b, u + d * b, T)
                        }, 13)
                    } else a.target == w.Le && uiAside.$k(h * G, n * G)
                }
            }
        });
        w.od.ontouchstart = w.qo;
        w.od.onmousemove = function (ev) {
            if (w.tg) w.tg--;
            else toolMask.onmousemove(ev.clientX * G, ev.clientY *
                G, ev.target)
        };
        w.od.onmouseleave = function () {
            if (!w.tg) toolMask.onmousemove(-1E4, -1E4, {})
        };
        uiMenuLeft.K.onclick = function () {
            a(1, N / 2, I / 2)
        };
        uiMenuLeft.H.onclick = function () {
            a(-1, N / 2, I / 2)
        };
        var r = !1;
        Date.now();
        "onwheel" in w.od || "onmousewheel" in w.od || w.od.addEventListener("DOMMouseScroll", function (ev) {
            return this.onwheel(ev)
        });
        w.od.onmousewheel = w.od.onwheel = function (ev) {
            if (r) return !1;
            r = !0;
            setTimeout(function () {
                r = !1
            }, 45);
            Date.now();
            0 > (ev.detail || -ev.wheelDelta || ev.deltaY) ? a(1, ev.clientX * G, ev.clientY * G) : a(-1, ev.clientX * G, ev.clientY * G);
            return !1
        };
        w.Ko = a;
        var e, J;
        w.Le = util.createElement(0, {
            parent: w.od,
            id: "b"
        });
        w.$o = util.Um({
            parent: w.od,
            width: "100%",
            height: "100%"
        });
        util.Pj(w.Le, "0 0")
    };
    w.wn = function () {
        util.We(ib, function (a) {
            var b;
            try {
                b = JSON.parse(a)
            } catch (c) {}
            b && (w.cj = b, w.Of())
        })
    };
    w.kn = function (a) {
        var b = [];
        if (!w.cj) return b;
        a = a / 1E3;
        for (var c = 0; c < w.cj.length; c++) {
            var d = w.cj[c];
            if (!(a < d.times[0] || a > d.times[d.times.length - 1])) {
                for (var f = {}, r = 0; a > d.times[r];) r++;
                if (0 < r) {
                    var e = (a - d.times[r - 1]) / (d.times[r] - d.times[r - 1]);
                    f.lat = d.gps[r - 1][0] + (d.gps[r][0] - d.gps[r - 1][0]) * e;
                    f.lon =
                        d.gps[r - 1][1] + (d.gps[r][1] - d.gps[r - 1][1]) * e
                } else f.lat = d.gps[r][0], f.lon = d.gps[r][1];
                r = d.cat[r];
                f.style = "zh os " + (r > Oa[1] ? r > Oa[2] ? r > Oa[3] ? r > Oa[4] ? "aa" : "sg" : "yh" : "sx" : "lu");
                f.name = d.name;
                f.value = " ";
                b.push(f)
            }
        }
        return b
    };
    w.qh = 0;
    w.tg = 0;
    w.qo = function () {
        function a() {
            util.setTransform(w.od, "translate(" + d + "px, " + f + "px) scale(" + r + ")")
        }

        function b() {
            var b = 1E3 * F;
            util.El(w.od, b + "ms");
            w.Dh(O * l - e * G, L * l - n * G, T + u);
            setTimeout(function () {
                d = e;
                f = n;
                r = l;
                a();
                setTimeout(function () {
                    util.El(w.od, "");
                    setTimeout(c, 50)
                }, b)
            }, 50)
        }

        function c() {
            w.ue.clearRect(0,
                0, N, I);
            w.ue.translate(e * G, n * G);
            w.ue.scale(l, l);
            w.ue.drawImage(w.rf, 0, 0);
            w.ue.drawImage(w.Ff, 0, 0);
            w.ue.setTransform(1, 0, 0, 1, 0, 0);
            k.move(O * l - e * G, L * l - n * G, T + u);
            f = d = 0;
            r = 1;
            a();
            k.Uj()
        }
        if (!doc.ontouchstart) {
            w.od.className = "";
            w.tg = 100;
            util.Pj(w.od, "0 0");
            var d = 0,
                f = 0,
                r = 1,
                e = 0,
                n = 0,
                l = 1,
                u = 0,
                F = 0,
                q = !1,
                p = Math.log(Math.ceil(I / 512)) / Math.log(2),
                v = [];
            doc.ontouchstart = function (a) {
                for (var b = 0; b < a.changedTouches.length; b++) v.push({
                    x: (a.changedTouches[b].clientX - d) / r,
                    y: (a.changedTouches[b].clientY - f) / r,
                    clientX: a.changedTouches[b].clientX,
                    clientY: a.changedTouches[b].clientY,
                    id: a.changedTouches[b].identifier
                });
                !q && 1 < v.length && (q = !0, k.pause());
                w.tg = 100;
                return !1
            };
            doc.lg = function () {
                w.tg && w.tg--
            };
            doc.ontouchend = doc.ontouchcancel = function (ev) {
                for (var d = 0; d < ev.changedTouches.length; d++)
                    for (var e = 0; e < v.length; e++)
                        if (v[e].id == ev.changedTouches[d].identifier) {
                            v.splice(e, 1);
                            break
                        }
                if (!v.length)
                    if (doc.ontouchstart = doc.ontouchmove = doc.ontouchend = doc.ontouchcancel = null, q) u ? b() : c();
                    else {
                        var f = ev.changedTouches[0].clientX * G,
                            r = ev.changedTouches[0].clientY * G;
                        if (w.qh) clearTimeout(w.qh),
                            w.qh = 0, w.Ko(1, f, r);
                        else {
                            if (ev.target.onmousedown) ev.target.onmousedown();
                            else ev.target == w.Le && uiAside.Mn(f, r);
                            w.qh = setTimeout(function () {
                                w.qh = 0;
                                if (ev.target.onclick) ev.target.onclick();
                                else ev.target == w.Le && uiAside.$k(f, r)
                            }, 300)
                        }
                    }
            };
            doc.ontouchmove = function (b) {
                for (var c = 0; c < v.length; c++) {
                    v[c].Mg = 0;
                    for (var h = v[c].rh = 0; h < b.changedTouches.length; h++)
                        if (v[c].id == b.changedTouches[h].identifier) {
                            v[c].clientX = b.changedTouches[h].clientX;
                            v[c].clientY = b.changedTouches[h].clientY;
                            v[c].Mg = (b.changedTouches[h].clientX - d) / r - v[c].x;
                            v[c].rh = (b.changedTouches[h].clientY - f) / r - v[c].y;
                            break
                        }
                }
                if (!q)
                    if (3 < Math.abs(v[0].Mg) || 3 < Math.abs(v[0].rh)) q = !0, k.pause();
                    else return;
                k.pause();
                if (1 == v.length) d += v[0].Mg * r, f += v[0].rh * r, e += v[0].Mg * r, n += v[0].rh * r;
                else if (2 <= v.length) {
                    b = v[0];
                    var w = v[1],
                        c = b.clientX,
                        h = b.clientY,
                        x = w.x - b.x,
                        H = w.y - b.y,
                        P = w.clientX - c,
                        w = w.clientY - h,
                        Q = x * x + H * H;
                    if (0 < Q) {
                        var y = (x * P + H * w) / Q,
                            Q = (x * w - H * P) / Q,
                            y = Math.sqrt(y * y + Q * Q);
                        d = c + P / 2 - (b.x + x / 2) * y;
                        f = h + w / 2 - (b.y + H / 2) * y;
                        r = y;
                        y = Math.log(y) / Math.log(2);
                        u = Math.max(Math.min(Math.round(y + T), 10), p) - T;
                        F = Math.abs(u - y);
                        y = Math.pow(2,
                            u);
                        e = c + P / 2 - (b.x + x / 2) * y;
                        n = h + w / 2 - (b.y + H / 2) * y;
                        l = y
                    }
                }
                a();
                for (c = 50; c < v.length; c++) v[c].x = (v[c].clientX - d) / r, v[c].y = (v[c].clientY - f) / r;
                return !1
            }
        }
    };
    var N, I, T = 3,
        O = 1600,
        L = 800;

    var k = {
            ap: function (a) {
                return (2 * Math.atan(Math.exp((2 * a - 1) * Math.PI)) - Math.PI / 2) / Math.PI * 180
            }
        },
        Sa = 2 / Math.PI,
        ob = 2 * Math.PI;
    k.$g = function (a) {
        return Sa * Math.atan(Math.exp((2 * a - 1) * Math.PI))
    };
    k.uh = function (a) {
        return Math.log(Math.tan(a * Math.PI / 2)) / ob + .5
    };
    k.move = function (a, b, c) {
        b = Math.round(Math.max(Math.min(b, 512 * (1 << c) - I), 0));
        a = Math.round(a);
        var d = O - a,
            f = L - b,
            r = T - c;
        O = a;
        L = b;
        T = c;
        VisualField.moveBy(d, f, r);
        toolMask.moveBy(d,
            f, r);
        W.moveBy(d, f, r);
        a = !1;
        r ? (w.Vf.drawImage(w.Th, 0, 0), toolMask.Ij()) : a = !0;
        w.ge(a);
        k.$n()
    };
    k.loop = function () {
        k.paused || (VisualField.loop(), W.loop())
    };
    k.pause = function () {
        k.paused = !0;
        w.Le.style.display = "none"
    };
    k.Uj = function () {
        k.paused = !1;
        O = remainder(O, 512 * (1 << T));
        w.Le.style.display = "";
        toolMask.createMask(!0);
        VisualField.tl();
        k.Qe()
    };
    k.Vg = function (a, b, c) {
        var d = 512 * (1 << c);
        O = (180 + b) / 360 * d - (!uiAside.$d || N < 780 * G ? N : N - 540 * G) / 2;
        L = k.uh((90 - a) / 180) * d - I / 2;
        k.move(O, L, c)
    };
    k.Oh = function (a, b) {
        var c = 512 * (1 << T);
        return {
            lat: 90 - 180 * k.$g((L + b) / c),
            lon: (O + a) / c % 1 * 360 - 180,
            zoom: T
        }
    };
    k.Hi = function () {
        return k.Oh(N / 2, I / 2)
    };
    k.$n = function () {
        clearTimeout(k.ao);
        k.ao = setTimeout(function () {
            try {
                localStorage.setItem("last", JSON.stringify(k.Hi()))
            } catch (a) {}
        }, 500)
    };
    k.Hn = function () {
        try {
            var a = JSON.parse(localStorage.getItem("last"))
        } catch (b) {}
        if (a && a.lon && a.lat && a.zoom) return a
    };
    var Ka = [];
    // 
    var gLayers = {};
    k.Vn = function (a, b, c, d, f, r) {
        var e = b.zn || a.zn;
        if (e)
            for (f = 0; f < e.length; f++) a.c[d].push({
                Vd: e.start,
                timeEnd: e.end,
                Zd: e.nd,
                Ug: c
            });
        else {
            var e = b.start || a.start,
                g = b.end || a.end,
                h = 6E4 * (b.nd || a.nd);
            f -= (f - e) % 108E5; +
            e < +f && 108E5 > h ? (a.c[d].push({
                Vd: f,
                timeEnd: g - (g - e) % h,
                Zd: h,
                Ug: c
            }), a.c[d].push({
                Vd: e,
                timeEnd: f,
                Zd: 108E5,
                Ug: c
            })) : a.c[d].push({
                Vd: e,
                timeEnd: g - (g - e) % h,
                Zd: h,
                Ug: c
            })
        }
        r && (r.c[d] = r.c[d] ? r.c[d].concat(a.c[d]) : a.c[d].slice(0), b.hj && r.c[d].push({
            Vd: a.c[d][a.c[d].length - 1].timeEnd,
            timeEnd: b.hj,
            Ug: c,
            Zd: Infinity,
            gj: !0
        }))
    };
    k.Wn = function () {
        var a = new Date(mapOpts.now);
        a.setDate(a.getDate() + -3);
        for (var b = {
                c: {},
                g: Ra.g
            }, c = 0; c < gModels.length; c++) {
            var d = cfgModels[gModels[c]],
                f = Ra.Qn.indexOf(gModels[c]);
            d.c = {};
            for (var r in d.wd) d.c[r] = [], k.Vn(d, d.wd[r],
                gModels[c], r, a, -1 < f ? b : null)
        }
        cfgModels.auto = b;
        for (c = 0; c < ma.length; c++)
            if (a = ma[c], a.f)
                for (b = 0; b < a.f.length; b++) d = a.f[b], gLayers[d.id] = {
                    id: d.id,
                    file: d.file,
                    Ng: d.Ng,
                    qg: d.qg,
                    Uf: d.Uf,
                    mg: d.mg,
                    ug: d.ug,
                    group: a.id,
                    gd: d.gd || b,
                    ki: a.kind,
                    o: d.o || "10m",
                    label: d.label || d.id,
                    Eh: d.Eh,
                    description: d.description || a.description || a.id
                }, Ka.push(gLayers[d.id]), a.f[b].$f && (a.$f = d.id);
            else gLayers[a.id] = {
                id: a.id,
                file: a.file,
                Ng: a.Ng,
                qg: a.qg,
                Uf: a.Uf,
                mg: a.mg,
                ug: a.ug,
                group: a.id,
                o: a.o || "10m",
                description: a.description || a.id
            }, Ka.push(gLayers[a.id])
    };
    k.themeType = "normal";
    k.time = new Date(mapOpts.now);
    k.model = mapOpts.model;
    k.arrModel = [];
    k.sg = function (time) {
        for (var b = +(time || k.time), c = cfgModels[k.model].c[k.layer], i = 0; i < c.length; i++)
            if (b >= c[i].Vd && b <= c[i].timeEnd) return c[i].Ug;
        console.warn("Unknown model for " + k.model + ", layer " + k.layer + ", time " + time);
        return mapOpts.model
    };
    k.setTime = function (a) {
        for (var b = cfgModels[k.model].c[k.layer], c = 0; c < b.length; c++) {
            var d = b[c].Zd / 2,
                f = +a + d - (+a + d) % b[c].Zd;
            if (f >= b[c].Vd && f <= b[c].timeEnd) {
                k.time = new Date(f);
                uiMenuLeft.me();
                return
            }
        }
        for (var f = Math.min(Math.max(b[0].Vd, +a), b[0].timeEnd), d = b[0].Zd / 2, f = f + d - (f + d) % b[0].Zd, r = Math.abs(+a - f),
                e = f, c = 1; c < b.length; c++) f = Math.min(Math.max(b[c].Vd, +a), b[c].timeEnd), d = b[c].Zd / 2, f = f + d - (f + d) % b[c].Zd, d = Math.abs(+a - f), d < r && (r = d, e = f);
        k.time = new Date(e);
        uiMenuLeft.me()
    };
    k.xh = "normal";
    k.Fl = function (a) {
        k.themeType = a;
        "off" != a ? k.xh = a : VisualField.context.clearRect(0, 0, N, I);
        var b = -1 == sa.indexOf(k.themeType);
        uiMenuLeft.Ud["wind-type"].Ke(b ? "" : k.themeType);
        VisualField.Ci();
        uiSetting.He && "off" != a && uiSetting.He(a);
        b && (uiSetting.nh = a, util.tf("wind", uiSetting.nh))
    };
    k.layer = Ia[0];
    k.Oj = function (a) {
        k.layer = a;
        a = +k.time;
        var b = cfgModels[k.model].c[k.layer];
        if (b)
            for (var c = 0; c < b.length; c++)
                if (a < b[c].Vd || a > b[c].timeEnd || 0 != a % b[c].Zd) {
                    k.setTime(k.time);
                    break
                }
        uiMenuLeft.c.update();
        VisualField.o != gLayers[k.layer].o && (VisualField.o = gLayers[k.layer].o, VisualField.me())
    };
    k.ih = function (a) {
        k.arrModel = [];
        if (!cfgModels[k.model].c[a]) return !1;
        k.Oj(a);
        gLayers[k.layer].mg && Math.abs(k.time - mapOpts.now) < 6E4 * gLayers[k.layer].mg && k.setTime(mapOpts.now);
        uiMenuLeft.Ui();
        uiMenuLeft.me();
        toolMask.me();
        k.Qe(!0);
        k.log("layer", a);
        uiMenuLeft.c.Ii();
        return !0
    };
    k.Al = function (a) {
        k.arrModel = [];
        k.model = a;
        "auto" == a || uiMenuLeft.Rn || (uiMenuLeft.Ud.model.ho("ws"), uiMenuLeft.Rn = !0);
        if (!cfgModels[a].c[k.layer])
            for (var b = 0; b < Ia.length; b++)
                if (cfgModels[a].c[Ia[b]]) {
                    k.Oj(Ia[b]);
                    break
                }
        k.setTime(k.time);
        uiMenuLeft.Ui();
        uiMenuLeft.c.update();
        k.arrModel = [k.sg()];
        VisualField.me();
        uiMenuLeft.me()
    };
    k.Jf = function (a) {
        k.setTime(a);
        uiMenuLeft.c.update();
        toolMask.me();
        VisualField.me();
        w.Of();
        k.Qe()
    };
    k.He = function (a) {
        z.Sg && (z.Sg.checked = "off" != a);
        k.Fl(a);
        k.Qe();
        k.log("wind", a)
    };
    k.Yi = function (a) {
        toolMask.ek = !0;
        k.Al(a);
        toolMask.me();
        VisualField.me();
        k.Qe();
        k.log("model", k.model)
    };
    k.units = {};
    k.Zi = function (a, b) {
        k.units[a] = b;
        var c = {},
            d;
        for (d in k.units) na[d][k.units[d]].wi && (c[d] = k.units[d]);
        util.Mj("units", JSON.stringify(c));
        w.Of();
        toolMask.j && toolMask.j.h == a && (k.Af && toolMask.createMask(), toolMask.createLegend())
    };
    k.Qe = function (a) {
        z.Vj();
        if (!uiAside.ri) {
            var b = k.Hi();
            b.F = k.model;
            b.pd = k.layer;
            b.time = k.time;
            b.Ig = k.themeType;
            if (!mapOpts.clickLink) {
                var c = ua.sm(b);
                a ? history.pushState(b,
                    "Ventusky", c) : history.replaceState(b, "Ventusky", c)
            }
            try {
                win.parent.postMessage({
                    state: {
                        lat: b.lat,
                        lon: b.lon,
                        zoom: b.zoom,
                        model: b.F,
                        layer: b.pd,
                        time: b.time.format("yyyyMMdd/HHmm"),
                        timestamp: +b.time,
                        wind: b.Ig
                    }
                }, "*")
            } catch (d) {}
        }
    };
    history.pushState || (k.Qe = function () {});
    win.addEventListener("popstate", function (a) {
        (a = a.state) && a.detail ? uiAside.createPanel(a.detail, a.title, a.Co) : (a && a.lat && a.lon && a.zoom || (a = ua.parse(location.href)), a && a.lat && a.lon && a.zoom && (k.Cl(a), uiAside.close(), toolMask.me()))
    }, !1);
    k.Cl = function (a) {
        if (a.pd || a.time) {
            a.pd &&
                cfgModels.auto.c[a.pd] && k.Oj(a.pd);
            if (a.time) {
                var b = "temperature-2m";
                k.layer && (b = k.layer);
                for (var b = cfgModels.auto.c[b], c = +a.time, d = 0; d < b.length; d++)
                    if (c >= b[d].Vd && c <= b[d].timeEnd && 0 == c % b[d].Zd) {
                        k.setTime(a.time);
                        break
                    }
            }
            k.Al(a.F || "auto");
            uiMenuLeft.Ud.model.Ke(a.F)
        }
        "undefined" != typeof a.Ig && k.Fl(a.Ig);
        uiMenuLeft.c.update();
        a.lat && a.lon && k.Vg(a.lat, a.lon, "zoom" in a ? a.zoom : 3)
    };
    var T = mapOpts.zoom,
        L = O = 0,
        G = 1,
        La = 1,
        Fa = 1,
        ya = 0;
    k.resize = function (a) {
        if (!a) var b = k.Hi();
        N = Math.ceil(win.innerWidth * G);
        I = Math.ceil(win.innerHeight * G);
        w.resize();
        toolMask.resize(!0);
        VisualField.resize();
        W.resize();
        z.resize();
        a || k.Vg(b.lat, b.lon, b.zoom)
    };
    k.Kn = function (a) {
        try {
            var b = JSON.parse(a)
        } catch (d) {}
        for (var c in b) na[c] && na[c][b[c]] && (k.units[c] = b[c])
    };
    k.log = function () {};
    k.bl = function () {};
    k.Rd = function () {
        function a(a) {
            var b = Math.max(win.innerWidth, win.innerHeight);
            Fa = 2560 < b ? 2560 / b : 1;
            La = win.devicePixelRatio || win.Lo || win.lg || 1;
            ya = Math.max(Math.min(320 / win.innerWidth, .8), .4);
            G = Math.max(Math.min(Fa * (util.Mf("dpr") || 1), La), ya);
            k.resize(a)
        }

        function b() {
            k.loop();
            requestAnimationFrame(b)
        }
        if (win.ga) {
            k.log = function (a, b) {
                win.ga("send", "event", a, b)
            };
            var c = location.href.replace(/[?#].*/, "").replace(/\/[^\/]*$/, "/");
            k.bl = function (a) {
                win.ga("set", "page", c + a);
                win.ga("send", "pageview")
            }
        }
        k.Wn();
        toolMask.xn();
        var d = util.hi("units"),
            f = util.Mf("grid");
        k.Af = f ? "1" == f : ismobile;
        w.ie = Ea[util.Mf("borders")] || "";
        (function () {
            for (var a in na)
                for (var b in na[a]) k.units[a] && 1 != na[a][b].sd || (k.units[a] = b)
        })(na);
        uiMenuLeft.Rd();
        uiMenuLeft.translate(u.code);
        k.Kn(d);
        toolMask.Bl(Ia[0]);
        w.Rd();
        a(!0);
        uiAside.Hm() ? (uiMenuLeft.c.update(), k.setTime(mapOpts.now)) : (d = k.Hn() || mapOpts, f = ua.parse(location.href), f.time || (f.time = mapOpts.now), k.Cl(f), f.lat && f.lon ||
            k.Vg(d.lat, d.lon, d.zoom));
        toolMask.Rd();
        VisualField.Rd();
        requestAnimationFrame(b);
        var r;
        win.addEventListener("resize", function () {
            clearTimeout(r);
            r = setTimeout(a, 250)
        }, !1)
    };
    win.addEventListener("load", k.Rd, !1);
    var job = {
        dojob: function (a, b, c, d, f, r) {
            var e = c.length;
            a = (f ? [this.mk, this.Wi, this.Xi, this.Em, this.lk, this.Dm][f - 1] : .1 < (c[e - 1] - c[0]) / e ? this.Wi : this.Xi).call(this, a, b, c, d, e);
            r(a)
        },
        mk: function (a, b, c, d, f) {
            var r = new Int32Array(f * f);
            if (1 >= a.length) return r;
            for (var e = 0, g = 0; g < f; g++)
                for (var h = (d[g] | 0) * b, n = d[g] % 1, k = 0; k < f; k++) {
                    var l =
                        h + c[k] | 0;
                    r[e++] = .5 > c[k] % 1 ? .5 > n ? a[l] : a[l + b] : .5 > n ? a[l + 1] : a[l + b + 1]
                }
            return r
        },
        Oo: function (a, b, c, d, f) {
            var r = new Int32Array(f * f);
            if (1 >= a.length) return r;
            for (var e = 0, g = 0; g < f; g++)
                for (var h = (d[g] | 0) * b, n = 0; n < f; n++) {
                    var k = h + c[n] | 0;
                    r[e++] = this.math.min(a[k], a[k + 1], a[k + 2], a[k += b], a[k + 1], a[k + 2], a[k += b], a[k + 1], a[k + 2])
                }
            return r
        },
        No: function (a, b, c, d, f) {
            var r = new Int32Array(f * f);
            if (1 >= a.length) return r;
            for (var e = 0, g = 0; g < f; g++)
                for (var h = (d[g] | 0) * b, n = 0; n < f; n++) {
                    var k = h + c[n] | 0;
                    r[e++] = this.math.max(a[k], a[k + 1], a[k + 2], a[k +=
                        b], a[k + 1], a[k + 2], a[k += b], a[k + 1], a[k + 2])
                }
            return r
        },
        lk: function (a, b, c, d, f) {
            for (var r = new Float64Array(3 * f), e = 0; e < f; e++) r[3 * e + 0] = c[e] % 1, r[3 * e + 1] = r[3 * e + 0] * r[3 * e + 0], r[3 * e + 2] = r[3 * e + 1] * r[3 * e + 0];
            for (var g = new Int32Array(f * f), h = e = 0; h < f; h++)
                for (var n = ((d[h] | 0) - 1) * b, k = d[h] % 1, l = k * k, u = l * k, q = 0; q < f; q++) {
                    var p = n + ((c[q] | 0) - 1),
                        w = this.vm(r[3 * q], r[3 * q + 1], r[3 * q + 2], k, l, u, a[p], a[p + 1], a[p + 2], a[p + 3], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p += b], a[p + 1], a[p + 2], a[p + 3]);
                    g[e++] = w
                }
            return g
        },
        Dm: function (a, b,
            c, d, f) {
            for (var r = new Float64Array(3 * f), e = 0; e < f; e++) r[3 * e + 0] = c[e] % 1, r[3 * e + 1] = r[3 * e + 0] * r[3 * e + 0], r[3 * e + 2] = r[3 * e + 1] * r[3 * e + 0];
            for (var g = new Int32Array(f * f), h = e = 0; h < f; h++)
                for (var n = ((d[h] | 0) - 2) * b, k = d[h] % 1, l = k * k, q = l * k, u = 0; u < f; u++) {
                    var p = n + ((c[u] | 0) - 2),
                        w = this.wm(r[3 * u], r[3 * u + 1], r[3 * u + 2], k, l, q, a[p], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p += b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5], a[p +=
                            b], a[p + 1], a[p + 2], a[p + 3], a[p + 4], a[p + 5]);
                    g[e++] = w
                }
            return g
        },
        Fm: function (a, b, c, d, f) {
            for (var r = "undefined" == typeof Float64Array ? Array : Float64Array, e = "undefined" == typeof Int32Array ? Array : Int32Array, g = f / 2, h = new e(g), r = new r(g), n = 0; n < g; n++) h[n] = c[2 * n] | 0, r[n] = c[2 * n] % 1;
            c = new e(f * f);
            for (e = n = 0; e < g; e++) {
                for (var k = (d[2 * e] | 0) * b, l = d[2 * e] % 1, p = 0; p < g; p++) {
                    var u = k + h[p],
                        q = this.Ef(r[p], l, a[u], a[u + 1], a[u += b], a[u + 1]);
                    c[n] = c[n + 1] = c[n + f] = c[n + f + 1] = q;
                    n += 2
                }
                n += f
            }
            return c
        },
        Mo: function (a, b, c, d, f) {
            for (var r = new Int32Array(f * f),
                    e = 0, g = 0; g < f; g++)
                for (var h = (d[g] | 0) * b, n = d[g] % 1, k = 0; k < f; k++) {
                    var l = h + c[k] | 0;
                    r[e++] = a[l] || a[l + 1] || a[l + b] || a[l + b + 1] ? this.Ef(c[k] % 1, n, a[l], a[l + 1], a[l += b], a[l + 1]) : 0
                }
            return r
        },
        Wi: function (a, b, c, d, f) {
            for (var g = new Int32Array(f * f), e = 0, h = 0; h < f; h++)
                for (var n = (d[h] | 0) * b, k = d[h] % 1, l = 0; l < f; l++) {
                    var p = n + c[l] | 0;
                    g[e++] = this.Ef(c[l] % 1, k, a[p], a[p + 1], a[p += b], a[p + 1])
                }
            return g
        },
        Ef: function (a, b, c, d, f, g) {
            c = (d - c) * a + c;
            return ((g - f) * a + f - c) * b + c
        },
        xm: function (a, b, c, d, f, g, e) {
            return this.math.atan2(job.Ef(a, b, this.math.sin(c * e), this.math.sin(d *
                e), this.math.sin(f * e), this.math.sin(g * e)), job.Ef(a, b, this.math.cos(c * e), this.math.cos(d * e), this.math.cos(f * e), this.math.cos(g * e))) / e
        },
        Xi: function (a, b, c, d, f) {
            for (var g = new Int32Array(f), e = new Float64Array(f), h = new Float64Array(f), n = new Float64Array(f), k = 0; k < f; k++) {
                var l = this.math.round(c[k]);
                g[k] = l - 1;
                var l = c[k] - l,
                    p = l * l,
                    u = p * p;
                e[k] = 4 * u - 3 * p + 1;
                h[k] = (-4 * u + 3 * p - l) / 2;
                n[k] = (-4 * u + 3 * p + l) / 2
            }
            c = new Int32Array(f * f);
            for (l = k = 0; l < f; l++)
                for (var u = this.math.round(d[l]), p = (u - 1) * b, q = d[l] - u, w = q * q, v = w * w, u = 4 * v - 3 * w + 1, x = (-4 * v + 3 * w - q) / 2, q = (-4 *
                        v + 3 * w + q) / 2, w = 0; w < f; w++) v = p + g[w], c[k++] = this.rn(e[w], h[w], n[w], u, x, q, a[v], a[v + 1], a[v + 2], a[v += b], a[v + 1], a[v + 2], a[v += b], a[v + 1], a[v + 2]);
            return c
        },
        rn: function (a, b, c, d, f, g, e, h, n, k, l, p, u, q, w) {
            return (l * a + k * b + p * c) * d + (h * a + e * b + n * c) * f + (q * a + u * b + w * c) * g
        },
        Em: function (a, b, c, d, f) {
            for (var g = new Int32Array(f), e = new Float64Array(f), h = new Float64Array(f), n = new Float64Array(f), k = 0; k < f; k++) {
                var l = this.math.round(c[k]);
                g[k] = l - 1;
                var l = c[k] - l,
                    p = l * l,
                    u = p * p;
                e[k] = 4 * u - 3 * p + 1;
                h[k] = (-4 * u + 3 * p - l) / 2;
                n[k] = (-4 * u + 3 * p + l) / 2
            }
            c = new Int32Array(f *
                f);
            for (l = k = 0; l < f; l++)
                for (var u = this.math.round(d[l]), p = (u - 1 - 1) * b, q = d[l] - u, w = q * q, v = w * w, u = 4 * v - 3 * w + 1, x = (-4 * v + 3 * w - q) / 2, q = (-4 * v + 3 * w + q) / 2, w = 0; w < f; w++) v = p + g[w] - 1, c[k++] = this.sn(e[w], h[w], n[w], u, x, q, a[v], a[v + 1], a[v + 2], a[v + 3], a[v + 4], a[v += b], a[v + 1], a[v + 2], a[v + 3], a[v + 4], a[v += b], a[v + 1], a[v + 2], a[v + 3], a[v + 4], a[v += b], a[v + 1], a[v + 2], a[v + 3], a[v + 4], a[v += b], a[v + 1], a[v + 2], a[v + 3], a[v + 4]);
            return c
        },
        sn: function (a, b, c, d, f, g, e, h, k, n, l, p, u, q, w, v, x, y, z, H, P, Q, A, B, ca, C, da, E, fa, ia, la) {
            a = (z * a + y * b + H * c) * d + (q * a + u * b + w * c) * f + (B * a + A * b + ca *
                c) * g;
            e = this.math.max(e, h, k, n, l, p, u, q, w, v, x, y, z, H, P, Q, A, B, ca, C, da, E, fa, ia, la);
            return this.math.min(a, e)
        },
        vm: function (a, b, c, d, f, g, e, h, k, n, l, p, u, q, w, v, x, y, z, H, P, Q) {
            if (e == Q && z == n && e == n && h == P && H == k && l == y && q == w && h == l && k == w && h == k && e == h && p == x && u == v && p == u && p == e) return e;
            n = n - k - e + h;
            q = q - u - l + p;
            y = y - x - w + v;
            Q = Q - P - z + H;
            e = n * c + (e - h - n) * b + (k - e) * a + h;
            l = q * c + (l - p - q) * b + (u - l) * a + p;
            w = y * c + (w - v - y) * b + (x - w) * a + v;
            a = Q * c + (z - H - Q) * b + (P - z) * a + H - w - e + l;
            return a * g + (e - l - a) * f + (w - e) * d + l
        },
        wm: function (a, b, c, d, f, g, e, h, k, n, l, p, u, q, w, v, x, y, z, H, P, Q, A, B, ca,
            C, da, E, fa, ia, la, D, G, K, N, M, L, I, O, T, Z, W) {
            if (q == N && D == x && q == x && w == K && G == v && H == fa && A == C && w == H && v == C && w == v && q == w && P == E && Q == da && P == Q && P == q) return q;
            var R = x - v - q + w,
                U = A - Q - H + P,
                X = fa - E - C + da,
                ab = N - K - D + G,
                R = R * c + (q - w - R) * b + (v - q) * a + w,
                U = U * c + (H - P - U) * b + (Q - H) * a + P,
                X = X * c + (C - da - X) * b + (E - C) * a + da;
            a = ab * c + (D - G - ab) * b + (K - D) * a + G - X - R + U;
            d = a * g + (R - U - a) * f + (X - R) * d + U;
            e = this.math.max(e, h, k, n, l, p, u, q, w, v, x, y, z, H, P, Q, A, B, ca, C, da, E, fa, ia, la, D, G, K, N, M, L, I, O, T, Z, W);
            return this.math.min(d, e)
        },
        math: Math
    };
    if (!win.Worker || win.opera) job.Wi = job.lk = job.Xi = job.Fm;
    var Ba =
        Ua / 256,
        pb = Va * Ba * Ba,
        C = {
            og: {},
            di: [],
            Re: {
                "null": {
                    request: 0
                }
            },
            Sf: [],
            Vk: {},
            Xh: [],
            jm: [],
            Rd: function () {
                for (var a = 0; a < Va; a++) {
                    var b = util.createElement("canvas");
                    b.width = b.height = Ua;
                    b = b.getContext("2d");
                    C.jm.push(b)
                }
                C.km = b.getImageData(0, 0, 256, 256);
                C.taskMgr = new TaskMgr
            },
            Tn: function (a) {
                var b = Infinity,
                    c = C.Xh.indexOf(a);
                if (-1 == c) {
                    for (var d = 0; d < pb; d++) {
                        var f = C.Re[C.Xh[d]],
                            f = f ? f.request : 0;
                        f < b && (c = d, b = f)
                    }
                    if (f = C.Re[C.Xh[c]]) f.position = -1, f.ke = null;
                    C.Xh[c] = a
                }
                return {
                    index: c,
                    context: C.jm[c / Ba / Ba | 0],
                    x: c % Ba * 256,
                    y: (c / Ba | 0) % Ba * 256
                }
            },
            Hk: function (a,
                b, c, d) {
                var f = C.Tn(a);
                b = C.bn(b, c, d);
                C.Re[a].position = f.index;
                C.Re[a].ke = {
                    canvas: f.context.canvas,
                    x: f.x,
                    y: f.y,
                    $e: b.$e
                };
                f.context.putImageData(b.Mm, f.x, f.y)
            },
            Lm: function (a) {
                return a + .5 | 0
            },
            Km: function (a) {
                return Math.random() < a % 1 ? Math.ceil(a) : Math.floor(a)
            },
            jn: function (a, b) {
                var c = C.Re[C.Vk[b]];
                if (c) return c.ke;
                for (c = 0; 5 > c; c++);
            },
            bn: function (a, b, c) {
                for (var d = new Uint8ClampedArray(C.km.data.buffer), d = new Uint32Array(d.buffer), f = c.xd ? C.Km : C.Lm, h = [], e = a.length - 1; 0 <= e; e--)
                    if (0 == b[e]) d[e] = toolMask.$m;
                    else if (33 == b[e] && .99 <
                    Math.random() && h.push(e), 17 == b[e] && 0 == e % 3) {
                    var k = 127 + 128 * Math.max(Math.min((a[e] - 2E3) / 5E3, 1), 0),
                        k = toolMask.wg ? k << 24 | 65535 : -65536 | k;
                    d[e] = k
                } else 33 == b[e] && C.Pk(e) ? (k = 102, k = toolMask.wg ? k << 24 | 255 : -16777216 | k, d[e] = d[e + 1] = d[e + 256] = d[e + 257] = k) : 65 == b[e] && C.Pk(e) && Math.random() < Math.abs((b[e] >> 1) / 96) ? (k = 127 + 128 * Math.max(Math.min((a[e] - 2E3) / 5E3, 1), 0), k = toolMask.wg ? k << 24 | 16777215 : -256 | k, d[e] = d[e + 1] = d[e + 256] = d[e + 257] = k) : d[e] = c.ai[f((Math.min(Math.max(a[e], c.min), c.max) - c.min) / c.step)] || 0;
                return {
                    Mm: C.km,
                    $e: h.length ? h : null
                }
            },
            Pk: function (a) {
                return 0 == a % 4 && 256 >
                    a % 2048 || 2 == a % 4 && 1280 > a % 2048 && 1024 <= a % 2048
            },
            request: 0,
            Nh: 0,
            Zg: 0,
            Fi: 1E3,
            ji: function (a, b, c, d, f) {
                a = remainder(a, 2 * (1 << c));
                var g = [c, a, b].join("/"),
                    e = [g, d.F, d.pd, d.time].join("/"),
                    h = C.Re[e];
                if (h) return h.request = ++C.request, 2 == h.status ? -1 == h.position && (C.Hk(e, h.values, h.cg, optLayer[d.pd]), h.mh && (C.Zg += Date.now() - h.mh, C.Nh++, delete h.mh)) : h.status = 1, C.Vk[g] = e, h;
                g = C.jn(e, g, a, b, c, d);
                if (!f) return g ? {
                    ke: g
                } : {};
                C.Re[e] = h = {};
                h.request = ++C.request;
                h.status = 0;
                h.mh = Date.now();
                C.Sf.push(e);
                if (C.Sf.length > db) {
                    C.Sf.sort(function (a,
                        b) {
                        return C.Re[a].request - C.Re[b].request
                    });
                    var k = C.Re[C.Sf[0]];
                    k.values = k.cg = null;
                    delete C.Re[C.Sf[0]];
                    C.Sf.shift();
                    k = null
                }
                var n;
                C.pn(a, b, c, d, function (a, b, c, g, r, k) {
                    h.values = a;
                    h.cg = b;
                    h.empty = g;
                    h.Yd = k;
                    h.status = 2;
                    h.position = -1;
                    h.ke = null;
                    c && (C.Hk(e, a, h.cg, optLayer[d.pd]), C.Zg += Date.now() - h.mh, C.Nh++, delete h.mh);
                    n && f()
                });
                n = !0;
                return !h.ke && g ? {
                    ke: g
                } : h
            },
            pn: function (a, b, c, d, f) {
                function h(d) {
                    var f = smparam.F;
                    C.on(a, b, c, smparam, function (a, b, c, g, k, l, p) {
                        function u(a, b) {
                            e.push(f);
                            d(a, q, b, l, p)
                        }
                        var q = job.mk(b, c, g, k, g.length);
                        if (l) n && n() ? h(d) : u(q, !0);
                        else if (p && n && n()) {
                            var w, v, J, x, y, z, Y = function () {
                                for (var a = q.length - 1; 0 <= a; a--) 0 == q[a] && (w[a] = J[a], q[a] = x[a]);
                                e.push(f);
                                d(w, q, v && y, !1, z)
                            };
                            C.taskMgr.dowork(a, c, g, k, function (a, b) {
                                w = a;
                                v = b;
                                J && Y()
                            });
                            h(function (a, b, c, d, e) {
                                J = a;
                                x = b;
                                y = c;
                                z = e;
                                w && Y()
                            })
                        } else C.taskMgr.dowork(a, c, g, k, u)
                    })
                }
                var e = [];
                if (Array.isArray(d.F)) {
                    smparam = {};
                    for (var g in d) smparam[g] = d[g];
                    smparam.F = d.F[0];
                    var k = 0,
                        n = function () {
                            k++;
                            return !!(smparam.F = d.F[k])
                        }
                } else smparam = d;
                h(function (a, b, c, d, h) {
                    f(a, b, c, d, h, e)
                })
            },
            on: function (a, b, c, d,
                f) {
                function r() {
                    for (var c = new Float64Array(256), d = new Float64Array(256), e = 0; 256 > e; e++) d[e] = k.$g((256 * b + e) / E) * v - A - da, c[e] = (256 * a + e) / E * w - B - ca;
                    f(T, R, N, c, d, ka, H)
                }
                var e = cfgModels[d.F].wd[d.pd].size || cfgModels[d.F].size;
                if (c < e.pe) var n = Pa,
                    l = e.Fd || 720,
                    u = e.Ed || 360,
                    w = l,
                    v = u;
                else n = $a, l = e.Te || 512, u = e.Se || 512, w = e.width, v = e.height;
                var x = cfgModels[d.F].wd[d.pd].variant,
                    y = w,
                    z = v,
                    A = 0,
                    B = 0,
                    va = !0,
                    ka = !0,
                    H = !1,
                    P = Math.ceil(w / l),
                    Q = Math.ceil(v / u),
                    ra = toolMask.Lk(e)[w];
                e.ae && (v *= 180 / (e.ae - e.Be), A = v * (90 - e.ae) / 180);
                e.Ce && (w *= 360 / (e.Ce - e.De), B = w * (180 + e.De) / 360, va = !1);
                var E = 512 * (1 << c);
                c = E / 256;
                var ca = Math.floor(a / c * w - B - 2),
                    D = Math.ceil((a + 1) / c * w - B + 3),
                    da = Math.floor(k.$g(b / c) * v - A - 2),
                    G = Math.ceil(k.$g((b + 1) / c) * v - A + 3),
                    N = D - ca,
                    ia = G - da,
                    la = N * ia;
                if (!va && (0 > ca || D > P * l) || 0 > da || G > Q * u) H = !0;
                c = 0;
                var e = 1,
                    M = 0,
                    L = 1;
                1 != P ? va ? (c = Math.floor(remainder(ca, w) / l), e = Math.ceil(remainder(D, w) / l), c > e && (e += P)) : (c = Math.max(Math.floor(ca / l), 0), e = Math.min(Math.ceil(D / l), P)) : va || (c = Math.min(Math.floor(ca / l), P));
                1 != Q ? (M = Math.max(Math.floor(da / u), 0), L = Math.min(Math.ceil(G / u), Q)) : M = Math.min(Math.floor(da / u), Q);
                var I = Math.max(e - c, 0) * Math.max(L - M, 0),
                    O = optLayer[d.pd].u || function (a) {
                        return a
                    };
                0 >= I && (setTimeout(r, 1), N = ia = la = 1);
                var T = new Int32Array(la),
                    R = new Int32Array(la),
                    U = gLayers[d.pd].file,
                    X = cfgModels[d.F].wd[d.pd].af || d.F,
                    W = d.time,
                    ea = gLayers[d.pd].Uf ? d.time.format("mm") : "";
                x && (U = gLayers[d.pd].Ng[x], O = optLayer[d.pd].u[x]);
                for (var ga = !!optLayer[d.pd].Di, x = M; x < L; x++)
                    for (D = c; D < e; D++)(function (a, b) {
                        function c(d) {
                            for (var e = a * l, h = b * u, k = Math.min((a + 1) * l, w), n = Math.min((b + 1) * u, da + ia), p = a == P - 1 ? -1 : 0, q = 0 == a ? 2 : 1, v = Math.max(h, da); v < n; v++)
                                for (var x = (v - da) * N, J = (v - h) * l, Q = p; Q < q; Q++)
                                    for (var A = e + w * Q, V = Math.min(k + w * Q, ca + N), B = Math.max(A, ca); B < V; B++) {
                                        var ha = J +
                                            B - A,
                                            C = d[ha];
                                        f && 0 == f[ha - 1] + f[ha] + f[ha + 1] + f[ha + 2] || !va && (B >= y - 2 || 1 >= B) || v >= z - 2 || 1 >= v ? H = !0 : (R[x + (B - ca)] = ga ? 1 : (C >> 24 << 1) + 1, ka = !1);
                                        T[x + (B - ca)] = ga ? C : C & 16777215
                                    }--I || r()
                        }
                        var e = {
                                model: X,
                                layer: U,
                                time: W,
                                minutes: ea,
                                tileX: a,
                                tileY: b,
                                cache: String(cfgModels[d.F].end).replace(/0+$/, "")
                            },
                            f = ra && ra[a + "," + b],
                            e = util.Ad(n, e);
                        if (C.og[e]) C.og[e].data ? c(C.og[e].data) : C.og[e].Kg.push(c);
                        else {
                            var k = {
                                Kg: [c]
                            };
                            C.og[e] = k;
                            C.di.push(e);
                            if (36 < C.di.length) {
                                var p = C.di[0];
                                C.og[p].Kg.length = 0;
                                delete C.og[p];
                                C.di.shift()
                            }
                            Array.isArray(e) ? util.Gk(e,
                                function (a) {
                                    for (var b = a.length, c = [], d = new Int32Array(a[0].length), e = 0; e < a[0].length; e++) {
                                        for (var f = 0; f < b; f++) c[f] = a[f][e];
                                        d[e] = O.apply(this, c)
                                    }
                                    k.data = d;
                                    for (e = 0; e < k.Kg.length; e++) k.Kg[e](d)
                                }) : util.loadImg(e, function (a) {
                                for (var b = new Int32Array(a.length), c = 0; c < a.length; c++) b[c] = O(a[c]);
                                k.data = b;
                                for (c = 0; c < k.Kg.length; c++) k.Kg[c](b)
                            })
                        }
                    })(D % P, x % Q)
            }
        };
    TaskMgr.prototype.AddWorker = function (a) {
        a = new Worker(a);
        a.onmessage = this.onmessage.bind(this);
        this.workers.push(a);
        this.numWorkers = this.workers.length
    };
    TaskMgr.prototype.Ho = function (a) {
        return function (b) {
            var c = b.data.yn;
            a.dojob(new Int32Array(c.source), c.jo, new Float64Array(c.x), new Float64Array(c.y), c.type, function (a) {
                postMessage({
                    ni: b.data.ni,
                    vo: a.buffer
                }, [a.buffer])
            })
        }
    };
    TaskMgr.type = 0;
    TaskMgr.wh = 0;
    TaskMgr.prototype.onmessage = function (a) {
        var b = -1 < a.data.ni && this.Uk[a.data.ni];
        b && b.If(new Int32Array(a.data.vo))
    };
    TaskMgr.prototype.dowork = function (a, b, c, d, f) {
        for (var h = !0, e = 0; e < a.length; e++)
            if (a[e]) {
                h = !1;
                break
            }
        if (h) f(new Int32Array(c.length * c.length), !0);
        else {
            if (this.workers) return ++TaskMgr.wh, a = {
                    source: a.buffer,
                    jo: b,
                    x: c.buffer,
                    y: d.buffer,
                    type: TaskMgr.type
                },
                this.workers[this.xi].postMessage({
                    yn: a,
                    ni: TaskMgr.wh
                }, [a.source, a.x, a.y]), this.Uk[TaskMgr.wh] = {
                    If: f,
                    cp: this.xi
                }, this.xi = (this.xi + 1) % this.numWorkers, TaskMgr.wh;
            job.dojob(a, b, c, d, TaskMgr.type, function (a) {
                f(a, !0)
            })
        }
    };
    uiMenuLeft.qf[73] = function () {
        TaskMgr.type = TaskMgr.type ? 0 : 1;
        uiMenuLeft.hg(u.se, [u.P, u.O][TaskMgr.type]);
        for (var a = 0; a < C.Sf.length; a++) delete C.Re[C.Sf[a]];
        C.Sf.length = 0;
        setTimeout(function () {
            toolMask.createMask(!0)
        }, 100)
    };
    var M = {
            debug: !1,
            createMaskM: function (a) {
                toolMask.context.imageSmoothingEnabled = !0;
                toolMask.context.imageSmoothingQuality = "high";
                toolMask.$e = null;
                M.Ei = 0;
                if (a.F.join) {
                    M.bj = [a.F.join(","),
                        a.pd, a.time.format("ddMMyyyyHHmm"), O, L, T
                    ].join("/");
                    for (var b = [], c = a.F.length - 1; 0 <= c; c--) M.ei(a.F[c], {
                        pd: a.pd,
                        time: a.time
                    }) && b.push(a.F[c]);
                    k.arrModel.join("+") != b.join("+") && (k.arrModel = b, uiMenuLeft.Hj(), uiMenuLeft.c.update(), uiMenuLeft.Ud.model.refresh(), VisualField.me())
                } else M.bj = [a.F, a.pd, a.time.format("ddMMyyyyHHmm"), O, L, T].join("/"), M.ei(a.F, {
                    pd: a.pd,
                    time: a.time
                });
                toolMask.cf = 0 < M.Ei;
                uiMenuLeft.Ph();
                toolMask.cf || M.ol()
            },
            Tg: {},
            cache: {},
            Wh: [],
            lm: function (a, b, c, d, f, h, e, k) {
                if (f > b || e > d || h < a || k < c) return null;
                a = Math.max(a, f);
                c = Math.max(c, e);
                b = Math.min(b, h);
                d = Math.min(d, k);
                return [a,
                    b, c, d
                ]
            },
            ei: function (a, b, c) {
                var d = M.bj,
                    f = !1,
                    r = cfgModels[a].wd[b.pd].size || cfgModels[a].size;
                if (T < r.pe) var e = Pa,
                    n = r.Fd || 720,
                    p = r.Ed || 360,
                    u = n,
                    w = p;
                else e = $a, n = r.Te || 512, p = r.Se || 512, u = r.width, w = r.height;
                var v = gLayers[b.pd].file,
                    x = cfgModels[a].wd[b.pd].af || a,
                    y = b.time,
                    z = gLayers[b.pd].Uf ? b.time.format("mm") : "",
                    A = r.ti ? "/" + b.time.format("mm") : "";
                b = 512 * (1 << T);
                var B = remainder(O, b),
                    C = Math.floor((B + N) / b) + 1,
                    ka = (180 + r.De) / 360 * b,
                    H = k.uh((90 - r.ae) / 180) * b,
                    P = (180 + r.Ce) / 360 * b,
                    r = k.uh((90 - r.Be) / 180) * b,
                    Q = P - ka,
                    ra = r - H;
                M.debug && console.log("screen: ", B, L, N, I, "=>", B + N, L +
                    I);
                M.debug && console.log("model: ", ka, H, P, r);
                for (var D = Math.min(B + N, b), ca = N - (D - B), E = 0, da = 0, G = 0; G < C; G++) {
                    M.debug && console.log("AABB " + G + ": ", B, D, L, L + I);
                    var fa = M.lm(B, D, L, L + I, ka, P, H, r);
                    if (null != fa) {
                        var ia = fa[0],
                            la = fa[1],
                            R = fa[2],
                            U = fa[3];
                        M.debug && (toolMask.context.fillStyle = "rgba(255,255,0,0.5)", toolMask.context.fillRect(E + ia - B, R - L, la - ia, U - R));
                        var X = n / u,
                            fa = p / w,
                            ia = Math.floor((ia - ka) / Q / X),
                            la = Math.ceil((la - ka) / Q / X),
                            W = Math.floor((R - H) / ra / fa),
                            R = Math.ceil((U - H) / ra / fa);
                        M.debug && console.log(ia, W, la, R);
                        X *= Q;
                        fa *= ra;
                        for (U = W; U < R; U++)
                            for (W = ia; W <
                                la; W++)(function (b, r, k, P, B, ia) {
                                function C() {
                                    M.debug && console.log("Load: " + ha);
                                    M.cache[ha] = this;
                                    delete M.Tg[ha];
                                    M.Wh.push(ha);
                                    250 <= M.Wh.length && delete M.Tg[M.Wh[M.Wh - 250]];
                                    va(this)
                                }

                                function D() {
                                    delete M.Tg[ha];
                                    va(this)
                                }

                                function va(a) {
                                    if (c) da--, 0 == da && c();
                                    else if (d == M.bj) {
                                        M.Ei--;
                                        0 >= M.Ei && (toolMask.cf = !1, M.ol(), uiMenuLeft.Ph());
                                        var e = Math.min(n, u - b * n),
                                            f = Math.min(p, w - r * p),
                                            h = e / u * Q,
                                            v = f / w * ra;
                                        toolMask.context.lineWidth = 1;
                                        toolMask.context.strokeStyle = "rgba(255,0,0,1.0)";
                                        toolMask.context.strokeRect(Math.floor(b * k + ka + (B - ia)) + 1, Math.floor(r * P + H - L) + 1, Math.ceil(h) -
                                            2, Math.ceil(v) - 2);
                                        toolMask.context.drawImage(a, 0, 0, e, f, Math.floor(b * k + ka + (B - ia)), Math.floor(r * P + H - L), Math.ceil(h), Math.ceil(v))
                                    }
                                }
                                var la = {
                                        model: x,
                                        layer: v,
                                        time: y,
                                        minutesFolder: A,
                                        minutes: z,
                                        tileX: b,
                                        tileY: r,
                                        cache: String(cfgModels[a].end).replace(/0+$/, "")
                                    },
                                    ha = util.Ad(e, la);
                                f = !0;
                                M.cache[ha] ? va(M.cache[ha]) : (M.Tg[ha] ? M.Tg[ha].addEventListener("load", C, !1) : M.Tg[ha] = util.createElement("img", {
                                    src: ha,
                                    onload: C,
                                    onerror: D
                                }), c ? da++ : M.Ei++)
                            })(W, U, X, fa, E, B)
                    }
                    E += D - B;
                    B = 0;
                    D = Math.min(b, ca);
                    ca -= D - B
                }
                0 == da && c && c();
                return f
            },
            Dh: function (a, b) {
                if (a.F.join)
                    for (var c = function () {
                            d--;
                            0 >= d && b()
                        }, d = a.F.length, f = a.F.length - 1; 0 <= f; f--) M.ei(a.F[f], {
                        pd: a.pd,
                        time: a.time
                    }, c);
                else M.ei(a.F, {
                    pd: a.pd,
                    time: a.time
                }, b)
            },
            kh: 50,
            Yh: 30,
            ol: function () {
                clearTimeout(M.Im);
                toolMask.cf || (M.Im = setTimeout(function () {
                    if (!toolMask.cf) {
                        M.qk || (M.qk = util.createElement("canvas", {
                            width: M.kh,
                            height: M.Yh
                        }));
                        var a = M.qk.getContext("2d");
                        a.drawImage(toolMask.Kd, 0, 0, M.kh, M.Yh);
                        try {
                            M.jh = a.getImageData(0, 0, M.kh, M.Yh).data
                        } catch (b) {
                            M.jh = []
                        }
                        w.Of()
                    }
                }, 50))
            },
            nj: function (a, b) {
                if (toolMask.cf || !M.jh) return 255;
                var c = Math.round(a / N * M.kh) + Math.round(b / I * M.Yh) * M.kh;
                return .2989 *
                    M.jh[4 * c + 0] + .587 * M.jh[4 * c + 1] + .114 * M.jh[4 * c + 2] | 0
            }
        },
        U = {
            dk: function (a, b, c, d) {
                var f = [za.replace(/\/$/, "")],
                    h = ["/?", "&", "&", "&"];
                if (a || b || c || d) {
                    if (a) {
                        var e = 2 < a.zoom ? 5 < a.zoom ? 8 < a.zoom ? 3 : 2 : 1 : 0;
                        f.push(h.shift() + "p=" + a.lat.toFixed(e) + ";" + a.lon.toFixed(e) + ";" + a.zoom)
                    }
                    b && f.push(h.shift() + "l=" + k.layer + (k.vl && k.vl != ALTITUDES[0] ? "/" + k.vl : ""));
                    c && f.push(h.shift() + "t=" + k.time.format("yyyyMMdd/HH"));
                    b && "auto" != k.model && f.push("&m=" + k.model);
                    d && "normal" != k.themeType && f.push(h.shift() + "w=" + k.themeType)
                }
                return f.join("")
            },
            Ti: function (a, b, c, d,
                f, g) {
                var e = [];
                d.trim() && e.push(d);
                b && (gLayers[k.layer].ki ? e.push(util.Ad(u.Bf[gLayers[k.layer].ki] || "{sublayer}", {
                    group: u.c[gLayers[k.layer].group],
                    sublayer: uiMenuLeft.oj(k.layer)
                })) : e.push(u.c[k.layer]));
                a && e.push(util.coords(a, 6 < a.zoom));
                c && e.push((new Date(k.time - 6E4 * uiMenuLeft.pa)).format(u.C + " " + u.te) + " (" + util.timeZone(uiMenuLeft.pa, uiMenuLeft.Ml) + ")");
                return {
                    info: e,
                    A: f,
                    Ne: g
                }
            },
            Nm: function (a) {
                var b = "";
                6 < a.zoom ? b = "-" + Math.floor(Math.abs(a.lat)) + String(Math.round(Math.abs(a.lat) % 1 * 60)).fe(2, "0") + (0 > a.lat ? "s" : "n") + Math.floor(Math.abs(a.lon)) + String(Math.round(Math.abs(a.lon) % 1 * 60)).fe(2, "0") + (0 > a.lon ?
                    "w" : "e") : 3 < a.zoom && (b = "-" + Math.round(Math.abs(a.lat)) + (0 > a.lat ? "s" : "n") + Math.round(Math.abs(a.lon)) + (0 > a.lon ? "w" : "e"));
                return "ventusky-" + k.layer + "-" + k.time.format("yyyyMMdd") + "t" + k.time.format("HHmm") + b
            },
            dj: function (a, b, c, d, f) {
                a.fillStyle = "#555";
                a.fillRect(0, 0, d, f);
                toolMask.j && toolMask.j.Xe || a.drawImage(w.rf, b, c, d, f, 0, 0, d, f);
                VisualField.particleTheme.Bg || (a.globalAlpha = toolMask.j ? toolMask.j.opacity : .8, a.drawImage(toolMask.Kd, b, c, d, f, 0, 0, d, f), a.globalAlpha = 1, (w.ie || toolMask.ie || "#FFF") == VisualField.particleTheme.color && a.drawImage(w.Ff, b, c, d, f, 0, 0, d, f))
            },
            Lg: function (a, b, c) {
                if (toolMask.j) {
                    var d = 12.8,
                        f = Math.round(1.5 *
                            d),
                        h = f * toolMask.Me.length;
                    h + f > c && (d = Math.round(d * c / h * 100) / 100, f = c / toolMask.Me.length, h = f * toolMask.Me.length);
                    a.font = "bold " + d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                    for (var e = d / 2, k = [], n = 0; n < toolMask.Me.length; n++) {
                        var l = toolMask.Me[n];
                        a.font = (l.ah ? "" : "bold ") + d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                        k[n] = a.measureText(l.text).width
                    }
                    e = Math.round(Math.max.apply(Math, k) + e);
                    b = b - e;
                    c = c - h;
                    3 > c && (a.fillStyle = "#FFF", a.fillRect(b, 0, e, c));
                    n = a.createLinearGradient(b, 0, b + e, 0);
                    n.addColorStop(0, "#555");
                    n.addColorStop(.5, "#999");
                    n.addColorStop(1,
                        "#555");
                    a.fillStyle = n;
                    a.fillRect(b, c, e, h);
                    for (n = 0; n < toolMask.Me.length; n++) l = toolMask.Me[n], a.font = (l.ah ? "" : "bold ") + d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif", a.fillStyle = l.ah ? "#FFF" : l.fk, a.fillRect(b, Math.round(n * f + c), e, Math.ceil(f)), a.fillStyle = l.ah ? "#000" : l.Hl, a.fillText(l.text, b + Math.round((e - k[n]) / 2), (n + .92) * f + c);
                    return e
                }
            },
            ej: function (a, b, c, d, f, h) {
                VisualField.particleTheme.Bg && (a.globalAlpha = toolMask.j ? toolMask.j.opacity : .8, a.drawImage(toolMask.Kd, b, c, d, f, 0, 0, d, f), a.globalAlpha = 1);
                toolMask.j && toolMask.j.Xe && a.drawImage(w.rf, b, c, d, f, 0, 0, d, f);
                ((w.ie || toolMask.ie || "#FFF") !=
                    VisualField.particleTheme.color || VisualField.particleTheme.Bg || !toolMask.j || toolMask.j.Xe) && a.drawImage(w.Ff, b, c, d, f, 0, 0, d, f);
                a.strokeStyle = a.fillStyle = "#0A2941";
                a.textBaseline = "bottom";
                for (var e = 0; e < w.Ye.length; e++) {
                    var k = w.Ye[e];
                    if (!(k.ff || k.x < b || k.y < c || k.x > b + d || k.y > c + f)) {
                        var l = [1, 1, 1, 2, 2][k.size - 1],
                            p = [2, 3, 4, 5, 6][k.size - 1] - l / 2,
                            u = [3, 4, 5, 6, 7][k.size - 1];
                        a.lineWidth = l;
                        a.beginPath();
                        a.arc(Math.round(k.x - b), Math.round(k.y - c), p, 0, 2 * Math.PI, !1);
                        a.stroke();
                        a.font = (4 > k.size ? "" : "bold ") + "14px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                        for (var l = k.name.split("\r\n"),
                                v = l.length - 1; 0 <= v; v--) p = a.measureText(l[v]).width, a.fillText(l[v], Math.round(k.x - b - p / 2), Math.round(k.y - c - u)), u += 17.5
                    }
                }
                e = d;
                h.A && (e -= U.Lg(a, d, f));
                a.shadowOffsetX = a.shadowOffsetY = 1.5;
                a.shadowBlur = 3;
                a.shadowColor = "rgba(0,0,0,0.5)";
                h.Ne && (l = Math.min(.3 * d / U.Ne.width, .15 * f / U.Ne.height, 1), a.drawImage(U.Ne, e - U.Ne.width * l - 5, f - U.Ne.height * l - 5, U.Ne.width * l, U.Ne.height * l), e -= U.Ne.width * l + 10);
                if (h.info.length)
                    if (d = 14, a.font = d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif", a.fillStyle = "#FFF", f = f - 5 + 3, b = e - 10, e = h.info.join(", "),
                        a.measureText(e).width > b) {
                        c = [];
                        for (e = 0; e < h.info.length; e++) c[e] = a.measureText(h.info[e]).width;
                        l = Math.max.apply(Math, c);
                        if (l > b) {
                            d = Math.round(14 * b / l * 100) / 100;
                            a.font = d + "px 'Helvetica Neue', Arial, Helvetica, sans-serif";
                            for (e = 0; e < h.info.length; e++) c[e] = a.measureText(h.info[e]).width;
                            f = f - 3 + 3 * b / l
                        }
                        k = a.measureText(", ").width;
                        l = [];
                        p = 0;
                        u = "";
                        for (e = h.info.length - 1; 0 <= e; e--) p && p + c[e] + k > b && (l.push(u), u = "", p = 0), u = h.info[e] + (u ? ", " + u : ""), p += c[e] + k;
                        l.push(u);
                        for (e = 0; e < l.length; e++) a.fillText(l[e], 5, f), f -= 1.25 * d
                    } else a.fillText(e,
                        5, f);
                a.shadowOffsetX = a.shadowOffsetY = a.shadowBlur = 0;
                a.shadowColor = "transparent"
            },
            Om: function (a, b, c, d, f, g, e) {
                var k = util.createElement("canvas", {
                        width: c,
                        height: d
                    }),
                    l = k.getContext("2d");
                U.dj(l, a, b, c, d);
                l.globalAlpha = VisualField.particleTheme.opacity;
                l.drawImage(VisualField.canvas, a, b, c, d, 0, 0, c, d);
                l.globalAlpha = 1;
                U.ej(l, a, b, c, d, e);
                return k.toDataURL(f, g)
            },
            eo: function (a, b) {
                if ("download" in HTMLAnchorElement.prototype) {
                    var c = util.createElement("a", {
                        href: a,
                        download: b,
                        parent: doc.body
                    });
                    c.click();
                    c.parentNode.removeChild(c)
                } else {
                    if (!ismobile) try {
                        for (var c = atob(a.split(",")[1]), d =
                                new ArrayBuffer(c.length), f = new Uint8Array(d), g = 0; g < c.length; g++) f[g] = c.charCodeAt(g) & 255;
                        try {
                            var e = new Blob([d], {
                                type: "application/octet-stream"
                            })
                        } catch (k) {
                            var n = new(win.WebKitBlobBuilder || win.MozBlobBuilder);
                            n.append(d);
                            e = n.getBlob("application/octet-stream")
                        }
                        e.name = b;
                        navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(e, b) : location.href = (win.webkitURL || win.URL).createObjectURL(e);
                        return
                    } catch (k) {}
                    c = win.open("about:blank", "_blank");
                    c.document.write('<img src="' + a + '" style="position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;box-shadow:0 0 0 20px,0 0 0 2000px #222;max-width:100%;max-height:100%">');
                    c.document.close()
                }
            },
            Vm: function (a, b, c, d) {
                var f = 512 * (1 << T),
                    r = (O + a) / f * VisualField.Fd,
                    e = (O + a + c) / f * VisualField.Fd + 1;
                c = k.$g((L + b) / f) * VisualField.Ed;
                var l = k.$g((L + b + d) / f) * VisualField.Ed + 1;
                d = Math.floor(e) - Math.floor(r) + 1;
                for (var p = Math.floor(l) - Math.floor(c) + 1, u = util.createElement("canvas", {
                        width: d,
                        height: p
                    }), q = u.getContext("2d"), w = q.getImageData(0, 0, d, p), v = w.data, x = 0, y = Math.floor(c); y < Math.floor(l) + 1; y++)
                    for (var z = Math.floor(r); z < Math.floor(e) + 1; z++) {
                        var A = Math.floor(y - VisualField.Ni) * VisualField.pg + (z - VisualField.Mi) % VisualField.pg | 0;
                        v[x + 0] = 255;
                        v[x + 1] = VisualField.Xj[A];
                        v[x + 2] = VisualField.Yj[A];
                        v[x + 3] = 255;
                        x += 4
                    }
                q.putImageData(w, 0, 0);
                e = u.toDataURL("image/jpeg",
                    .9);
                u = u.toDataURL("image/png");
                e = .9 * u.length > e.length ? e : u;
                return {
                    Mg: a + O - Math.floor(r) * f / VisualField.Fd,
                    rh: b + L - k.uh(Math.floor(c) * VisualField.Ed) / VisualField.Ed,
                    Sn: 1 / f * 2 * Math.PI,
                    Jo: Math.floor(c),
                    Eg: ((b + L) / f * 2 - 1) * Math.PI,
                    Go: VisualField.Fd / f,
                    bp: f,
                    gk: e,
                    width: d,
                    height: p
                }
            },
            Qm: function (a, b, c, d, f, k) {
                function e(a) {
                    return 'style="' + a.join("!important;").replace(/:\s/g, ":") + '!important"'
                }
                if ("wave" == Ja[VisualField.o].kind) return "\x3c!-- " + u.qa + " - " + u.Cf + " --\x3e";
                var l = 'width="' + c + '" height="' + d + '"',
                    p = ' alt="' + util.Fh((k.Ne ? k.info.concat("\u00a9 VentuSky.com") : k.info).join(", "), !0) + '"',
                    q = ["max-width: " + c + "px", "width: 100%", "display: inline-block"],
                    w = k.info.length ? ' title="' + util.Fh(k.info.join(", "), !0) + '"' : "",
                    v = util.createElement("canvas", {
                        width: c,
                        height: d
                    }),
                    x = v.getContext("2d");
                if (VisualField.particleTheme.yj) U.dj(x, a, b, c, d), U.ej(x, a, b, c, d, k), c = p = "<img " + l + p + ' src="' + v.toDataURL("image/jpeg", .9) + '" ' + e(["display: block", "width: 100%", "height: auto", "border: 0"]) + ">";
                else {
                    U.ej(x, a, b, c, d, k);
                    k = v.toDataURL("image/png");
                    U.dj(x, a, b, c, d);
                    for (var v = v.toDataURL("image/jpeg", .9), x = Math.round(Math.min(Math.max(c, d) / 25, qa)), y = Math.round(c *
                            d / N / I * VisualField.particleTheme.Pe), z = [], A = 0; A < VisualField.particleTheme.jg.length; A++) z.push(Math.round(y / VisualField.particleTheme.jg.length * A) + ":" + VisualField.particleTheme.jg[A]);
                    var B = {};
                    B["@i"] = c;
                    B["@v"] = d;
                    B["@m"] = VisualField.particleTheme.lf;
                    B["@k"] = y;
                    B["@d"] = c + 2 * x;
                    B["@p"] = d + 2 * x;
                    B["@r"] = x;
                    B["@l"] = VisualField.particleTheme.Ek;
                    B["@h"] = VisualField.particleTheme.ph;
                    B["@z"] = '"' + (VisualField.particleTheme.color || "#FFF") + '"';
                    B["@x"] = "{" + z.join(",") + "}";
                    B["@b"] = VisualField.particleTheme.length * VisualField.im;
                    B["@g"] = job.Ef.toString();
                    B["@s"] = .2;
                    a = U.Vm(a - x, b - x, c + 2 * x, d + 2 * x);
                    B["@c"] = a.gk;
                    B["@u"] = a.width;
                    B["@q"] = a.height;
                    B["@t"] = a.Go;
                    B["@w"] = a.Jo;
                    B["@e"] = a.Mg;
                    B["@j"] = a.Sn;
                    B["@f"] = a.Eg;
                    B["@y"] = 2 * VisualField.Ed / Math.PI;
                    B["@o"] =
                        a.width * a.height;
                    b = (bb.En.toString() + ".call(parentNode,window,document,Math,Date," + bb.Fn.toString()).replace(/\$\["([^"]+)"\]/g, function (a, b) {
                        return B[b]
                    }).replace(/"/g, "'").replace(/(function)\s\(/g, "$1(").replace(/([|>*+,;=])\r?\n/g, "$1").replace(/([|>*+,=&])\r?\n/g, "$1");
                    var C = {},
                        ka = 0;
                    b = b.replace(/([^a-z0-9])([a-z])(?=[^a-z0-9])/gi, function (a, b, c) {
                        if (a = "mojzik".charAt(ka++)) C[c] = a, C[a] ? C[C[a]] = c : C[a] = c;
                        else {
                            if (C[c]) return b + C[c];
                            C[c] = c
                        }
                        return b + C[c]
                    });
                    b += ",'" + a.gk + "')";
                    p = "<img " + l + p + ' src="' + k +
                        '" ' + e("display: block;position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: 2;margin: 0;border: 0;padding: 0".split(";")) + ' onload="onload=' + util.Fh(b, !0) + ',null">';
                    p = "<canvas " + l + " " + e(["left: 0", "top: 0", "width: 100%", "height: 100%", "position: absolute", "z-index: 1", "opacity: " + VisualField.particleTheme.opacity]) + ">" + util.Fh(u.N) + "</canvas>" + p;
                    c = "<span " + e(["height: 0", "width: 100%", "display: block", "box-sizing: content-box", "padding: 0 0 " + Math.round(d / c * 1E5) / 1E3 + "% 0", "position: relative"]) + ">" + p + "</span>";
                    q.push("background: url(" +
                        v + ") no-repeat", "background-size: contain")
                }
                return '<a target="_top"' + w + " " + e(q) + ' href="' + util.Fh(f, !0) + '">' + c + "</a>"
            }
        },
        bb = {
            Fn: function (a, b, c, d) {
                function f(a, c) {
                    a.x = b.random() * $["@d"];
                    a.y = b.random() * $["@p"];
                    a.lifeTime = c + b.random() * $["@l"];
                    return a
                }
                var h = $["@g"];
                c.strokeStyle = $["@z"];
                c.translate(-$["@r"], -$["@r"]);
                for (var e = [], g = e.length; g < $["@k"]; g++) e.push(f({}, 0));
                var k = $["@x"],
                    n = new(a.Int8Array || Array)($["@o"]),
                    l = new(a.Int8Array || Array)($["@o"]),
                    p;
                (function () {
                    var b = a.document.createElement("canvas");
                    b.width = $["@u"];
                    b.height = $["@q"];
                    var c = b.getContext("2d"),
                        e = new Image;
                    e.src = d;
                    e.onload = function () {
                        c.drawImage(e, 0, 0);
                        for (var a = c.getImageData(0, 0, $["@u"], $["@q"]).data, d = 0; d < $["@o"]; d++) n[d] = a[4 * d + 1] - 127, l[d] = a[4 * d + 2] - 127;
                        p = !0;
                        c = b = e.onload = null
                    }
                })();
                for (var u = [], q = [], w = [], v = [], g = 0; g < $["@d"]; g++) {
                    var x = (g + $["@e"]) * $["@t"];
                    u[g] = x | 0;
                    w[g] = x % 1
                }
                for (g = 0; g < $["@p"]; g++) x = b.atan(b.exp(g * $["@j"] + $["@f"])) * $["@y"] - $["@w"], q[g] = (x | 0) * $["@u"], v[g] = x % 1;
                return function (a) {
                    if (p) {
                        var d = $["@u"],
                            g = $["@b"] * a;
                        c.lineWidth =
                            k[0];
                        for (var x = 0; x < $["@k"]; x++) {
                            var y = e[x];
                            0 >= y.lifeTime && f(y, $["@h"]);
                            var z = b.round(y.x),
                                B = b.round(y.y),
                                A = u[z],
                                J = q[B],
                                z = w[z],
                                C = v[B],
                                B = h(z, C, n[J + A], n[J + A + 1], n[J + d + A], n[J + d + A + 1]) * g,
                                A = h(z, C, l[J + A], l[J + A + 1], l[J + d + A], l[J + d + A + 1]) * g;
                            c.moveTo(y.x, y.y);
                            y.x += B;
                            y.y -= A;
                            c.lineTo(y.x, y.y);
                            x in k && (c.stroke(), c.beginPath(), c.lineWidth = k[x]);
                            y.lifeTime -= a;
                            if (0 > y.x || y.x >= $["@d"] || 0 > y.y || y.y >= $["@p"]) y.lifeTime = 0
                        }
                        c.stroke()
                    }
                }
            },
            En: function (a, b, c, d, f, h) {
                function e() {
                    var f = d.now(),
                        h = 500 < f - q ? 1 : c.min((f - q) / 16, 10);
                    q = f;
                    if (500 < f - w && (w = q, (f =
                            b.getElementById("ventusky")) && !f.checked ? v = !1 : (f = g.getBoundingClientRect(), v = c.max(0, c.min(f.right, a.innerWidth) - c.max(f.left, 0)) * c.max(0, c.min(f.bottom, a.innerHeight) - c.max(f.top, 0)) / f.width / f.height > $["@s"]), !v && b.body.contains && !b.body.contains(k))) return p.clearRect($["@r"], $["@r"], $["@i"], $["@v"]);
                    v && (p.globalCompositeOperation = "destination-in", p.globalAlpha = c.pow($["@m"], h), p.fillRect($["@r"], $["@r"], $["@i"], $["@v"]), p.globalCompositeOperation = "source-over", p.globalAlpha = 1, u(h));
                    l.call(a, e)
                }
                var g = this.getElementsByTagName("canvas")[0];
                if (g && g.getContext && g.getBoundingClientRect && d.now) {
                    var k = this.parentNode,
                        n, l = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function (a) {
                            var b = d.now(),
                                e = c.max(0, 16 - (b - n));
                            a = setTimeout(a, e);
                            n = b + e;
                            return a
                        },
                        p = g.getContext("2d"),
                        u = f.call(this, a, c, p, h),
                        q = d.now(),
                        w = 0,
                        v = !1;
                    l.call(a, e)
                }
            }
        },
        z = {


            uiTopMenuShare: function () {
                var a = doc.getElementsByTagName("menu")[0];
                if (a) {
                    z.uj = util.createElement("a", {
                        textContent: u.aa,
                        onclick: function () {
                            z.open();
                            return !1
                        }
                    });
                    var b =
                        util.createElement("li", {
                            id: "menu-share",
                            children: [z.uj]
                        });
                    a.insertBefore(b, a.firstChild);
                    z.Lj = {
                        embed: !0
                    };
                    for (a = 0; b = ["image", "live"][a]; a++) {
                        var c = util.Mf("cutter-" + b);
                        z.Lj[b] = c ? "1" == c : !0
                    }
                    z.uiTopMenuApp()
                }
            },
            uiTopMenuApp: function () {
                var a = doc.getElementsByTagName("menu")[0],
                    b = util.createElement("a", {
                        textContent: u.df,
                        className: "xo",
                        href: "/app",
                        onclick: function () {
                            uiAside.createPanel("app", u.df, !0);
                            return !1
                        }
                    }),
                    b = util.createElement("li", {
                        id: "menu-app",
                        children: [b]
                    });
                a.insertBefore(b, a.firstChild);
                for (a = 0; a < Ta.length; a++)
                    if (b = Ta[a], b.userAgent.test(navigator.userAgent) && (!b.Wj || !b.Wj.test(navigator.userAgent))) {
                        util.createElement("a", {
                            className: "xo",
                            textContent: u.lc,
                            href: b.link,
                            target: "_blank",
                            parent: uiSearchBar.form
                        });
                        break
                    }
            },
            open: function () {
                function a(a) {
                    d[e] && (d[e].className = "");
                    d[a].className = "active";
                    e = a;
                    a = "";
                    var b = d[e].childNodes[1];
                    D.className = "";
                    D.onmouseover = null;
                    z.mi.disabled = !1;
                    0 == e ? (z.Wf.focus(), z.Wf.select(), b.appendChild(y), y.firstChild.data = u.ia) : 1 == e ? (b.appendChild(C), b.appendChild(w), b.appendChild(v), a = "image") : 2 == e && (b.appendChild(C), b.appendChild(y), b.appendChild(w), y.firstChild.data = u.zf, a = "live");
                    n && (w.firstChild.textContent =
                        u.ba, l.style.display = "", q.style.display = p.style.display = "none", p.value = "", n = !1);
                    z.Nj(a)
                }

                function b() {
                    k.log("share", "action-" + ["image", "live", "embed", "gif", "video"][e]);
                    z.ng.style.backgroundColor = "#FFF";
                    requestAnimationFrame(function () {
                        z.ng.style.backgroundColor = "rgba(255,255,255,0.5)";
                        requestAnimationFrame(function () {
                            z.ng.style.backgroundColor = "rgba(255,255,255,0.25)";
                            requestAnimationFrame(function () {
                                z.ng.style.backgroundColor = ""
                            })
                        })
                    });
                    var a = k.Oh(A.Mh + A.Lh / 2, A.Eg + A.Hh / 2),
                        b = U.Ti(z.pj.checked && (3 < T ?
                            a : null), z.Rk.checked, z.Sk.checked, z.vn.value, z.tn.checked, z.un.checked);
                    if (1 == e) {
                        var c, d, f;
                        "png" == B.value ? (c = "image/png", d = 1, f = "png") : (c = "image/jpeg", d = B.value / 100, f = "jpg");
                        b = U.Om(A.Mh, A.Eg, A.Lh, A.Hh, c, d, b);
                        U.eo(b, U.Nm(a) + "." + f)
                    } else 2 == e && (f = uiAside.$d.scrollTop, c = w.getBoundingClientRect().top - l.getBoundingClientRect().top, l.style.display = "none", C.parentNode.removeChild(C), y.parentNode.removeChild(y), q.style.display = p.style.display = "", p.style.height = "50px", w.parentNode.appendChild(w), p.style.height = c -
                        (w.getBoundingClientRect().top - p.getBoundingClientRect().top - 50) + "px", uiAside.$d.scrollTop = f, a.zoom = T, a = U.dk(z.tj.checked && a, z.yh.checked, z.Rg.checked, z.Sg.checked), a = U.Qm(A.Mh, A.Eg, A.Lh, A.Hh, a, b), p.value = a, p.focus(), p.select(), w.firstChild.textContent = u.Lb, n = !0)
                }
                k.log("share", "open");
                U.Ne || (U.Ne = util.createElement("img", {
                    src: fb
                }));
                var c = uiAside.createInner(null, u.ka, !1);
                uiAside.yi = z.Wg;
                c.className = "share";
                uiAside.yg = "#share";
                util.createElement(0, {
                    className: "section",
                    children: [util.createElement(0, {
                        className: "header clearfix",
                        children: [util.createElement("h1", {
                            textContent: u.ka
                        })]
                    }), util.createElement(0, {
                        className: "header_background"
                    }), util.createElement(0, {
                        className: "white_space"
                    }), util.createElement(0, {
                        className: "subheader clearfix",
                        children: [util.createElement(0, {
                            className: "destination",
                            textContent: u.Ic
                        })]
                    })],
                    parent: c
                });
                for (var d = [], f = ["", u.uf, u.wf, u.Ih, u.Jh, u.Kh], g = 0; 4 > g; g++) d.push(util.createElement("li", {
                    children: [util.createElement("label", {
                        children: [util.createElement("input", {
                            type: "radio",
                            name: "share-type",
                            onclick: function () {
                                a(this)
                            }.bind(g)
                        }), util.createElement("span", {
                            textContent: [u.Vb, u.Pc, u.Tc, u.Jc, u.Mb, u.zd][g]
                        })]
                    }), util.createElement(0, {
                        className: "share_block clearfix",
                        children: [g ? util.createElement("p", {
                                innerHTML: f[g]
                            }) :
                            ""
                        ]
                    })]
                }));
                util.createElement("ul", {
                    className: "share_menu clearfix",
                    children: d,
                    parent: c
                });
                var e = -1,
                    n;
                z.Wf = util.createElement("input", {
                    type: "url",
                    value: za,
                    className: "tt",
                    style: "width: 100%; margin: 0 0 0.5em",
                    parent: d[0].childNodes[1]
                });
                z.vk(z.Wf);
                var l = util.createElement("p", {
                        innerHTML: u.xf,
                        parent: d[2].childNodes[1]
                    }),
                    p = util.createElement("textarea", {
                        className: "tt lw",
                        style: "width: 100%; font-size: 80%; display: none; margin-bottom: 0.666em; word-break: break-all",
                        parent: d[2].childNodes[1]
                    });
                z.vk(p);
                var q = util.createElement("p", {
                        innerHTML: u.yf,
                        style: "display: none",
                        parent: d[2].childNodes[1]
                    }),
                    v = util.createElement("p", {
                        innerHTML: u.vf,
                        parent: d[1].childNodes[1]
                    }),
                    w = util.createElement("p", {
                        style: "text-align: center",
                        children: [util.createElement("a", {
                            className: "share_action",
                            innerHTML: u.ba,
                            onclick: function () {
                                if (n) return a(e);
                                b()
                            }
                        })]
                    }),
                    y = z.zm(function () {
                        z.Vj();
                        0 == e && (z.Wf.focus(), z.Wf.select())
                    }),
                    B;
                util.createElement("label", {
                    style: "margin: 0 0 0.5em",
                    children: [u.Pb + ": ", B = util.createElement("select", {
                        children: [util.createElement("option", {
                            textContent: "PNG",
                            value: "png"
                        })],
                        onchange: function () {
                            util.tf("image-quality", this.value)
                        }
                    }), "."],
                    parent: d[1].childNodes[1]
                });
                c = util.Mf("image-quality") ||
                    90;
                for (g = 0; g < Na.length; g++) util.createElement("option", {
                    textContent: "JPEG " + Na[g] + "%",
                    value: Na[g],
                    parent: B,
                    selected: Na[g] == c
                });
                var A = {
                        Mh: 0,
                        Eg: 0,
                        Lh: N,
                        Hh: I
                    },
                    C = z.ym(A);
                z.ng.oncontextmenu = function () {
                    n && a(e);
                    k.log("share", "rmb");
                    b();
                    return !1
                };
                var D = util.createElement(0, {
                    id: "socbuttons",
                    className: "dormant",
                    children: z.Cg = [util.createElement("a", {
                        className: "socbutton socbutton-em",
                        target: "_blank"
                    }), util.createElement("a", {
                        className: "socbutton socbutton-vk",
                        target: "_blank"
                    }), util.createElement("a", {
                        className: "socbutton socbutton-rd",
                        target: "_blank"
                    }), util.createElement("a", {
                        className: "socbutton socbutton-gp",
                        target: "_blank"
                    }), util.createElement("a", {
                        className: "socbutton socbutton-tw",
                        target: "_blank"
                    }), util.createElement("a", {
                        className: "socbutton socbutton-fb",
                        target: "_blank"
                    })],
                    parent: d[0],
                    onmouseover: function () {
                        d[0].firstChild.firstChild.checked = !0;
                        D.className = "";
                        a(0)
                    }
                });
                z.Vj()
            },
            vk: function (a) {
                a.readOnly = !0;
                a.onfocus = function () {
                    this.select();
                    setTimeout(function () {
                        doc.execCommand("selectAll")
                    }, 1)
                };
                a.onclick = a.createTextRange ? function () {
                    var b = a.createTextRange();
                    b.select();
                    b.execCommand("Copy")
                } : function () {
                    this.select()
                }
            },
            Vj: function () {
                if (z.Wf) {
                    z.pj.parentNode.style.display =
                        3 < T ? "" : "none";
                    z.Sg.parentNode.style.visibility = "normal" == k.themeType ? "hidden" : "";
                    z.Rg.parentNode.childNodes[2].data = "normal" == k.themeType ? "." : ",";
                    var a = z.tj.checked && k.Hi(),
                        b = U.dk(a, z.yh.checked, z.Rg.checked, z.Sg.checked);
                    z.Wf.value = b;
                    var a = (U.Ti(3 < T ? a : null, z.yh.checked, z.Rg.checked, "").info.join(", ") || u.N) + " \u2013 ",
                        c = "VentuSky: " + (U.Ti(!1, z.yh.checked, z.Rg.checked, "").info.join(", ") || u.N);
                    z.Cg[5].href = "https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b);
                    z.Cg[4].href = "https://twitter.com/intent/tweet/?text=" +
                        encodeURIComponent(a) + "&url=" + encodeURIComponent(b) + "&related=Ventuskycom&via=Ventuskycom";
                    z.Cg[3].href = "https://plus.google.com/share?url=" + encodeURIComponent(b);
                    z.Cg[2].href = "https://www.reddit.com/submit?resubmit=true&url=" + encodeURIComponent(b) + "&title=" + encodeURIComponent(c);
                    z.Cg[1].href = "http://vk.com/share.php?url=" + encodeURIComponent(b);
                    z.Cg[0].href = "mailto:?subject=" + encodeURIComponent(c) + "&body=" + encodeURIComponent(c + "\r\n\r\n" + b)
                }
            },
            Wg: function () {
                z.Nj("");
                z.je.parentNode.removeChild(z.je);
                delete z.Wf;
                z.Sg = z.Rg = z.yh = z.tj = null;
                z.mi = z.Qg = z.Pg = z.je = z.ng = null;
                z.Rk = z.pj = z.Sk = null;
                z.ci = null;
                z.Cg = null
            },
            resize: function () {
                z.ci && z.ci()
            },
            ym: function (a) {
                function b(a) {
                    if (C) {
                        var b = 45 * C,
                            d = N,
                            e = I;
                        d / e > C ? d = Math.round(e * C) : e = Math.round(d / C);
                        A ? (E = Math.max(Math.min(z.Pg.value | 0, e), 45), D = Math.round(E * C)) : (D = Math.max(Math.min(z.Qg.value | 0, d), b), E = Math.round(D / C))
                    } else E = Math.max(Math.min(z.Pg.value | 0, I), 45), D = Math.max(Math.min(z.Qg.value | 0, N), 45);
                    if (!a || A) z.Qg.value = D;
                    a && A || (z.Pg.value = E);
                    V = Math.max(Math.round((N - (N > 780 * G ? 540 * G : 0) - D) / 2), 0);
                    K = Math.round((I -
                        E) / 2);
                    c();
                    f()
                }

                function c() {
                    z.mi.checked ? (a.Mh = V, a.Eg = K, a.Lh = D, a.Hh = E, d()) : (a.Mh = 0, a.Eg = 0, a.Lh = N, a.Hh = I)
                }

                function d() {
                    clearTimeout(M);
                    M = setTimeout(function () {
                        util.tf("cutter-state", D + "," + E + "," + (C ? da ? "l" : ca.selectedIndex : "x"))
                    }, 500)
                }

                function f() {
                    var a = N,
                        b = I;
                    z.je.childNodes[0].style.height = z.je.childNodes[2].style.top = z.je.childNodes[3].style.top = z.je.childNodes[4].style.top = Math.round(K / G) + "px";
                    z.je.childNodes[1].style.top = Math.round(K + E) / G + "px";
                    z.je.childNodes[1].style.height = Math.round((b - K - E) / G) + "px";
                    z.je.childNodes[2].style.height =
                        z.je.childNodes[3].style.height = z.je.childNodes[4].style.height = Math.round(E / G) + "px";
                    z.je.childNodes[2].style.width = z.je.childNodes[4].style.left = Math.round(V / G) + "px";
                    z.je.childNodes[3].style.left = Math.round((V + D) / G) + "px";
                    z.je.childNodes[3].style.width = Math.round((a - V - D) / G) + "px";
                    z.je.childNodes[4].style.width = Math.round(D / G) + "px";
                    l(Q)
                }

                function l(a) {
                    var b = a;
                    N > 780 * G ? (b = a && (540 * G + D - N) / G, uiAside.$d.childNodes[0].style.background = 0 < b ? "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.8) " + Math.max(b - 20, 0) + "px, #FFF " +
                        (b + 20) + "px)" : "", H[4].style.right = (0 < b ? b + 20 : Math.max(b / 2 + 20, -12)) + "px", ka.style.left = Math.round(D / G) + "px", ka.style.display = 0 < b ? "" : "none", b = a && (E > I - 340 * G || D > N - 880 * G)) : uiAside.$d.childNodes[0].style.background = a ? "rgba(255,255,255,0.8)" : "";
                    doc.documentElement.className = b ? "s" : ""
                }

                function e() {
                    H[4].firstChild.style.borderLeftWidth = C ? "2px" : "0";
                    d()
                }

                function p(a) {
                    if (da != a)
                        if (da = a) {
                            a: {
                                a = D;
                                var b = E;0 > a && (a = -a);0 > b && (b = -b);
                                if (b > a) {
                                    var c = a;
                                    a = b;
                                    b = c
                                }
                                for (;;) {
                                    if (0 == b) break a;
                                    a %= b;
                                    if (0 == a) {
                                        a = b;
                                        break a
                                    }
                                    b %= a
                                }
                            }
                            5 > a && (a = 1);R.textContent =
                            D / a + ":" + E / a;ca.appendChild(R)
                        }
                    else ca.removeChild(R)
                }
                for (var q = [], v = 0; v < Aa.length; v += 2) q.push(Aa[v] / Aa[v + 1]);
                var y = (util.Mf("cutter-state") || "640,360,0").split(","),
                    A = 0,
                    C = q[y[2]];
                "l" == y[2] && (C = y[0] / y[1]);
                var D = Math.min(y[0], N, C ? I * C : Infinity),
                    E = Math.min(y[1], I, C ? N / C : Infinity),
                    V, K;
                z.Qg = util.createElement("input", {
                    type: "number",
                    className: "tt lw",
                    style: "width: 3.875em; text-align: right",
                    value: D,
                    oninput: function () {
                        A = 0;
                        b(!0)
                    },
                    onblur: function () {
                        this.value = D
                    }
                });
                z.Pg = util.createElement("input", {
                    type: "number",
                    className: "tt lw",
                    style: "width: 3.875em; text-align: right",
                    value: E,
                    oninput: function () {
                        A = 1;
                        b(!0)
                    },
                    onblur: function () {
                        this.value = E
                    }
                });
                var M;
                z.ci = function () {
                    b()
                };
                var ka = util.createElement(0, {
                        style: "position: absolute; top: 50%; display: none; width: 12px; height: 32px; margin: -16px -6px; border: 4px solid #f7a715; border-width: 0 4px; z-index: 12; cursor: e-resize; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;",
                        parent: doc.body
                    }),
                    H = [util.createElement(0, {
                            children: [util.createElement("span", {
                                style: "border-width: 4px 0 0 0"
                            })],
                            style: "height: 20px; top: -12px; cursor: n-resize"
                        }),
                        util.createElement(0, {
                            children: [util.createElement("span", {
                                style: "border-width: 0 0 4px 0"
                            })],
                            style: "height: 20px; top: auto; bottom: -12px; cursor: s-resize"
                        }), util.createElement(0, {
                            children: [util.createElement("span", {
                                style: "border-width: 0 0 0 4px"
                            })],
                            style: "width: 20px; left: -12px; height: 100%; cursor: w-resize"
                        }), util.createElement(0, {
                            children: [util.createElement("span", {
                                style: "border-width: 0 4px 0 0"
                            })],
                            style: "width: 20px; left: auto; right: -12px; height: 100%; cursor: e-resize"
                        }), util.createElement(0, {
                            children: [util.createElement("span", {
                                style: "border-width: 2px 2px 8px 2px; border-radius: 6px 6px 0 0; width: 12px; margin: -8px -6px; box-shadow: 0 0 4px #000"
                            })],
                            style: "width: 20px; height: 20px; left: auto; right: -12px; top: -22px; cursor: pointer",
                            onclick: function () {
                                if (C) C = 0, p(!1), O.selected = !0;
                                else {
                                    for (var a = 0; a < q.length; a++)
                                        if (Math.round(D / q[a]) == E || Math.round(E * q[a]) == D) {
                                            C = q[a];
                                            ca.selectedIndex = a;
                                            break
                                        }
                                    a == q.length && (C = D / E, p(!0), R.selected = !0)
                                }
                                e();
                                C && b()
                            }
                        })
                    ];
                z.ng = util.createElement(0, {
                    id: "g",
                    children: H
                });
                z.je = util.createElement(0, {
                    id: "s",
                    children: [util.createElement(0), util.createElement(0), util.createElement(0), util.createElement(0), z.ng],
                    ontouchstart: function (ev) {
                        if (!P) return w.od.ontouchstart(ev)
                    },
                    onmousedown: function (ev) {
                        if (!P) return w.od.onmousedown(ev)
                    },
                    onwheel: w.od.onwheel,
                    onmousewheel: w.od.onmousewheel,
                    parent: doc.body
                });
                for (var P = !1, v = 0; 4 > v; v++)(function (a) {
                    function c(f) {
                        var h = 3 == a ? (N - (N > 780 * G ? 540 * G : 0)) / G : Infinity;
                        P = VisualField.paused = !0;
                        var g = f[d];
                        g > h && (g = (g - h) / e * G + h);
                        var k = 2 > a ? E : D,
                            l = 2 > a ? z.Pg : z.Qg,
                            r = 0;
                        A = 2 > a;
                        H[a].firstChild.style.ie = "#f7a715";
                        return {
                            Xg: function (a) {
                                a = a[d];
                                a > h && (a = (a - h) / e * G + h);
                                a = a - g;
                                a < r && (a += 1 / e);
                                r = a;
                                l.value = k + a * e;
                                b();
                                return !1
                            },
                            Yg: function () {
                                H[a].firstChild.style.ie = "";
                                P = VisualField.paused = !1
                            }
                        }
                    }
                    var d = "client" + (2 > a ? "Y" : "X"),
                        e = (a % 2 ? 2 : -2) * G;
                    Ma(H[a], c);
                    3 ==
                        a && Ma(ka, c)
                })(v);
                var Q, ra;
                z.Nj = function (a) {
                    "boolean" == typeof a ? (z.Lj[ra] = a, util.tf("cutter-" + ra, a ? "1" : "0")) : (ra = a, a = z.Lj[ra]);
                    a != Q && (Q = a, z.mi.checked = a, z.je.style.display = a ? "block" : "", L.style.display = a ? "inline" : "", L.childNodes[2].data = a ? u.Nb + ": " : u.Ob + ".", fa.style.display = a ? "inline" : "none", a ? f() : l(!1), c())
                };
                for (var L = util.createElement("label", {
                        style: "",
                        children: [z.mi = util.createElement("input", {
                            type: "checkbox",
                            onclick: function () {
                                z.Nj(this.checked)
                            }
                        }), " ", u.Ob + "."]
                    }), ca = util.createElement("select", {
                        onchange: function () {
                            p(!1);
                            C = q[this.selectedIndex] ||
                                0;
                            e();
                            b()
                        }
                    }), v = 0; v < Aa.length; v += 2) util.createElement("option", {
                    textContent: Aa[v] == Ya ? u.Rc : Aa[v] + ":" + Aa[v + 1],
                    parent: ca
                });
                var O = util.createElement("option", {
                        textContent: u.Rb,
                        selected: !0,
                        parent: ca
                    }),
                    da = !1,
                    R = util.createElement("option", {
                        textContent: "\ufffd"
                    });
                "x" == y[2] ? e() : "l" == y[2] ? (p(!0), R.selected = !0) : ca.selectedIndex = y[2];
                var fa = util.createElement("span", {
                        style: "display: none",
                        children: [util.createElement("span", {
                            style: "white-space: nowrap",
                            children: [z.Qg, "px \u00d7 ", z.Pg, "px,"]
                        }), util.createElement("wbr"), util.createElement("span", {
                            style: "white-space: nowrap",
                            children: [" " + u.Qb + ": ", ca, "."]
                        })]
                    }),
                    v =
                    util.createElement(0, {
                        style: "margin-top: 0.5em",
                        children: [u.Qc, ":", util.createElement(0, {
                            style: "-webkit-columns: 2; -moz-columns: 2; columns: 2",
                            children: [z.vn = util.createElement("input", {
                                className: "tt",
                                style: (z.$j ? "" : "display: none;") + "width: 90%; font-size: 80%",
                                placeholder: "Text..."
                            }), util.createElement("label", {
                                style: z.$j ? "" : "display: none;",
                                children: [z.un = util.createElement("input", {
                                    type: "checkbox",
                                    checked: !0
                                }), " logo,"]
                            }), util.createElement("label", {
                                children: [z.Rk = util.createElement("input", {
                                    type: "checkbox",
                                    checked: !0
                                }), " " + u.Sb + ","]
                            }), util.createElement("label", {
                                children: [z.pj = util.createElement("input", {
                                        type: "checkbox",
                                        checked: !0
                                    }),
                                    " " + u.ea + ","
                                ]
                            }), util.createElement("label", {
                                children: [z.Sk = util.createElement("input", {
                                    type: "checkbox",
                                    checked: !0
                                }), " " + u.ha + ","]
                            }), util.createElement("label", {
                                children: [z.tn = util.createElement("input", {
                                    type: "checkbox",
                                    checked: !k.Af
                                }), " " + u.Tb + "."]
                            })]
                        })]
                    });
                z.ci();
                clearTimeout(M);
                return util.createElement(0, {
                    style: "margin-bottom: 0.5em",
                    children: [L, fa, v]
                })
            },
            zm: function (a) {
                return util.createElement(0, {
                    style: "margin-bottom: 0.666em",
                    children: [u.ia, ":", util.createElement(0, {
                        style: "-webkit-columns: 2; -moz-columns: 2; columns: 2",
                        children: [util.createElement("label", {
                            children: [z.yh = util.createElement("input", {
                                type: "checkbox",
                                onclick: a,
                                checked: !0
                            }), " " + u.Sb + ","]
                        }), util.createElement("label", {
                            children: [z.tj = util.createElement("input", {
                                type: "checkbox",
                                onclick: a,
                                checked: !0
                            }), " " + u.ea + ","]
                        }), util.createElement("label", {
                            children: [z.Rg = util.createElement("input", {
                                type: "checkbox",
                                onclick: a,
                                checked: !0
                            }), " " + u.ha, ","]
                        }), util.createElement("label", {
                            children: [z.Sg = util.createElement("input", {
                                type: "checkbox",
                                onclick: a,
                                checked: "off" != k.themeType
                            }), " " + u.Ub + "."]
                        })]
                    })]
                })
            },
            xg: function () {
                z.uj && (z.uj.textContent = u.aa)
            }
        },
        v = {
            kg: 0,
            Zj: 1,
            Ze: function (a, b) {
                var c = doc.createElementNS("http://www.w3.org/2000/svg", a);
                if (!b) return c;
                for (var d in b) c.setAttribute(d,
                    b[d]);
                return c
            },
            ii: function () {
                return cb.ii.apply(cb, arguments)
            },
            Rd: function (a, b, c) {
                SunCalc.pm();
                v.Nd = [];
                for (var d in v.Gd.Nd) {
                    var f = {};
                    f.alt = parseFloat(d);
                    f.top = v.color(v.Gd.Nd[d].top);
                    f.bottom = v.color(v.Gd.Nd[d].bottom);
                    f.Fe = v.Gd.Nd[d].Fe;
                    f.Ee = v.Gd.Nd[d].Ee;
                    v.Nd.push(f)
                }
                v.Nd.sort(function (a, b) {
                    return b.alt - a.alt
                });
                v.Nd.unshift({
                    alt: 180,
                    top: v.Nd[0].top,
                    bottom: v.Nd[0].bottom,
                    Fe: v.Nd[0].Fe,
                    Ee: v.Nd[0].Ee
                });
                v.Nd.reverse();
                v.Nd.unshift({
                    alt: -180,
                    top: v.Nd[0].top,
                    bottom: v.Nd[0].bottom,
                    Fe: v.Nd[0].Fe,
                    Ee: v.Nd[0].Ee
                });
                v.Wk = a;
                v.cl = b;
                v.time = c;
                v.B = v.getTimezoneOffset(v.time);
                Date.Gh(v.B);
                var k = util.getElementById("astro-date");
                if (k) {
                    var e = util.getElementById("astro-date-next"),
                        n = util.getElementById("astro-date-prev");
                    k.onchange = function () {
                        var a = new Date(1E3 * k.value);
                        v.Gm(a.getFullYear(), a.getMonth(), a.getDate());
                        e.className = e.className.replace(/ inactive/, "") + (k.selectedIndex >= k.options.length - 1 ? " inactive" : "");
                        n.className = n.className.replace(/ inactive/, "") + (0 >= k.selectedIndex ? " inactive" : "")
                    };
                    util.getElementById("astro-date-next").onclick = function () {
                        k.selectedIndex = Math.min(k.selectedIndex +
                            1, k.options.length - 1);
                        k.onchange();
                        k.Qh && k.Qh();
                        return !1
                    };
                    util.getElementById("astro-date-prev").onclick = function () {
                        k.selectedIndex = Math.max(k.selectedIndex - 1, 0);
                        k.onchange();
                        k.Qh && k.Qh();
                        return !1
                    }
                }
                v.qj();
                var l = (util.getElementById("astro-sun") || {}).offsetWidth + "/" + (util.getElementById("astro-moon") || {}).offsetWidth;
                win.addEventListener("resize", v.Jj = function () {
                    var a = (util.getElementById("astro-sun") || {}).offsetWidth + "/" + (util.getElementById("astro-moon") || {}).offsetWidth;
                    l !== a && (l = a, v.qj())
                }, !1)
            },
            Xm: function () {
                v.Jj && (win.removeEventListener("resize", v.Jj, !1), delete v.Jj)
            },
            qj: function () {
                v.jk(v.kg,
                    v.Wk, v.cl);
                v.jk(v.Zj, v.Wk, v.cl);
                v.wl()
            },
            Zf: "nightEnd nauticalDawn dawn rise set dusk nauticalDusk night".split(" "),
            table: function (a, b, c, d) {
                var f = 0,
                    g = null,
                    e = util.getElementById("astro-" + ["sun", "moon"][a] + "-table");
                if (e) {
                    for (; e.rows[1];) e.deleteRow(1);
                    if (a === v.kg)
                        for (v.Ck || (v.Ck = e.rows[0].cells[0].innerHTML), e.rows[0].cells[0].innerHTML = v.Ck + " " + v.kj(v.time), c = new Date(+v.time), c.setLocalHours(0), c.setLocalMinutes(0), c.setLocalSeconds(0), c.setLocalMilliseconds(0), d = new Date(+c + 864E5), a = v.Gd.Zf[0], f = 0; 9 > f; f++) {
                            var k =
                                8 === f ? d : b[v.Zf[f]]; + k ? (g = e.insertRow(-1), g.insertCell(-1).innerHTML = '<span style="display: inline-block; width: 0.75em; height: 0.75em; border: 1px solid #BBB; border-color: rgba(0,0,0,0.166); background: ' + (a.Zo || a.color) + '"></span> ' + a.label(), g.insertCell(-1).innerHTML = v.bf(c) + " " + u.ma + " " + v.bf(k), g.insertCell(-1).innerHTML = v.no(k - c), c = k, 8 > f && (a = v.Gd.Zf[f + 1] || v.Gd.Zf[7 - f])) : 5 > f && (a = v.Gd.Zf[(f + 1) % 5])
                        } else
                            for (b = new Date(+v.time), b.setLocalHours(12, 0, 0, 0), f = 0; f < 5; f++) {
                                g = e.insertRow(-1);
                                g.insertCell(-1).innerHTML =
                                    '<span style="display: inline-block; width: 0.75em; height: 0.75em; border: 1px solid #000; border-radius: 100%; background: #000; overflow: hidden"><span style="display: block; width: 100%; height: 100%; margin-left: ' + (100 - 200 * SunCalc.vh(b).zi) + '%; background: #FFF"></span></span> ' + v.kj(b);
                                a = v.getTimezoneOffset(b);
                                k = v.ii(b, c, d, a / 60);
                                k.set && k.set.Gh(a);
                                k.rise && k.rise.Gh(a);
                                if (k.alwaysUp || k.alwaysDown) g.insertCell(-1).innerHTML = "&mdash;", g.insertCell(-1).innerHTML = "&mdash;", g.insertCell(-1).innerHTML =
                                    "&mdash;"; + k.rise === +k.set ? (g.insertCell(-1).innerHTML = "&mdash;", g.insertCell(-1).innerHTML = "&mdash;", g.insertCell(-1).innerHTML = "&mdash;") : +k.rise > +k.set ? (g.insertCell(-1).innerHTML = "&mdash;", g.insertCell(-1).innerHTML = v.bf(k.set), g.insertCell(-1).innerHTML = v.bf(k.rise)) : (g.insertCell(-1).innerHTML = v.bf(k.rise), g.insertCell(-1).innerHTML = v.bf(k.set), g.insertCell(-1).innerHTML = "&mdash;");
                                a = b.setLocalHours(0);
                                b.setLocalHours(23, 59, 59);
                                b.setLocalMinutes(59);
                                b.setLocalSeconds(59);
                                k = +b;
                                g.insertCell(-1).innerHTML =
                                    v.lj(SunCalc.vh(a).sh) + " " + u.ma + " " + v.lj(SunCalc.vh(k).sh);
                                b.setLocalHours(36)
                            }
                }
            },
            no: function (a) {
                a = Math.round(a / 6E4);
                return 60 < a ? Math.floor(a / 60) + " " + u.Yb + " " + a % 60 + " " + u.la : a + " " + u.la
            },
            Ai: [],
            xj: function () {
                clearTimeout(v.wj);
                v.bk = 300;
                return !1
            },
            fl: function (a) {
                clearTimeout(v.wj);
                var b = this.getBoundingClientRect();
                a = Math.min(Math.max((a.clientX - b.left) / (b.right - b.left), 0), 1);
                v.Qi(a)
            },
            vj: function () {
                clearTimeout(v.wj);
                v.wj = setTimeout(function () {
                    v.bk = 500;
                    v.wl(!0)
                }, 100);
                return !1
            },
            wl: function (a) {
                var b = new Date(+v.time);
                b.setLocalHours(0, 0, 0, 0);
                b = (v.time - b) / 864E5;
                a ? v.Qi(b) : v.setPosition(b)
            },
            Qi: function (a) {
                v.lo = a;
                if (!v.Cj) {
                    var b = +new Date;
                    v.Cj = setInterval(function () {
                        var a = +new Date;
                        step = (a - b) / v.bk;
                        b = a;
                        a = v.lo - v.Bk;
                        Math.abs(a) < step ? (clearInterval(v.Cj), v.Cj = null) : a = Math.min(Math.max(a, -step), step);
                        v.setPosition(v.Bk + a)
                    }, 13)
                }
            },
            setPosition: function (a) {
                v.Bk = a;
                for (var b = 0; b < v.Ai.length; b++) v.Ai[b](a)
            },
            Gm: function (a, b, c) {
                v.time.setFullYear(a, b, c);
                v.B = v.getTimezoneOffset(v.time);
                Date.Gh(v.B);
                v.Ai.length = 0;
                v.qj()
            },
            io: function (a) {
                if (!a.um) {
                    a.um = !0;
                    a.addEventListener("mousemove", v.fl, !1);
                    a.addEventListener("mouseout", v.vj, !1);
                    a.addEventListener("mouseover", v.xj, !1);
                    var b = function () {
                            b = null;
                            a.removeEventListener("mousemove", v.fl);
                            a.removeEventListener("mouseout", v.vj);
                            a.removeEventListener("mouseover", v.xj)
                        },
                        c = util.createElement(0),
                        d = util.createElement(0),
                        f = !1;
                    c.appendChild(d);
                    c.style.cssText = "position: absolute; left: 0; right: 0; top: 0; bottom: 0; overflow: auto; z-index: 1000";
                    d.style.cssText = "width: 200%; height: 100%; background: rgba(0,0,0,0)";
                    c.onscroll = function () {
                        f &&
                            v.Qi(Math.min(Math.max((a.offsetWidth - this.scrollLeft) / a.offsetWidth, 0), 1))
                    };
                    a.appendChild(c);
                    c.scrollHeight - c.offsetHeight && a.removeChild(c);
                    a.addEventListener("touchstart", function (d) {
                        b && b();
                        c.scrollLeft = a.getBoundingClientRect().right - d.touches[0].clientX;
                        f = !0;
                        return v.xj.call(this, d.touches[0])
                    }, !1);
                    d = function () {
                        f = !1;
                        return v.vj.apply(this, arguments)
                    };
                    a.addEventListener("touchend", d, !1);
                    a.addEventListener("touchcancel", d, !1)
                }
            },
            jk: function (a, b, c) {
                function d(a) {
                    var b = new Date(+v.time);
                    b.setLocalHours(0);
                    b.setLocalMinutes(1440 * a);
                    var c = Math.floor(n * a);
                    a = w[c];
                    var d = x[c].altitude / Math.PI * 180;
                    v.rg(f + "-time", v.bf(b));
                    v.rg(f + "-altitude", (0 !== a.altitude ? 0 > a.altitude ? "&minus;" : "+" : "") + Math.abs(Math.round(a.altitude / Math.PI * 180)) + " \u00b0");
                    v.rg(f + "-azimuth", '<span style="' + "-webkit-#-moz-#-ms-#-o-##".replace(/#/g, "transform: rotate(" + a.azimuth.toFixed(3) + "rad);") + '; display: inline-block; vertical-align: middle; width: 1em; text-align: center">&darr;</span>' + K[(a.azimuth / Math.PI * 4 + 4.5) % 8 | 0]);
                    v.rg(f + "-fraction", v.lj(a.sh));
                    v.rg(f + "-phase", v.Gd.Zf[-.833 > d ? -6 > d ? -12 > d ? -18 > d ? 0 : 1 : 2 : 3 : 4].label());
                    G.style.left = c + "px";
                    for (c = 0; c < v.Nd.length && !(d < v.Nd[c].alt); c++);
                    c >= v.Nd.length || (b = v.Nd[c - 1], c = v.Nd[c], d = (d - b.alt) / (c.alt - b.alt), P.style.opacity = Math.min(Math.max(v.ik(b.Fe, c.Fe, d), 0), 1), Q.style.opacity = Math.min(Math.max(v.ik(b.Ee, c.Ee, d), 0), 1), D.setAttribute("stop-color", v.wk(b.top, c.top, d)), E.setAttribute("stop-color", v.wk(b.bottom, c.bottom, d)), G.style.top = l / 2 - a.altitude / Math.PI * l + "px")
                }
                var f = "astro-" + ["sun", "moon"][a],
                    k = util.getElementById(f);
                if (k) {
                    for (var e =
                            0; k.childNodes[e];) k.childNodes[e].onscroll ? e++ : k.removeChild(k.childNodes[e]);
                    k.style.position = "relative";
                    k.style.webkitUserSelect = "none";
                    k.style.MozUserSelect = "none";
                    k.style.msUserSelect = "none";
                    k.style.userSelect = "none";
                    var n = k.offsetWidth,
                        l = k.offsetHeight,
                        p = v.Ze("svg", {
                            width: "100%",
                            height: "100%"
                        });
                    k.addEventListener ? v.io(k) : k.style.display = "none";
                    var q = new Date(+v.time);
                    q.setLocalHours(0);
                    q.setLocalMinutes(0);
                    q.setLocalSeconds(0);
                    q.setLocalMilliseconds(0);
                    v.rg(f + "-date", v.kj(q));
                    v.rg(f + "-timezone",
                        "UTC+" + (v.B / 60 + 100 + "").slice(1) + ":" + (v.B % 60 + 100 + "").slice(1));
                    for (var w = [], x = a === v.kg ? w : [], y = -1, A = 0, z = [], e = 0; e <= n; e++) {
                        q.setLocalHours(0);
                        q.setLocalMinutes(e / n * 1440);
                        var C = a === v.kg ? SunCalc.Ok(q, b, c) : SunCalc.ln(q, b, c);
                        w.push(C);
                        a !== v.kg && (x.push(SunCalc.Ok(q, b, c)), C.sh = SunCalc.vh(q).sh);
                        C = x[e].altitude / Math.PI * 180;
                        C = e !== n ? -.833 > C ? -6 > C ? -12 > C ? -18 > C ? 0 : 1 : 2 : 3 : 4 : -1;
                        C !== y && (-1 < y && z.push({
                            zi: v.Gd.Zf[y],
                            start: A,
                            length: e - A
                        }), A = e, y = C)
                    }
                    q = [];
                    for (e = 0; e < w.length; e++) e && .1 < Math.abs(w[e].altitude - w[e - 1].altitude) && w[e + 1] &&
                        (w[e].altitude = (w[e - 1].altitude + w[e + 1].altitude) / 2), q.push(e + " " + (l / 2 - w[e].altitude / Math.PI * l).toFixed(3));
                    for (e = 0; e < z.length; e++) p.appendChild(v.Ze("rect", {
                        x: z[e].start,
                        y: "50%",
                        width: z[e].length,
                        height: "50%",
                        fill: z[e].zi.color
                    }));
                    var e = v.Ze("path", {
                            d: "M" + q.join("L"),
                            stroke: "#111",
                            "stroke-width": "1px",
                            fill: "none",
                            "stroke-dasharray": "1 6"
                        }),
                        z = v.Ze("rect", {
                            width: "100%",
                            height: "50%",
                            fill: "url(#astro-back)"
                        }),
                        q = v.Ze("linearGradient", {
                            id: "astro-back",
                            y1: "0%",
                            y2: "100%",
                            x1: "50%",
                            x2: "50%"
                        }),
                        D = v.Ze("stop", {
                            "stop-color": "#0072B5",
                            offset: 0
                        }),
                        E = v.Ze("stop", {
                            "stop-color": "#B4D4E9",
                            offset: 1
                        });
                    q.appendChild(D);
                    q.appendChild(E);
                    p.appendChild(q);
                    p.appendChild(z);
                    p.appendChild(e);
                    e = e.cloneNode(!0);
                    e.setAttribute("stroke", "#EEE");
                    e.setAttribute("stroke-dashoffset", "3.5");
                    p.appendChild(e);
                    e = v.Ze("path", {
                        d: "M0 " + l / 2 + " h" + n,
                        stroke: "rgba(0,0,0,0.25)",
                        "stroke-width": "1px",
                        fill: "none"
                    });
                    p.appendChild(e);
                    e = new Date(+v.time);
                    e.setLocalHours(12);
                    e.setLocalMinutes(0);
                    e.setLocalSeconds(0);
                    e.setLocalMilliseconds(0);
                    var z = v.getTimezoneOffset(e),
                        z = a === v.kg ? SunCalc.qn(e, b, c) : v.ii(e, b, c, z / 60),
                        H;
                    for (H in v.Gd.Sj) z[H] && !isNaN(z[H]) && (y = (60 * z[H].getLocalHours() + z[H].getLocalMinutes()) / 1440 * n, e = v.Ze("path", {
                        d: "M" + y + " " + (l / 2 - 5) + " v 10",
                        stroke: "#111",
                        "stroke-width": "2px",
                        fill: "none"
                    }), q = v.Ze("text", {
                        x: y,
                        y: l / 2 + 20,
                        "font-family": "Helvetica Neue, Arial",
                        "font-size": "14px",
                        fill: "#666",
                        "text-anchor": "middle",
                        "alignment-baseline": "central"
                    }), y = v.Ze("text", {
                        x: y,
                        y: l / 2 + 40,
                        "font-family": "Helvetica Neue, Arial",
                        "font-weight": "bold",
                        "font-size": "16px",
                        fill: "#666",
                        "text-anchor": "middle",
                        "alignment-baseline": "central"
                    }), q.appendChild(doc.createTextNode(v.Gd.Sj[H]())), y.appendChild(doc.createTextNode(v.bf(z[H]))), p.appendChild(e), p.appendChild(q), p.appendChild(y));
                    v.table(a, z, b, c);
                    var P = util.createElement(0);
                    P.style.cssText = "position: absolute; width: 100%; height: 50%; left: 0; top: 0; opacity: 0; background: url(" + v.Gd.Uh + v.Gd.Fe + ")";
                    var Q = P.cloneNode(!0);
                    Q.style.background = "url(" + v.Gd.Uh + v.Gd.Ee + ")";
                    k.appendChild(P);
                    k.appendChild(Q);
                    var G = util.createElement("img");
                    G.style.cssText = "position: absolute; margin: -16px;";
                    a === v.kg ? G.src = v.Gd.Uh + v.Gd.sun : a === v.Zj && (a = v.Gd.dl.length, G.src = v.Gd.Uh + v.Gd.dl[(SunCalc.vh(new Date(+v.time)).zi * a + a - .5) % a | 0]);
                    k.appendChild(G);
                    var K = [u.Aa, u.Ba, u.za, u.Ea, u.Da, u.Fa, u.Ga, u.Ca];
                    v.Ai.push(d);
                    k.appendChild(p)
                }
            },
            bf: function (a) {
                return "string" === typeof a ? a : a ? a.gn(v.Gd.Wo) : "&mdash;"
            },
            kj: function (a) {
                return a ? a.fn(u.C) : "&mdash;"
            },
            lj: function (a) {
                return Math.round(100 * a) + " %"
            },
            rg: function (a, b) {
                (util.getElementById(a) || {}).innerHTML = b
            },
            color: function (a) {
                var b = null;
                return /^\#[0-9A-F]{3}$/i.test(a) ? (b = parseInt(a.substr(1),
                    16), [17 * (b / 16 / 16 | 0), 17 * (b / 16 % 16 | 0), b % 16 * 17]) : /^\#[0-9A-F]{6}$/i.test(a) ? (b = parseInt(a.substr(1), 16), [b / 256 / 256 | 0, b / 256 % 256 | 0, b % 256]) : /^rgb?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(a) ? (a = a.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i), [parseInt(a[1] || 10), parseInt(a[2] || 10), parseInt(a[3] || 10)]) : [0, 0, 0]
            },
            ik: function (a, b, c) {
                return a * (1 - c) + b * c
            },
            wk: function (a, b, c) {
                return "rgb(" + Math.floor(a[0] * (1 - c) + b[0] * c) + ", " + Math.floor(a[1] * (1 - c) + b[1] * c) + ", " + Math.floor(a[2] * (1 - c) + b[2] * c) + ")"
            },
            getTimezoneOffset: function (a) {
                var b =
                    v.Gd.B,
                    c = 0,
                    d = 0,
                    f = 0,
                    g = 0,
                    e = a.getFullYear(),
                    h = 5 * e / 4 | 0;
                if (0 === b.fj) return b.hk;
                1 === b.fj ? (c = 31 - (4 + h) % 7, d = 31 - (1 + h) % 7, f = 3, g = 10) : 2 === b.fj && (2007 > e ? (c = 1 + (2 + 6 * e - (e / 4 | 0)) % 7, d = 31 - (1 + h) % 7, f = 4, g = 10) : (c = 14 - (1 + h) % 7, d = 7 - (1 + h) % 7, f = 3, g = 11));
                d = new Date(e, g - 1, d, 3, 0, 0);
                b = b.hk;
                a = +a;
                a > +new Date(e, f - 1, c, 2, 0, 0) && a < +d && (b += 60);
                return b
            }
        };
    Date.prototype.pa = (new Date).getTimezoneOffset();
    Date.Gh = function (a) {
        return this.prototype.pa = a
    };
    Date.getTimezoneOffset = function () {
        return this.prototype.pa
    };
    Date.prototype.Gh = function (a) {
        return this.pa =
            a
    };
    Date.prototype.getTimezoneOffset = function () {
        return this.pa
    };
    Date.prototype.gn = function (a) {
        return (this.getLocalHours() + 100 + "").slice(1) + ":" + (this.getLocalMinutes() + 100 + "").slice(1) + (a ? ":" + (this.getLocalSeconds() + 100 + "").slice(1) : "")
    };
    Date.prototype.fn = function (a) {
        var b = this;
        return a.replace(/(\\?)(d+|M+|y+|H+|h+|m+|s+|t+)/g, function (a, d, f) {
            d && (d = a.slice(0, 2), f = a.slice(2));
            var g = f.length;
            switch (f.charAt(0)) {
                case "d":
                    f = 2 >= g ? b.getLocalDate().toString().fe(g, "0") : 3 === g ? (u.Od || [])[b.getLocalDay()] ||
                        u.D[b.getLocalDay()].slice(0, 2) : u.D[b.getLocalDay()];
                    break;
                case "M":
                    a = b.getLocalMonth();
                    f = 2 >= g ? (a + 1).toString().fe(g, "0") : 3 === g ? u.U[a] || u.I[a].slice(0, 3) : u.I[a];
                    break;
                case "y":
                    a = b.getLocalFullYear(g);
                    2 >= g && (a %= 100);
                    f = a.toString().fe(g, "0");
                    break;
                case "H":
                    f = b.getLocalHours().toString().fe(g, "0");
                    break;
                case "h":
                    f = (b.getLocalHours() % 12 || 12).toString().fe(g, "0");
                    break;
                case "t":
                    f = (12 > b.getLocalHours() ? u.Il : u.Jl).slice(0, g);
                    break;
                case "m":
                    f = b.getLocalMinutes().toString().fe(g, "0");
                    break;
                case "s":
                    f = b.getLocalSeconds().toString().fe(g,
                        "0")
            }
            return d + f
        }).replace(/\\(.)/g, "$1")
    };
    "Milliseconds Seconds Minutes Hours Date Month FullYear Year Day".split(" ").forEach(function () {
        return function (a) {
            Date.prototype["getLocal" + a] = function () {
                return (new Date(+this + 6E4 * this.pa))["getUTC" + a]()
            };
            return Date.prototype["setLocal" + a] = function (b) {
                var c, d;
                d = 6E4 * this.pa;
                c = new Date(+this + d);
                c["setUTC" + a](b);
                b = c.getTime() - d;
                this.setTime(b);
                return b
            }
        }
    }(this));
    v.Gd = {
        Uh: za + "images/astro/",
        sun: "slunce.png",
        dl: "0.png 1.png 2.png 3.png 4.png 5.png 6.png 7.png 8.png 9.png 10.png 11.png 12.png 13.png 14.png 15.png 16.png 17.png 18.png 19.png 20.png 21.png 22.png 23.png 24.png 25.png 26.png 27.png 28.png 29.png 30.png".split(" "),
        Fe: "hvezdy.png",
        Ee: "vesmir.png",
        Nd: {
            3: {
                top: "#1288CC",
                bottom: "#B4D4E9",
                Fe: 0,
                Ee: 0
            },
            "-3": {
                top: "#0072B5",
                bottom: "#67A9D3",
                Fe: 0,
                Ee: 0
            },
            "-9": {
                top: "#00395A",
                bottom: "#3481B2",
                Fe: .5,
                Ee: 0
            },
            "-15": {
                top: "#00395A",
                bottom: "#0072B5",
                Fe: 1,
                Ee: .2
            },
            "-21": {
                top: "#000000",
                bottom: "#000000",
                Fe: 1,
                Ee: .5
            },
            "-60": {
                top: "#000000",
                bottom: "#000000",
                Fe: 1,
                Ee: 1
            }
        },
        Sj: {
            rise: function () {
                return u.xa
            },
            set: function () {
                return u.ya
            }
        },
        Zf: [{
            label: function () {
                return u.wa
            },
            color: "#aaaaaa"
        }, {
            label: function () {
                return u.sa
            },
            color: "#cccccc"
        }, {
            label: function () {
                return u.va
            },
            color: "#d0dce5"
        }, {
            label: function () {
                return u.ta
            },
            color: "#d7eaf6"
        }, {
            label: function () {
                return u.ua
            },
            color: "#fdedd0"
        }]
    };
    (function () {
        function a(a) {
            return new Date(864E5 * (a + .5 - 2440588))
        }

        function b(a, b) {
            return atan2(sin(a) * cos(y) - tan(b) * sin(y), cos(a))
        }

        function c(a, b) {
            return asin(sin(b) * cos(y) + cos(b) * sin(y) * sin(a))
        }

        function d(a, b, c) {
            return atan2(sin(a), cos(a) * sin(b) - tan(c) * cos(b))
        }

        function f(a, b, c) {
            return asin(sin(b) * sin(c) + cos(b) * cos(c) * cos(a))
        }

        function h(a) {
            var b = x * (1.9148 * sin(a) + .02 * sin(2 * a) + 3E-4 * sin(3 * a));
            return a + b + 102.9372 * x + PI
        }

        function e(a) {
            a = h(x * (357.5291 + .98560028 *
                a));
            return {
                Ge: c(a, 0),
                Nf: b(a, 0)
            }
        }

        function k(a) {
            var d = x * (134.963 + 13.064993 * a),
                e = x * (93.272 + 13.22935 * a);
            a = x * (218.316 + 13.176396 * a) + 6.289 * x * sin(d);
            e = 5.128 * x * sin(e);
            d = 385001 - 20905 * cos(d);
            return {
                Nf: b(a, e),
                Ge: c(a, e),
                Dk: d
            }
        }
        var PI = Math.PI,
            sin = Math.sin,
            cos = Math.cos,
            tan = Math.tan,
            asin = Math.asin,
            atan2 = Math.atan2,
            acos = Math.acos,
            x = PI / 180,
            y = 23.4397 * x,
            z = {
                Ok: function (a, b, c) {
                    c = x * -c;
                    b = x * b;
                    var g = a.valueOf() / 864E5 - .5 + 2440588 - 2451545;
                    a = e(g);
                    c = x * (280.16 + 360.9856235 * g) - c - a.Nf;
                    return {
                        azimuth: d(c, b, a.Ge),
                        altitude: f(c, b, a.Ge)
                    }
                }
            },
            A = z.Sj = [
                [-.833, "sunrise", "sunset"],
                [-.3, "sunriseEnd",
                    "sunsetStart"
                ],
                [-6, "dawn", "dusk"],
                [-12, "nauticalDawn", "nauticalDusk"],
                [-18, "nightEnd", "night"],
                [6, "goldenHourEnd", "goldenHour"]
            ];
        z.pm = function () {
            A.push([-.833, "rise", "set"])
        };
        z.qn = function (b, d, e) {
            e = x * -e;
            d = x * d;
            b = Math.round(b.valueOf() / 864E5 - .5 + 2440588 - 2451545 - 9E-4 - e / (2 * PI));
            var f = 9E-4 + (0 + e) / (2 * PI) + b,
                k = x * (357.5291 + .98560028 * f),
                q = h(k),
                u = c(q, 0),
                f = 2451545 + f + .0053 * sin(k) - .0069 * sin(2 * q),
                v, y, z, B, C, D = {
                    Yo: a(f),
                    To: a(f - .5)
                };
            v = 0;
            for (y = A.length; v < y; v += 1) {
                z = A[v];
                B = e;
                C = b;
                var E = k,
                    J = q,
                    G;
                G = d;
                var K = u;
                G = acos((sin(z[0] * x) - sin(G) * sin(K)) /
                    (cos(G) * cos(K)));
                B = 2451545 + (9E-4 + (G + B) / (2 * PI) + C) + .0053 * sin(E) - .0069 * sin(2 * J);
                C = f - (B - f);
                D[z[1]] = a(C);
                D[z[2]] = a(B)
            }
            return D
        };
        z.ln = function (a, b, c) {
            c = x * -c;
            b = x * b;
            var e = a.valueOf() / 864E5 - .5 + 2440588 - 2451545;
            a = k(e);
            c = x * (280.16 + 360.9856235 * e) - c - a.Nf;
            e = f(c, b, a.Ge);
            e += .017 * x / tan(e + 10.26 * x / (e + 5.1 * x));
            return {
                azimuth: d(c, b, a.Ge),
                altitude: e,
                Ro: a.Dk
            }
        };
        z.vh = function (a) {
            var b = a.valueOf() / 864E5 - .5 + 2440588 - 2451545;
            a = e(b);
            var b = k(b),
                c = acos(sin(a.Ge) * sin(b.Ge) + cos(a.Ge) * cos(b.Ge) * cos(a.Nf - b.Nf)),
                c = atan2(149598E3 * sin(c), b.Dk - 149598E3 * cos(c));
            a = atan2(cos(a.Ge) *
                sin(a.Nf - b.Nf), sin(a.Ge) * cos(b.Ge) - cos(a.Ge) * sin(b.Ge) * cos(a.Nf - b.Nf));
            return {
                sh: (1 + cos(c)) / 2,
                zi: .5 + .5 * c * (0 > a ? -1 : 1) / Math.PI,
                bh: a
            }
        };
        win.SunCalc = z
    })();
    var cb = function () {
        function range360(a) {
            return a - 360 * Math.floor(a / 360)
        }

        function sinJD(a) {
            return Math.sin(a * Math.PI / 180)
        }

        function cosJD(a) {
            return Math.cos(a * Math.PI / 180)
        }

        function d(a, b) {
            return 180 / Math.PI * Math.atan(a / b) - 180 * (0 > b)
        }

        function f(e, f, h, k, n, l, p, q) {
            l = range360(98.9818 + .985647352 * (367 * h - Math.floor(7 * (h + Math.floor((k + 9) / 12)) / 4) + Math.floor(275 * k / 9) + n - 730530 + l / 24) + 15 * l + q) / 15;
            h = cosJD(15 * (l - e)) * cosJD(f);
            k = sinJD(f);
            n = h * sinJD(p) - k * cosJD(p);
            e =
                sinJD(15 * (l - e)) * cosJD(f);
            return [d(h * cosJD(p) + k * sinJD(p), Math.sqrt(n * n + e * e)), range360(d(e, n) + 180)]
        }

        function h(f, r, z, A) {
            f = 367 * f - Math.floor(7 * (f + Math.floor((r + 9) / 12)) / 4) + Math.floor(275 * r / 9) + z - 730530 + A / 24 + 2451543.5;
            r = (f - 2451545) / 36525;
            var B = r * r,
                C = B * r,
                D = C * r;
            z = 218.3164477 + 481267.88123421 * r - .0015786 * B + C / 538841 - D / 65194E3;
            A = 297.8501921 + 445267.1114034 * r - .0018819 * B + C / 545868 - D / 113065E3;
            for (var E = 357.5291092 + 35999.0502909 * r - 1.536E-4 * B + C / 2449E4, G = 134.9633964 + 477198.8675055 * r + .0087414 * B + C / 69699 - D / 14712E3, C = 93.272095 + 483202.0175233 * r - .0036539 * B - C /
                    3526E3 + D / 86331E4, D = 119.75 + 131.849 * r, K = 1 - .002516 * r - 7.4E-6 * B, N = K * K, M = 0, B = 0, L = 1, I = 0, I = 0; 60 > I; I++) L = 1, 1 === Math.abs(k[I]) && (L = K), 2 === Math.abs(k[I]) && (L = N), M += p[I] * L * sinJD(range360(e[I] * A + k[I] * E + n[I] * G + l[I] * C)), B += q[I] * L * cosJD(range360(e[I] * A + k[I] * E + n[I] * G + l[I] * C));
            for (var O = 0, I = 0; 60 > I; I++) L = 1, 1 === Math.abs(v[I]) && (L = K), 2 === Math.abs(v[I]) && (L = N), O += y[I] * L * sinJD(range360(u[I] * A + v[I] * E + w[I] * G + x[I] * C));
            M = M + 3958 * sinJD(range360(D)) + 1962 * sinJD(range360(z - C)) + 318 * sinJD(range360(53.09 + 479264.29 * r));
            O = O - 2235 * sinJD(range360(z)) + 382 * sinJD(range360(313.45 + 481266.484 * r)) + 175 * sinJD(range360(D - C)) + 175 * sinJD(range360(D + C)) + 127 * sinJD(range360(z - G)) - 115 *
                sinJD(range360(z + G));
            r = range360(z + M / 1E6);
            z = range360(O / 1E6);
            180 < z && (z = z - 360);
            A = Math.round(385000.56 + B / 1E3);
            E = 23.4393 - 3.563E-9 * (f - 2451543.5);
            f = range360(d(sinJD(r) * cosJD(E) - Math.tan(z * Math.PI / 180) * sinJD(E), cosJD(r))) / 15;
            r = range360(180 / Math.PI * Math.asin(sinJD(z) * cosJD(E) + cosJD(z) * sinJD(E) * sinJD(r)));
            180 < r && (r = r - 360);
            return [f, r, A]
        }
        var e = [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 1, 0, 2, 0, 0, 4, 0, 4, 2, 2, 1, 1, 2, 2, 4, 2, 0, 2, 2, 1, 2, 0, 0, 2, 2, 2, 4, 0, 3, 2, 4, 0, 2, 2, 2, 4, 0, 4, 1, 2, 0, 1, 3, 4, 2, 0, 1, 2, 2],
            k = [0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, -2, 1, 2, -2, 0, 0, -1, 0, 0, 1, -1, 2, 2, 1, -1, 0, 0, -1, 0, 1, 0, 1, 0, 0, -1, 2, 1, 0, 0],
            n = [1, -1, 0, 2, 0, 0, -2, -1, 1, 0, -1, 0, 1, 0, 1, 1, -1, 3, -2, -1, 0, -1, 0, 1, 2, 0, -3, -2, -1, -2, 1, 0, 2, 0, -1, 1, 0, -1, 2, -1, 1, -2, -1, -1, -2, 0, 1, 4, 0, -2, 0, 2, 1, -2, -3, 2, 1, -1, 3, -1],
            l = [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, -2, 2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, -2, 2, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, -2, -2, 0, 0, 0, 0, 0, 0, 0, -2],
            p = [6288774, 1274027, 658314, 213618, -185116, -114332, 58793, 57066, 53322, 45758, -40923, -34720, -30383, 15327, -12528, 10980, 10675, 10034, 8548, -7888, -6766, -5163, 4987, 4036, 3994, 3861, 3665, -2689, -2602, 2390, -2348, 2236, -2120, -2069, 2048, -1773, -1595, 1215, -1110, -892, -810, 759, -713, -700, 691, 596, 549, 537, 520, -487, -399, -381, 351, -340, 330, 327, -323, 299, 294, 0],
            q = [-20905355, -3699111, -2955968, -569925, 48888, -3149, 246158, -152138, -170733, -204586, -129620, 108743, 104755, 10321, 0, 79661, -34782, -23210, -21636, 24208, 30824, -8379, -16675, -12831, -10445, -11650, 14403, -7003, 0, 10056, 6322, -9884, 5751, 0, -4950, 4130, 0, -3958, 0, 3258, 2616, -1897, -2117, 2354, 0, 0, -1423, -1117, -1571, -1739, 0, -4421, 0, 0, 0, 0, 1165, 0, 0, 8752],
            u = [0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 4,
                0, 4, 2, 2, 2, 2, 0, 2, 2, 2, 2, 4, 2, 2, 0, 2, 1, 1, 0, 2, 1, 2, 0, 4, 4, 1, 4, 1, 4, 2
            ],
            v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1, -1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 1, 0, -1, -2, 0, 1, 1, 1, 1, 1, 0, -1, 1, 0, -1, 0, 0, 0, -1, -2],
            w = [0, 1, 1, 0, -1, -1, 0, 2, 1, 2, 0, -2, 1, 0, -1, 0, -1, -1, -1, 0, 0, -1, 0, 1, 1, 0, 0, 3, 0, -1, 1, -2, 0, 2, 1, -2, 3, 2, -3, -1, 0, 0, 1, 0, 1, 1, 0, 0, -2, -1, 1, -2, 2, -2, -1, 1, 1, -1, 0, 0],
            x = [1, 1, -1, -1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, -1, 1, 3, 1, 1, 1, -1, -1, -1, 1, -1, 1, -3, 1, -3, -1, -1, 1, -1, 1, -1, 1, 1, 1, 1, -1, 3, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1],
            y = [5128122,
                280602, 277693, 173237, 55413, 46271, 32573, 17198, 9266, 8822, 8216, 4324, 4200, -3359, 2463, 2211, 2065, -1870, 1828, -1794, -1749, -1565, -1491, -1475, -1410, -1344, -1335, 1107, 1021, 833, 777, 671, 607, 596, 491, -451, 439, 422, 421, -366, -351, 331, 315, 302, -283, -229, 223, 223, -220, -220, -185, 181, -177, 176, 166, -164, 132, -119, 115, 107
            ];
        return {
            ii: function (a, b, c, d) {
                for (var e = a.getLocalFullYear(), k = a.getLocalMonth() + 1, n = a.getLocalDate(), l = 0, p = [], q = [], u = [], v = 0, v = 0; 24 >= v; v++) u[v] = !1;
                var w = h(e, k, n, l - d),
                    w = f(w[0], w[1], e, k, n, l - d, b, c);
                q[0] = w[0];
                u[0] = !0;
                p = 0 < q[0] ? [-2, -2] : [-1, -1];
                l = 24;
                w = h(e, k, n, l - d);
                w = f(w[0], w[1], e, k, n, l - d, b, c);
                q[24] = w[0];
                u[24] = !0;
                for (var x = 0; 2 > x; x++) {
                    for (var y = !1, z = 0, A = 24; 1 < Math.ceil((A - z) / 2);)
                        if (hmid = z + Math.round((A - z) / 2), u[hmid] || (l = hmid, w = h(e, k, n, l - d), w = f(w[0], w[1], e, k, n, l - d, b, c), q[hmid] = w[0], u[hmid] = !0), 0 === x && 0 >= q[z] && 0 <= q[hmid] || 1 === x && 0 <= q[z] && 0 >= q[hmid]) A = hmid, y = !0;
                        else if (0 === x && 0 >= q[hmid] && 0 <= q[A] || 1 === x && 0 <= q[hmid] && 0 >= q[A]) z = hmid, y = !0;
                    else break;
                    if (1 < A - z)
                        for (v = z; v < A; v++)
                            if (y = !1, u[v + 1] || (l = v + 1, w = h(e, k, n, l - d), w = f(w[0], w[1],
                                    e, k, n, l - d, b, c), q[l] = w[0], u[l] = !0), 0 === x && 0 >= q[v] && 0 <= q[v + 1] || 1 === x && 0 <= q[v] && 0 >= q[v + 1]) {
                                z = v;
                                A = v + 1;
                                y = !0;
                                break
                            }
                    y && (v = q[z], y = q[A], l = z + .5, w = h(e, k, n, l - d), w = f(w[0], w[1], e, k, n, l - d, b, c), 0 === x && 0 >= w[0] && (z = l, v = w[0]), 0 === x && 0 < w[0] && (A = l, y = w[0]), 1 === x && 0 >= w[0] && (A = l, y = w[0]), 1 === x && 0 < w[0] && (z = l, v = w[0]), p[x] = z + (A - z) * Math.abs(v) / (Math.abs(v) + Math.abs(y)))
                }
                b = p;
                c = new Date(a);
                a = new Date(a);
                c.setLocalHours(0);
                a.setLocalHours(0);
                c.setLocalMinutes(0);
                a.setLocalMinutes(0);
                c.setLocalMilliseconds(0);
                a.setLocalMilliseconds(0);
                c.setLocalSeconds(3600 *
                    b[0]);
                a.setLocalSeconds(3600 * b[1]);
                return {
                    Vo: -1 < b[0] ? c : void 0,
                    set: -1 < b[1] ? a : void 0
                }
            }
        }
    }()
}(window, document, MapOptions, Math);