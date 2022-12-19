import React from 'react';
import { Wrapper, ConverTitle } from './TabsReport.style';

const TabsReport = () => {
  return (
    <>
      <Wrapper>
        <ConverTitle>
          <span>Transparency Report</span>
          <br />
          <p>Updated: August 8th, 2022</p>
        </ConverTitle>
        <span>1. DEFINITIONS</span>
        <br />
        In this Transparency Report, the terms set forth below have the
        following meanings:
        <br />
        GHOST means Ghost Agency Limited, a corporation duly constituted under
        the Hong Kong Jurisdiction and doing business under the name GHOST.
        <br />
        Disclosures made pursuant to a court order, warrant, subpoena or other
        legal authority means disclosure of user information made by GHOST
        pursuant to Section 4 of the Guidelines.
        <br />
        Users means any person having access to the Services, who must comply
        with the representations and warranties and all other provisions of the
        Terms of Use and the Privacy Policy.
        <br />
        User Information means information concerning the users, as described
        more fully in Section 2 and Section 3 of the Guidelines.
        <br />
        Preservation Requests means requests from law enforcement authorities to
        preserve User Information pursuant to Section 8 of the Guidelines.
        <br />
        Requests for User Content means requests made by law enforcement
        authorities to obtain User Content.
        <br />
        Services means the GHOST real-time secured communication services for
        mobile applications, e-mails, text messages and data storage.
        <br />
        User Content means encrypted ephemeral communication data or information
        sent and received using the Services.
        <br />
        Emergency disclosures at the request of law enforcement means the
        disclosure of User Information at the request of law enforcement
        authorities where GHOST determines that there is a legal basis
        supporting the disclosure and there is an urgency for the disclosure in
        the circumstances, pursuant to Section 6 of the Guidelines.
        <br />
        <span>2. REPORT</span>
        <br />
        <br />
        <table id="simple-board">
          {/* <tbody>
            <tr id="row0">
              <td id="cell0-0">Type</td>
              <td id="cell0-1">
                Number of <br /> Requests
              </td>
              <td id="cell0-2">
                Number of <br /> Disclosures <br />
                <br /> (full or partial <br /> information disclosed)
              </td>
              <td id="cell0-3">
                Number of <br /> Requests <br />
                <br /> Rejected or <br /> Contested
              </td>
            </tr>
            <tr id="row1">
              <td id="cell1-0">
                Disclosures made pursuant to a court order, warrant, subpoena or
                other legal authority
              </td>
              <td id="cell1-1"></td>
              <td id="cell0-2"></td>
              <td id="cell1-3"></td>
            </tr>
            <tr id="row2">
              <td id="cell2-0">
                Emergency disclosures at the request of law enforcement
              </td>
              <td id="cell2-1"></td>
              <td id="cell0-2"></td>
              <td id="cell2-3"></td>
            </tr>
            <tr id="row3">
              <td id="cell2-0">Requests for User Content</td>
              <td id="cell2-1"></td>
              <td id="cell0-2"></td>
              <td id="cell2-3"></td>
            </tr>
            <tr id="row">
              <td id="cell2-0">Preservation Requests</td>
              <td id="cell2-1"></td>
              <td id="cell0-2"></td>
              <td id="cell2-3"></td>
            </tr>
          </tbody> */}
        </table>
        <br />
        <br />
        As outlined in <a>Section 3</a> of the Information Request Guidelines,
        GHOST does not have access to read or review User Content. Therefore,
        where the information sought pursuant to a valid law enforcement request
        relates to User Content, GHOST’s response to this request will reflect
        the fact that GHOST does not have access to the content, that the
        encrypted ephemeral files and information sent and received using the
        Services is encrypted and indecipherable.
        <br />
        <div style={{ height: '13rem' }}></div>
      </Wrapper>
    </>
  );
};
export default TabsReport;
