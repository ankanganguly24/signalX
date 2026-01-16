import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Slider } from "../../components/ui/Slider";
import { Toggle } from "../../components/ui/Toggle";
import { cn } from "../../utils/cn";
import { ShieldCheck, Zap, Sliders, Users, Target, RefreshCw } from "lucide-react";
import { useState } from "react";

export function SettingsScreen() {
    const [discoveryAggression, setDiscoveryAggression] = useState(85);
    const [deepScan, setDeepScan] = useState(true);
    const [filters, setFilters] = useState({
        priorityCommunities: true,
        personaMatching: true,
        keywordSync: false
    });

    return (
        <div className="space-y-6 pb-4">
            {/* Membership Header - SignalX Elite */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#111111] to-[#1A1A1A] border border-[#333333] shadow-xl overflow-hidden group">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5E81AC]/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 pointer-events-none" />
                
                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-white tracking-wide">SignalX Elite</h3>
                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                        </div>
                        <p className="text-[11px] text-[#A1A1A1] font-medium tracking-wide uppercase">Active Membership</p>
                    </div>
                    <Badge variant="outline" className="bg-[#1A1A1A]/80 backdrop-blur border-[#333333] text-[#EDEDED] gap-1 px-2 py-1">
                        <ShieldCheck className="h-3 w-3 text-[#5E81AC]" />
                        <span className="text-[10px]">Verified Account</span>
                    </Badge>
                </div>
            </div>

            {/* Signal Sensitivity Controls */}
            <div className="space-y-5">
                <div className="flex items-center gap-2 text-[#EDEDED] mb-2">
                    <Sliders className="h-4 w-4 text-[#5E81AC]" />
                    <h4 className="text-sm font-semibold tracking-wide">Signal Sensitivity</h4>
                </div>
                
                {/* Discovery Aggression Slider */}
                <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333333]">
                    <Slider 
                        label="Discovery Aggression"
                        value={discoveryAggression}
                        valueLabel={`${discoveryAggression}% / High`}
                        onChange={setDiscoveryAggression}
                        className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-[#666666] mt-2 font-medium uppercase tracking-wider">
                        <span>Quiet</span>
                        <span>Aggressive</span>
                    </div>
                </div>

                {/* AI Context Depth */}
                <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333333] flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-sm font-medium text-[#EDEDED] flex items-center gap-2">
                            AI Context Deep Scan
                            <Badge variant="outline" className="text-[9px] h-4 px-1.5 border-[#5E81AC]/30 text-[#5E81AC]">PRO</Badge>
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-16 bg-[#333333] rounded-full overflow-hidden">
                                <div className={cn("h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500", deepScan ? "w-full" : "w-1/3")} />
                            </div>
                            <span className="text-[10px] text-[#666666]">{deepScan ? "High Load" : "Low Load"}</span>
                        </div>
                    </div>
                    <Toggle checked={deepScan} onChange={setDeepScan} />
                </div>
            </div>

            {/* Engagement Features */}
            <div className="space-y-3">
                 <h4 className="text-xs font-semibold text-[#666666] uppercase tracking-wider ml-1">Engagement Logic</h4>
                 <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] divide-y divide-[#333333]">
                    <FeatureToggle 
                        icon={Users}
                        label="Priority Community Filters"
                        checked={filters.priorityCommunities}
                        onChange={(v) => setFilters({...filters, priorityCommunities: v})}
                    />
                    <FeatureToggle 
                        icon={Target}
                        label="Persona Matching"
                        checked={filters.personaMatching}
                        onChange={(v) => setFilters({...filters, personaMatching: v})}
                    />
                    <FeatureToggle 
                        icon={RefreshCw}
                        label="Target Keyword Sync"
                        checked={filters.keywordSync}
                        onChange={(v) => setFilters({...filters, keywordSync: v})}
                    />
                 </div>
            </div>

            {/* SignalX Commitment (Trust) */}
            <div className="pt-6 mt-4 border-t border-[#333333]">
                <div className="text-center space-y-4">
                    <div className="space-y-1">
                        <h5 className="text-sm font-bold text-[#EDEDED]">No auto-posting. No bots.</h5>
                        <p className="text-xs text-[#666666]">We empower you, we don't replace you.</p>
                    </div>
                    
                    <div className="flex justify-center gap-3">
                        <TrustBadge label="100% Secure" />
                        <TrustBadge label="GDPR Compliant" />
                        <TrustBadge label="AES-256" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureToggle({ icon: Icon, label, checked, onChange }: { icon: any, label: string, checked: boolean, onChange: (v: boolean) => void }) {
    return (
        <div className="p-3.5 flex items-center justify-between hover:bg-[#222222] transition-colors first:rounded-t-xl last:rounded-b-xl">
            <div className="flex items-center gap-3">
                <div className={cn("p-1.5 rounded-lg transition-colors", checked ? "bg-[#5E81AC]/20 text-[#5E81AC]" : "bg-[#333333] text-[#666666]")}>
                    <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-[#EDEDED]">{label}</span>
            </div>
            <Toggle checked={checked} onChange={onChange} size="sm" />
        </div>
    );
}

function TrustBadge({ label }: { label: string }) {
    return (
        <div className="px-2 py-1 rounded-md bg-[#111111] border border-[#333333] flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="h-2.5 w-2.5 text-[#666666]" />
            <span className="text-[9px] font-medium text-[#A1A1A1]">{label}</span>
        </div>
    );
}
