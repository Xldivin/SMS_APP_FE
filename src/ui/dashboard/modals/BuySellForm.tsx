import React from 'react';
import { X } from 'lucide-react';
import BuySellCardStocks from './BuySellCardStocks';

const BuySellForm = ({ isOpen, onClose, profile, token, stocks, asset }:any) => {
    console.log(asset)
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg flex justify-center py-6 w-11/12 md:w-[50%] relative dark:bg-[#151515]">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    <X className="h-6 w-6" />
                </button>
                {/* Modal content goes here */}
                <BuySellCardStocks profile={profile} stocks={stocks} token={token} asset={asset}/>
            </div>
        </div>
    );
};

export default BuySellForm;
