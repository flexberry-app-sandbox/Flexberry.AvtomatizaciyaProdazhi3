﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avtomatizaciya_prodazhi3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контр.
    /// </summary>
    // *** Start programmer edit section *** (Контр CustomAttributes)

    // *** End programmer edit section *** (Контр CustomAttributes)
    [AutoAltered()]
    [Caption("Контрагент")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрE", new string[] {
            "Контрагент as \'Контрагент\'"})]
    [View("КонтрL", new string[] {
            "Контрагент as \'Контрагент\'"})]
    public class Контр : ICSSoft.STORMNET.DataObject
    {
        
        private string fКонтрагент;
        
        // *** Start programmer edit section *** (Контр CustomMembers)

        // *** End programmer edit section *** (Контр CustomMembers)

        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Контр.Контрагент CustomAttributes)

        // *** End programmer edit section *** (Контр.Контрагент CustomAttributes)
        [StrLen(255)]
        public virtual string Контрагент
        {
            get
            {
                // *** Start programmer edit section *** (Контр.Контрагент Get start)

                // *** End programmer edit section *** (Контр.Контрагент Get start)
                string result = this.fКонтрагент;
                // *** Start programmer edit section *** (Контр.Контрагент Get end)

                // *** End programmer edit section *** (Контр.Контрагент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контр.Контрагент Set start)

                // *** End programmer edit section *** (Контр.Контрагент Set start)
                this.fКонтрагент = value;
                // *** Start programmer edit section *** (Контр.Контрагент Set end)

                // *** End programmer edit section *** (Контр.Контрагент Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрE", typeof(IIS.Avtomatizaciya_prodazhi3.Контр));
                }
            }
            
            /// <summary>
            /// "КонтрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрL", typeof(IIS.Avtomatizaciya_prodazhi3.Контр));
                }
            }
        }
    }
}
